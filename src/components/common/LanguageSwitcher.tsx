import { useI18n } from '../../i18n/context'
import { locales } from '../../types/content'
export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n()
  return (
    <div className="language-switcher" role="group" aria-label={t.language}>
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          aria-label={code === 'pt-BR' ? 'Português' : 'English'}
          aria-pressed={locale === code}
          onClick={() => setLocale(code)}
        >
          {code === 'pt-BR' ? 'PT' : 'EN'}
        </button>
      ))}
    </div>
  )
}
