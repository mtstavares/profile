import { useEffect, useState, type PropsWithChildren } from 'react'
import { I18nContext } from './context'
import { en, pt } from './messages'
import type { Locale } from '../types/content'

const storageKey = 'mt-portfolio.locale'
function initialLocale(): Locale {
  try {
    const stored = localStorage.getItem(storageKey)
    if (stored === 'pt-BR' || stored === 'en-US') return stored
  } catch {
    /* Storage may be blocked; in-memory selection still works. */
  }
  return navigator.language.toLowerCase().startsWith('en') ? 'en-US' : 'pt-BR'
}
export function I18nProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<Locale>(initialLocale)
  useEffect(() => {
    document.documentElement.lang = locale
    try {
      localStorage.setItem(storageKey, locale)
    } catch {
      /* Optional persistence. */
    }
  }, [locale])
  return (
    <I18nContext value={{ locale, setLocale, t: locale === 'en-US' ? en : pt }}>
      {children}
    </I18nContext>
  )
}
