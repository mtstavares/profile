import { createContext, useContext } from 'react'
import type { Locale, Localized } from '../types/content'
import type { Messages } from './messages'

export interface I18nContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Messages
}
export const I18nContext = createContext<I18nContextValue | null>(null)
export function useI18n() {
  const value = useContext(I18nContext)
  if (!value) throw new Error('useI18n must be used inside I18nProvider')
  return value
}
export function localize<T>(value: Localized<T>, locale: Locale): T {
  return value[locale] ?? value['pt-BR']
}
