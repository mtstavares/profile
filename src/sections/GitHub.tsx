import { Link } from 'react-router'
import { projects } from '../content/projects'
import { profile } from '../content/profile'
import { useI18n } from '../i18n/context'
import { Section, SectionHeader } from '../components/ui/Surface'
import { ExternalLink } from '../components/ui/ExternalLink'
export function GitHub() {
  const { t } = useI18n()
  const github = profile.socials.find((social) => social.id === 'github')
  return (
    <Section labelledBy="github-title" className="home-section">
      <SectionHeader
        id="github-title"
        number="05"
        title={t.githubTitle}
        description={t.githubSubtitle}
      />
      <div className="github-grid">
        <div className="github-profile">
          <span className="github-handle">{github?.username}</span>
          <Link className="case-link" to="/projects">
            {t.allProjects}
          </Link>
          {github && (
            <ExternalLink href={github.url}>{t.githubProfile}</ExternalLink>
          )}
        </div>
        <ul className="repository-list">
          {projects.map((project) => (
            <li key={project.id}>
              <ExternalLink href={'https://github.com/' + project.repository}>
                {project.repository}
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
