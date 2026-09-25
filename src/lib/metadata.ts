import { projects } from '../content/projects'
import { careerLabels } from '../content/career'
import { profile } from '../content/profile'
import { resumeSummary } from '../content/resume'
import { credentialLabels } from '../i18n/credentials'
import { localize } from '../i18n/context'
import { site, sitePageUrl } from '../config/site'
import type { Messages } from '../i18n/messages'
import type { Locale } from '../types/content'

export const publicRoutes = [
  '/',
  '/projects',
  ...projects.filter((p) => p.caseStudy).map((p) => '/projects/' + p.slug),
  '/credentials',
  '/resume',
  '/career',
]
export function pageMetadata(pathname: string, locale: Locale, t: Messages) {
  const path = pathname.replace(/\/$/, '') || '/'
  const project = projects.find((p) => path === '/projects/' + p.slug)
  const indexable = publicRoutes.includes(path)
  const label = project?.name
    ? localize(project.name, locale)
    : path === '/career'
      ? careerLabels[locale].title
      : path === '/projects'
        ? t.backProjects
        : path === '/credentials'
          ? t.credentials
          : path === '/resume'
            ? t.resume
            : path === '/design-system'
              ? t.navDesign
              : t.missingTitle
  const title =
    path === '/'
      ? `${profile.name} | ${localize(profile.role, locale)}`
      : `${label} | ${profile.name}`
  const description = project?.description
    ? localize(project.description, locale)
    : path === '/'
      ? localize(profile.headline, locale)
      : path === '/career'
        ? careerLabels[locale].intro
        : path === '/projects'
          ? t.projectsMeta
          : path === '/credentials'
            ? credentialLabels[locale].intro
            : path === '/resume'
              ? localize(resumeSummary, locale)
              : label
  const canonical = indexable ? sitePageUrl(path) : undefined
  return {
    title,
    description,
    canonical,
    image: site.url ? new URL('social-preview.jpg', site.url).href : undefined,
    indexable,
    person:
      path === '/'
        ? {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: profile.name,
            jobTitle: localize(profile.role, locale),
            ...(canonical && { url: canonical }),
            sameAs: profile.socials.map((s) => s.url),
            email: 'mailto:' + profile.contact.email,
          }
        : undefined,
  }
}
export function applyMetadata(
  metadata: ReturnType<typeof pageMetadata>,
  locale: Locale,
) {
  document.title = metadata.title
  const tag = (key: string, value: string | undefined, property = false) => {
    const attribute = property ? 'property' : 'name'
    let node = document.head.querySelector<HTMLMetaElement>(
      `meta[${attribute}="${key}"]`,
    )
    if (!value) {
      node?.remove()
      return
    }
    if (!node) {
      node = document.createElement('meta')
      node.setAttribute(attribute, key)
      document.head.append(node)
    }
    node.content = value
  }
  tag('description', metadata.description)
  tag(
    'robots',
    metadata.indexable && site.url ? 'index,follow' : 'noindex,follow',
  )
  for (const [key, value] of Object.entries({
    title: metadata.title,
    description: metadata.description,
    type: 'website',
    url: metadata.canonical,
    image: metadata.image,
    locale: locale.replace('-', '_'),
    site_name: profile.name,
  }))
    tag('og:' + key, value, true)
  for (const [key, value] of Object.entries({
    card: 'summary_large_image',
    title: metadata.title,
    description: metadata.description,
    image: metadata.image,
  }))
    tag('twitter:' + key, value)
  tag('og:image:width', metadata.image ? '1200' : undefined, true)
  tag('og:image:height', metadata.image ? '630' : undefined, true)
  tag(
    'og:image:alt',
    metadata.image ? localize(profile.headline, locale) : undefined,
    true,
  )
  tag(
    'twitter:image:alt',
    metadata.image ? localize(profile.headline, locale) : undefined,
  )
  document.head.querySelector('link[rel="canonical"]')?.remove()
  if (metadata.canonical) {
    const link = document.createElement('link')
    link.rel = 'canonical'
    link.href = metadata.canonical
    document.head.append(link)
  }
  document.getElementById('person-jsonld')?.remove()
  if (metadata.person) {
    const script = document.createElement('script')
    script.id = 'person-jsonld'
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(metadata.person).replace(
      /</g,
      '\\u003c',
    )
    document.head.append(script)
  }
}
