import { Link } from 'react-router'
import type { Project } from '../../types/content'
import { localize, useI18n } from '../../i18n/context'
import { Card, Eyebrow } from '../ui/Surface'
import { Tag } from '../ui/Badge'
import { ExternalLink } from '../ui/ExternalLink'
export function ProjectCard({
  project,
  principal = false,
}: {
  project: Project
  principal?: boolean
}) {
  const { locale, t } = useI18n()
  return (
    <article className={principal ? 'project-featured' : ''}>
      <Card className="project-card">
        <div>
          <Eyebrow>
            {principal
              ? t.featured
              : project.category && localize(project.category, locale)}
          </Eyebrow>
          {project.stage && (
            <p className="project-stage">{localize(project.stage, locale)}</p>
          )}
          <h3>
            {project.name ? localize(project.name, locale) : project.repository}
          </h3>
          {principal && project.category && (
            <p className="project-category">
              {localize(project.category, locale)}
            </p>
          )}
          {project.description && (
            <p>{localize(project.description, locale)}</p>
          )}
          {project.highlights && (
            <ul>
              {localize(project.highlights, locale).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <div className="project-tags">
            {project.technologies?.map((technology) => (
              <Tag key={technology}>{technology}</Tag>
            ))}
          </div>
          {project.caseStudy && (
            <Link
              className="case-link"
              to={'/projects/' + project.slug}
              aria-label={
                t.caseLink +
                ' — ' +
                (project.name
                  ? localize(project.name, locale)
                  : project.repository)
              }
            >
              {t.caseLink} <span aria-hidden="true">→</span>
            </Link>
          )}
          <ExternalLink
            href={'https://github.com/' + project.repository}
            aria-label={
              t.repository +
              ' — ' +
              (project.name
                ? localize(project.name, locale)
                : project.repository)
            }
          >
            {t.repository}
          </ExternalLink>
        </div>
      </Card>
    </article>
  )
}
