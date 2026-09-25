import { Link } from 'react-router'
import { projects } from '../content/projects'
import { useI18n } from '../i18n/context'
import { Section, SectionHeader } from '../components/ui/Surface'
import { ProjectCard } from '../components/common/ProjectCard'
export function FeaturedProjects() {
  const { t } = useI18n()
  return (
    <Section
      id="projects"
      tabIndex={-1}
      labelledBy="projects-title"
      className="home-section"
    >
      <SectionHeader
        id="projects-title"
        number="04"
        title={t.projectsTitle}
        description={t.projectsSubtitle}
      />
      <div className="projects-grid">
        {projects
          .filter(
            (project) => project.featured && project.status === 'reviewed',
          )
          .map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              principal={index === 0}
            />
          ))}
      </div>
      <Link className="button button--secondary projects-all" to="/projects">
        {t.allProjects}
      </Link>
    </Section>
  )
}
