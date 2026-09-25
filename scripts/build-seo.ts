import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises'
import { createServer, preview } from 'vite'
import { chromium } from '@playwright/test'
import type { AddressInfo } from 'node:net'
import type { profile as Profile } from '../src/content/profile'
import type { site as Site } from '../src/config/site'

const ssr = await createServer({
  mode: 'production',
  server: { middlewareMode: true, hmr: false },
  appType: 'custom',
})
const outDir = ssr.config.build.outDir
const browser = await chromium.launch(
  process.platform === 'win32' ? { channel: 'msedge' } : {},
)
let serving: Awaited<ReturnType<typeof preview>> | undefined
const escape = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('"', '&quot;')
try {
  const { site } = (await ssr.ssrLoadModule('/src/config/site.ts')) as {
    site: typeof Site
  }
  const { publicRoutes } = (await ssr.ssrLoadModule(
    '/src/lib/metadata.ts',
  )) as { publicRoutes: string[] }
  const { profile } = (await ssr.ssrLoadModule('/src/content/profile.ts')) as {
    profile: typeof Profile
  }
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    locale: 'pt-BR',
    reducedMotion: 'reduce',
  })
  const fontFile = (await readdir(outDir + '/assets')).find(
    (file) =>
      file.startsWith('inter-latin-wght-normal') && file.endsWith('.woff2'),
  )
  if (!fontFile) throw new Error('Missing Inter font')
  const font = (await readFile(outDir + '/assets/' + fontFile)).toString(
    'base64',
  )
  const tokens = await readFile('src/styles/tokens.css', 'utf8')
  const color = (name: string) => {
    const value = tokens.match(
      new RegExp('--color-' + name + ':\\s*([^;]+)'),
    )?.[1]
    if (!value) throw new Error('Missing color ' + name)
    return value
  }
  await page.setContent(
    `<html><head><style>@font-face{font-family:Inter;src:url(data:font/woff2;base64,${font})}*{box-sizing:border-box}body{margin:0;background:${color('background')};color:${color('primary')};font-family:Inter,sans-serif;padding:64px 76px;width:1200px;height:630px}.mark{font-size:58px;font-weight:750;letter-spacing:-4px}.mark span{color:${color('accent')}}.name{margin:64px 0 18px;font-size:20px;letter-spacing:5px;text-transform:uppercase}h1{font-size:64px;letter-spacing:-3px;margin:0 0 30px;font-weight:600}.focus{border-top:1px solid ${color('border')};padding-top:28px;color:${color('secondary')};font-size:24px;line-height:1.6}</style></head><body><div class="mark">${escape(profile.wordmark)}<span>.</span></div><p class="name">${escape(profile.name)}</p><h1>${escape(profile.role['pt-BR'])}</h1><div class="focus">${profile.focus['pt-BR'].map(escape).join('<br>')}</div></body></html>`,
  )
  await page.evaluate(() => document.fonts.ready)
  await page.screenshot({
    path: outDir + '/social-preview.jpg',
    type: 'jpeg',
    quality: 90,
  })
  const icon = await readFile('public/favicon.svg', 'utf8')
  for (const [size, file] of [
    [32, 'favicon-32.png'],
    [180, 'apple-touch-icon.png'],
  ] as const) {
    await page.setViewportSize({ width: size, height: size })
    await page.setContent(
      `<style>body{margin:0}svg{display:block;width:100vw;height:100vh}</style>${icon}`,
    )
    await page.screenshot({ path: outDir + '/' + file })
  }
  await page.close()
  serving = await preview({
    mode: 'production',
    preview: { host: '127.0.0.1', port: 0, strictPort: true },
  })
  const address = serving.httpServer.address() as AddressInfo
  const origin = `http://127.0.0.1:${address.port}`
  const snapshots: { file: string; html: string }[] = []
  for (const route of [...publicRoutes, '/design-system', '/__not-found__']) {
    const tab = await browser.newPage({
      locale: 'pt-BR',
      reducedMotion: 'reduce',
      viewport: { width: 1440, height: 900 },
    })
    const errors: string[] = []
    tab.on('pageerror', (e) => errors.push(e.message))
    await tab.goto(origin + site.base + route.slice(1), {
      waitUntil: 'networkidle',
    })
    await tab.locator('h1').waitFor({ state: 'visible' })
    await tab.evaluate(() => document.fonts.ready)
    if (errors.length) throw new Error(errors.join('\n'))
    // Snapshots provide readable HTML and route metadata even without JavaScript.
    const html = await tab.content()
    const file =
      route === '/'
        ? 'index.html'
        : route === '/__not-found__'
          ? '404.html'
          : route.slice(1) + '/index.html'
    snapshots.push({ file, html })
    await tab.close()
  }
  for (const { file, html } of snapshots) {
    await mkdir(outDir + '/' + file.slice(0, file.lastIndexOf('/') + 1), {
      recursive: true,
    })
    await writeFile(outDir + '/' + file, html)
  }
  const locations = site.url
    ? publicRoutes.map(
        (route) =>
          new URL(route === '/' ? '' : route.slice(1) + '/', site.url).href,
      )
    : []
  await writeFile(
    outDir + '/sitemap.xml',
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
      locations.map((url) => `<url><loc>${escape(url)}</loc></url>`).join('') +
      '</urlset>\n',
  )
  await writeFile(
    outDir + '/robots.txt',
    `User-agent: *\nAllow: /\n${site.url ? 'Sitemap: ' + new URL('sitemap.xml', site.url).href + '\n' : '# Configure VITE_SITE_URL to publish the sitemap.\n'}`,
  )
  await writeFile(outDir + '/.nojekyll', '')
} finally {
  const httpServer = serving?.httpServer
  if (httpServer)
    await new Promise<void>((resolve, reject) =>
      httpServer.close((error) => (error ? reject(error) : resolve())),
    )
  await browser.close()
  await ssr.close()
}
