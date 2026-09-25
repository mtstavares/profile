import { useState } from 'react'
import { Link } from 'react-router'
import { certifications } from '../content/credentials'
import { useI18n } from '../i18n/context'
import { credentialLabels } from '../i18n/credentials'
import { Container, Eyebrow } from '../components/ui/Surface'
import { CredentialCard } from '../components/common/CredentialCard'
import type { Certification } from '../types/content'
export default function CredentialsPage() {
  const { locale, t } = useI18n()
  const labels = credentialLabels[locale]
  const [category, setCategory] = useState<'all' | Certification['category']>(
    'all',
  )
  const items = certifications.filter(
    (item) => category === 'all' || item.category === category,
  )
  return (
    <Container className="credentials-page">
      <Link className="case-link" to="/">
        ← {t.backHome}
      </Link>
      <header className="project-page-heading">
        <Eyebrow>{t.credentials}</Eyebrow>
        <h1>{labels.title}</h1>
        <p>{labels.intro}</p>
      </header>
      <div
        className="credential-filters"
        role="group"
        aria-label={labels.filters}
      >
        {(['all', 'cybersecurity', 'networking', 'development'] as const).map(
          (key) => (
            <button
              key={key}
              type="button"
              className="button button--secondary"
              aria-pressed={category === key}
              onClick={() => setCategory(key)}
            >
              {labels[key]}
            </button>
          ),
        )}
      </div>
      <p className="credential-count" role="status">
        {items.length} {labels.count}
      </p>
      <section aria-label={labels.title}>
        <h2 className="sr-only">{labels[category]}</h2>
        <div className="credentials-grid">
          {items.map((item) => (
            <CredentialCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </Container>
  )
}
