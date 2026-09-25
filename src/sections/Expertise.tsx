import { expertise } from '../content/expertise'
import { localize, useI18n } from '../i18n/context'
import { Section, SectionHeader } from '../components/ui/Surface'
export function Expertise() {
  const { t, locale } = useI18n()
  return (
    <Section labelledBy="expertise-title" className="home-section">
      <SectionHeader
        id="expertise-title"
        number="02"
        title={t.expertiseTitle}
        description={t.expertiseSubtitle}
      />
      <div className="expertise-grid">
        {expertise.map((skill, index) => (
          <article key={skill.id}>
            <span className="index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')} /
            </span>
            <h3>{localize(skill.name, locale)}</h3>
            {skill.description && <p>{localize(skill.description, locale)}</p>}
          </article>
        ))}
      </div>
    </Section>
  )
}
