import { mkdir, readFile } from 'node:fs/promises'
import { createServer } from 'vite'
import { chromium } from '@playwright/test'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import type { ResumeDocument } from '../src/components/common/ResumeDocument'
import type { resumeFiles as ResumeFiles } from '../src/content/resume'
import type { policeExperiences as PoliceExperiences } from '../src/content/career'

const server = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
})
const outDir = server.config.build.outDir
const browser = await chromium.launch(
  process.platform === 'win32' ? { channel: 'msedge' } : {},
)
try {
  const { resumeFiles } = (await server.ssrLoadModule(
    '/src/content/resume.ts',
  )) as { resumeFiles: typeof ResumeFiles }
  const { ResumeDocument: Document } = (await server.ssrLoadModule(
    '/src/components/common/ResumeDocument.tsx',
  )) as { ResumeDocument: typeof ResumeDocument }
  const css = await readFile('src/styles/resume.css', 'utf8')
  const { policeExperiences } = (await server.ssrLoadModule(
    '/src/content/career.ts',
  )) as { policeExperiences: typeof PoliceExperiences }
  await mkdir(outDir, { recursive: true })
  for (const locale of ['pt-BR', 'en-US'] as const) {
    const page = await browser.newPage()
    await page.setContent(
      `<!doctype html><html lang="${locale}"><head><meta charset="UTF-8"><title>Matheus Tavares - ${locale}</title><style>${css}</style></head><body>${renderToStaticMarkup(createElement(Document, { locale, experienceItems: policeExperiences }))}</body></html>`,
    )
    await page.pdf({
      path: outDir + '/' + resumeFiles[locale],
      format: 'A4',
      preferCSSPageSize: true,
      printBackground: true,
      tagged: true,
    })
    const pdf = await readFile(outDir + '/' + resumeFiles[locale])
    const pageCount = [...pdf.toString('latin1').matchAll(/\/Type\s*\/Page\b/g)]
      .length
    if (pageCount < 1 || pageCount > 2)
      throw new Error(`Resume ${locale}: expected 1-2 pages, got ${pageCount}`)
    await page.close()
  }
} finally {
  await browser.close()
  await server.close()
}
