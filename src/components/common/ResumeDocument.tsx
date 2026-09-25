import { profile } from '../../content/profile'
import { experiences } from '../../content/experience'
import { projects } from '../../content/projects'
import { education, certifications } from '../../content/credentials'
import {
  resumeSummary,
  resumeSkillGroups,
  resumeLabels,
} from '../../content/resume'
import { localize } from '../../i18n/context'
import { formatDate } from '../../lib/dates'
import type { Experience, Locale, Period } from '../../types/content'

export function ResumeDocument({
  locale,
  experienceItems = experiences,
}: {
  locale: Locale
  experienceItems?: readonly Experience[]
}) {
  const labels = resumeLabels[locale]
  const text = (value: Parameters<typeof localize<string>>[0]) =>
    localize(value, locale)
  const period = (value: Period) =>
    formatDate(value.start, locale) +
    ' - ' +
    (value.end
      ? formatDate(value.end, locale)
      : locale === 'pt-BR'
        ? 'Atual'
        : 'Present')
  return (
    <article className="resume-document">
      <header className="resume-heading">
        <h1>{profile.name}</h1>
        <p className="resume-headline">{text(profile.headline)}</p>
        <p>{text(profile.contact.location)}</p>
        <div className="resume-contacts">
          <a href={'mailto:' + profile.contact.email}>
            {profile.contact.email}
          </a>
          <a href={'tel:' + profile.contact.phone.international}>
            {profile.contact.phone.display}
          </a>
          <a
            href={
              'https://wa.me/' +
              profile.contact.phone.international.replace('+', '')
            }
          >
            WhatsApp
          </a>
          {profile.socials.map((s) => (
            <a key={s.id} href={s.url}>
              {s.label}: {s.url.replace('https://', '').replace(/\/$/, '')}
            </a>
          ))}
        </div>
      </header>
      <section>
        <h2>{labels.summary}</h2>
        <p>{text(resumeSummary)}</p>
      </section>
      <section>
        <h2>{labels.experience}</h2>
        {experienceItems.map((exp) => (
          <div className="resume-entry" key={exp.id}>
            <h3>{text(exp.role)}</h3>
            <p className="resume-meta">
              {text(exp.organization)} | {period(exp.period)}
              {exp.location && ' | ' + text(exp.location)}
            </p>
            {exp.description && <p>{text(exp.description)}</p>}
            {localize(exp.highlights, locale).length > 0 && (
              <ul>
                {localize(exp.highlights, locale).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>
      <div className="resume-page-two">
        <section>
          <h2>{labels.skills}</h2>
          {resumeSkillGroups.map((group) => (
            <p key={group.name['pt-BR']}>
              <strong>{text(group.name)}: </strong>
              {group.items.join(', ')}.
            </p>
          ))}
        </section>
        <section>
          <h2>{labels.projects}</h2>
          {projects
            .filter((p) => p.featured)
            .map((p) => (
              <div className="resume-entry" key={p.id}>
                <h3>{p.name ? text(p.name) : p.repository}</h3>
                {p.description && <p>{text(p.description)}</p>}
                <a href={'https://github.com/' + p.repository}>
                  {'github.com/' + p.repository}
                </a>
              </div>
            ))}
        </section>
        <section>
          <h2>{labels.education}</h2>
          {education.map((item) => (
            <div className="resume-entry" key={item.id}>
              <h3>{text(item.qualification)}</h3>
              <p>
                {item.institution} |{' '}
                {item.period
                  ? period(item.period)
                  : labels.completed + ' ' + item.completedAt}
              </p>
            </div>
          ))}
        </section>
        <section>
          <h2>{labels.certifications}</h2>
          <ul>
            {certifications.map((item) => (
              <li key={item.id}>
                {item.issuer && item.issuer + ' - '}
                {text(item.name)}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  )
}
