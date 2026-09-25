import { about, supportingTechnologies } from '../content/about'
import { localize, useI18n } from '../i18n/context'
import { Section, SectionHeader } from '../components/ui/Surface'
import { Tag } from '../components/ui/Badge'
export function About() {
  const { t, locale } = useI18n()
  const paragraphs = localize(about, locale)
  return (
    <Section
      id="about"
      tabIndex={-1}
      labelledBy="about-title"
      className="home-section"
    >
      <SectionHeader
        id="about-title"
        number="01"
        title={t.about}
        description={t.aboutSubtitle}
      />
      <div className="about-grid">
        <h3>{t.aboutTitle}</h3>
        <div className="prose">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="project-tags">
            {supportingTechnologies.map((technology) => (
              <Tag key={technology}>{technology}</Tag>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
