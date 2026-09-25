import { Link, useParams } from 'react-router'
import { projects } from '../content/projects'
import { localize, useI18n } from '../i18n/context'
import { Container, Eyebrow } from '../components/ui/Surface'
import { ExternalLink } from '../components/ui/ExternalLink'
import { Tag } from '../components/ui/Badge'
import type { ProjectCaseSection } from '../types/content'
import NotFoundPage from './NotFoundPage'

function CaseSection({ section }: { section: ProjectCaseSection }) {
  const { t, locale } = useI18n()
  return (
    <section className="case-section" aria-labelledby={'case-' + section.id}>
      <h2 id={'case-' + section.id}>{t[section.id]}</h2>
      <div>
        {section.paragraphs &&
          localize(section.paragraphs, locale).map((p) => <p key={p}>{p}</p>)}
        {section.bullets && (
          <ul>
            {localize(section.bullets, locale).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
export default function ProjectCasePage() {
  const { slug } = useParams()
  const { t, locale } = useI18n()
  const index = projects.findIndex((p) => p.slug === slug && p.caseStudy)
  const project = projects[index]
  if (!project?.caseStudy) return <NotFoundPage />
  const { sections, architecture } = project.caseStudy
  const name = project.name
    ? localize(project.name, locale)
    : project.repository
  return (
    <Container className="case-page">
      <nav className="case-breadcrumb" aria-label={t.breadcrumb}>
        <Link to="/projects">← {t.backProjects}</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{name}</span>
      </nav>
      <article>
        <header className="project-page-heading">
          <Eyebrow>{t.caseLabel}</Eyebrow>
          <h1>{name}</h1>
          {project.category && (
            <p className="project-category">
              {localize(project.category, locale)}
            </p>
          )}
          {project.description && (
            <p>{localize(project.description, locale)}</p>
          )}
          {project.stage && (
            <p className="project-stage">{localize(project.stage, locale)}</p>
          )}
          <ExternalLink href={'https://github.com/' + project.repository}>
            {t.repository}
          </ExternalLink>
        </header>
        {sections
          .filter((s) => ['overview', 'motivation', 'solution'].includes(s.id))
          .map((s) => (
            <CaseSection key={s.id} section={s} />
          ))}
        {architecture && (
          <section
            className="case-architecture"
            aria-labelledby="case-architecture"
          >
            <h2 id="case-architecture">{t.architecture}</h2>
            <p>{localize(architecture.description, locale)}</p>
            <ol className="architecture-flow">
              {architecture.steps.map((step, i) => (
                <li key={i}>
                  <span className="index" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3>{localize(step.label, locale)}</h3>
                  <p>{localize(step.detail, locale)}</p>
                </li>
              ))}
            </ol>
            {architecture.note && (
              <p className="case-note">{localize(architecture.note, locale)}</p>
            )}
          </section>
        )}
        {sections
          .filter((s) => ['features', 'security'].includes(s.id))
          .map((s) => (
            <CaseSection key={s.id} section={s} />
          ))}
        {project.technologies?.length && (
          <section className="case-section" aria-labelledby="case-stack">
            <h2 id="case-stack">{t.techStack}</h2>
            <div className="project-tags">
              {project.technologies.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </section>
        )}
        {sections
          .filter((s) => s.id === 'lessons')
          .map((s) => (
            <CaseSection key={s.id} section={s} />
          ))}
        {project.evidence && (
          <details className="case-sources">
            <summary>{t.sources}</summary>
            <p>{t.sourceNote}</p>
            <p className="project-stage">
              {project.evidence.reviewedAt} ·{' '}
              {project.evidence.revision.slice(0, 7)}
            </p>
            <ul>
              {project.evidence.files.map((file) => (
                <li key={file}>
                  <ExternalLink
                    href={
                      'https://github.com/' +
                      project.repository +
                      '/blob/' +
                      project.evidence?.revision +
                      '/' +
                      file
                    }
                  >
                    {file}
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </details>
        )}
      </article>
      <nav className="case-pagination" aria-label={t.backProjects}>
        {[index - 1, index + 1].map((i) => {
          const item = projects[i]
          return (
            item?.caseStudy && (
              <Link key={item.id} to={'/projects/' + item.slug}>
                <span className="project-stage">
                  {i < index ? t.previousProject : t.nextProject}
                </span>
                <span>
                  {item.name ? localize(item.name, locale) : item.repository}{' '}
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            )
          )
        })}
      </nav>
    </Container>
  )
}
