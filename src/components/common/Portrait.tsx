import { profile } from '../../content/profile'
import { localize, useI18n } from '../../i18n/context'
export function Portrait({ lazy = false }: { lazy?: boolean }) {
  const { locale } = useI18n()
  return (
    <figure className="portrait">
      <div className="portrait-image">
        <img
          src={profile.photo.src}
          alt={localize(profile.photo.alt, locale)}
          width={profile.photo.width}
          height={profile.photo.height}
          loading={lazy ? 'lazy' : 'eager'}
          decoding="async"
        />
      </div>
    </figure>
  )
}
