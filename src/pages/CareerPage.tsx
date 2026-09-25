import { Link } from 'react-router'
import { careerHistory, careerLabels } from '../content/career'
import { useI18n } from '../i18n/context'
import { Container, Section } from '../components/ui/Surface'
import { TimelineItem } from '../components/common/TimelineItem'

export default function CareerPage() {
  const { locale, t } = useI18n()
  const labels = careerLabels[locale]
  return (
    <Container className="projects-page">
      <header className="project-page-heading">
        <Link to="/#experience">{t.backHome}</Link>
        <h1>{labels.title}</h1>
        <p>{labels.intro}</p>
      </header>
      <Section labelledBy="career-timeline">
        <h2 id="career-timeline">{labels.timeline}</h2>
        <ol className="timeline">
          {careerHistory.map((item) => (
            <TimelineItem key={item.id} item={item} />
          ))}
        </ol>
      </Section>
    </Container>
  )
}
