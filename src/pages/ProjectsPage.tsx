import { projects } from '../content/projects'
import { useI18n } from '../i18n/context'
import { Container, Eyebrow, Section } from '../components/ui/Surface'
import { ProjectCard } from '../components/common/ProjectCard'
export default function ProjectsPage() {
  const { t } = useI18n()
  return (
    <Container className="projects-page">
      <header className="project-page-heading">
        <Eyebrow>{t.backProjects}</Eyebrow>
        <h1>{t.projectsIntro}</h1>
        <p>{t.projectsBody}</p>
      </header>
      {[true, false].map((featured) => (
        <Section
          key={String(featured)}
          labelledBy={featured ? 'featured-projects' : 'other-projects'}
        >
          <h2 id={featured ? 'featured-projects' : 'other-projects'}>
            {featured ? t.editorialFeatured : t.otherProjects}
          </h2>
          <div className="projects-grid">
            {projects
              .filter(
                (project) => Boolean(project.listingFeatured) === featured,
              )
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </Section>
      ))}
    </Container>
  )
}
