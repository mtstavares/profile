import { Link } from 'react-router'
import { CredentialCard } from '../components/common/CredentialCard'
import { credentialLabels } from '../i18n/credentials'
import { certifications, education } from '../content/credentials'
import { localize, useI18n } from '../i18n/context'
import { Section, SectionHeader } from '../components/ui/Surface'
import { formatDate } from '../lib/dates'
export function Credentials() {
  const { t, locale } = useI18n()
  const number = 6
  return (
    <>
      <Section
        id="credentials"
        tabIndex={-1}
        labelledBy="certifications-title"
        className="home-section"
      >
        <SectionHeader
          id="certifications-title"
          number={String(number).padStart(2, '0')}
          title={t.certificationsTitle}
          description={t.certificationsSubtitle}
        />
        <div className="credentials-grid">
          {certifications
            .filter((item) => item.featured)
            .map((item) => (
              <CredentialCard key={item.id} item={item} />
            ))}
        </div>
        <Link
          className="button button--secondary projects-all"
          to="/credentials"
        >
          {credentialLabels[locale].viewAll}
        </Link>
      </Section>
      <Section labelledBy="education-title" className="home-section">
        <SectionHeader
          id="education-title"
          number={String(number + 1).padStart(2, '0')}
          title={t.educationTitle}
          description={t.educationSubtitle}
        />
        <div className="education-grid">
          {education.map((item) => (
            <article key={item.id}>
              <p className="eyebrow">
                {item.completedAt
                  ? t.completed + ' ' + item.completedAt
                  : item.period &&
                    formatDate(item.period.start, locale) +
                      ' — ' +
                      (item.period.end
                        ? formatDate(item.period.end, locale)
                        : t.present)}
              </p>
              <h3>{localize(item.qualification, locale)}</h3>
              <p>{item.institution}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
