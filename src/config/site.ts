export function resolveSite(rawUrl = '', rawBase = '') {
  let url: URL | undefined
  if (rawUrl) {
    url = new URL(rawUrl)
    if (
      url.protocol !== 'https:' ||
      url.username ||
      url.password ||
      url.search ||
      url.hash ||
      /(^localhost$|\.localhost$|\.local$|^127\.|^0\.|^10\.|^192\.168\.|^172\.(1[6-9]|2\d|3[01])\.|:)/i.test(
        url.hostname,
      )
    ) {
      throw new Error(
        'VITE_SITE_URL must be a public HTTPS URL without credentials, query or fragment',
      )
    }
    url.pathname = url.pathname.replace(/\/$/, '') + '/'
  }
  const base = rawBase || url?.pathname || '/'
  if (!/^\/(?:[A-Za-z0-9_-]+\/)*$/.test(base))
    throw new Error('VITE_BASE_PATH must be / or /repository/')
  if (url && url.pathname !== base)
    throw new Error('Site URL path and base path must match')
  return { url: url?.href, base }
}
export const site = resolveSite(
  import.meta.env?.VITE_SITE_URL,
  import.meta.env?.VITE_BASE_PATH,
)
export function sitePageUrl(path: string) {
  return site.url
    ? new URL(
        path === '/' ? '' : path.replace(/^\//, '').replace(/\/$/, '') + '/',
        site.url,
      ).href
    : undefined
}
