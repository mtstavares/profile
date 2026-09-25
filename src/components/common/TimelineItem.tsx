import type { Experience } from '../../types/content'
import { localize, useI18n } from '../../i18n/context'
import { formatDate } from '../../lib/dates'
export function TimelineItem({ item }: { item: Experience }) {
  const { locale, t } = useI18n()
  return (
    <li
      className={
        'timeline-item' + (item.secondary ? ' timeline-secondary' : '')
      }
    >
      <div className="timeline-period">
        <time dateTime={item.period.start}>
          {formatDate(item.period.start, locale)}
        </time>
        <span> — </span>
        {item.period.end ? (
          <time dateTime={item.period.end}>
            {formatDate(item.period.end, locale)}
          </time>
        ) : (
          t.present
        )}
      </div>
      <article>
        <p className="eyebrow">
          {item.secondary
            ? t.earlierExperience
            : localize(item.organization, locale)}
        </p>
        <h3>{localize(item.role, locale)}</h3>
        {item.secondary && (
          <p>
            {localize(item.organization, locale)}
            {item.location && ' · ' + localize(item.location, locale)}
          </p>
        )}
        {item.description && <p>{localize(item.description, locale)}</p>}
        {localize(item.highlights, locale).length > 0 && (
          <ul>
            {localize(item.highlights, locale).map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}
      </article>
    </li>
  )
}
