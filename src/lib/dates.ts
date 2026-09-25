import type { Locale } from '../types/content'
export function formatDate(value: string, locale: Locale): string {
  if (/^\d{4}$/.test(value)) return value
  const date = new Date(
    value.length === 7 ? value + '-01T12:00:00Z' : value + 'T12:00:00Z',
  )
  return new Intl.DateTimeFormat(locale, {
    month: 'short',
    year: 'numeric',
    ...(value.length > 7 ? { day: 'numeric' as const } : {}),
    timeZone: 'UTC',
  }).format(date)
}
