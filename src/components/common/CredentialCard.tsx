import type { Certification } from '../../types/content'
import { localize, useI18n } from '../../i18n/context'
import { credentialLabels } from '../../i18n/credentials'
import { formatDate } from '../../lib/dates'
import { ExternalLink } from '../ui/ExternalLink'
export function CredentialCard({ item }: { item: Certification }) {
  const { locale } = useI18n()
  const labels = credentialLabels[locale]
  return (
    <article className="credential-card">
      <div className="issuer-visual">
        {item.issuerLogo ? (
          <img
            src={item.issuerLogo.src}
            alt={item.issuerLogo.alt}
            width={item.issuerLogo.width}
            height={item.issuerLogo.height}
            loading="lazy"
          />
        ) : (
          <span className="issuer-wordmark" aria-hidden="true">
            {item.issuer}
          </span>
        )}
      </div>
      <p className="eyebrow">{labels[item.category]}</p>
      <h3>{localize(item.name, locale)}</h3>
      <p>{item.issuer}</p>
      <dl>
        {item.issuedAt && (
          <div>
            <dt>{labels.issued}</dt>
            <dd>
              <time dateTime={item.issuedAt}>
                {formatDate(item.issuedAt, locale)}
              </time>
            </dd>
          </div>
        )}
        {item.expiresAt && (
          <div>
            <dt>{labels.expires}</dt>
            <dd>
              <time dateTime={item.expiresAt}>
                {formatDate(item.expiresAt, locale)}
              </time>
            </dd>
          </div>
        )}
        {item.credentialId && (
          <div className="credential-id">
            <dt>{labels.id}</dt>
            <dd>
              {item.credentialUrl ? (
                <ExternalLink href={item.credentialUrl}>
                  {item.credentialId}
                </ExternalLink>
              ) : (
                item.credentialId
              )}
            </dd>
          </div>
        )}
      </dl>
      {item.credentialUrl && !item.credentialId && (
        <ExternalLink href={item.credentialUrl}>{labels.view}</ExternalLink>
      )}
      {item.certificateAsset && (
        <ExternalLink href={import.meta.env.BASE_URL + item.certificateAsset}>
          {labels.certificate}
        </ExternalLink>
      )}
    </article>
  )
}
