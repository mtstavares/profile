import { experiences } from '../content/experience'
import { Link } from 'react-router'
import { careerLabels } from '../content/career'
import { useI18n } from '../i18n/context'
import { Section, SectionHeader } from '../components/ui/Surface'
import { TimelineItem } from '../components/common/TimelineItem'
export function Experience() {
  const { t, locale } = useI18n()
  return (
    <Section
      id="experience"
      tabIndex={-1}
      labelledBy="experience-title"
      className="home-section"
    >
      <SectionHeader
        id="experience-title"
        number="03"
        title={t.experienceTitle}
        description={t.experienceSubtitle}
      />
      <ol className="timeline">
        {experiences.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </ol>
      <Link to="/career" className="button button--secondary projects-all">
        {careerLabels[locale].more}
      </Link>
    </Section>
  )
}
