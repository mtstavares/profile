import { useState } from 'react'
import {
  ArrowRight,
  Code2,
  Layers,
  ScanLine,
  Network,
  Check,
} from 'lucide-react'
import { colorTokens, spacingSteps } from '../config/design-system'
import { profile } from '../content/profile'
import { useI18n } from '../i18n/context'
import { Button, IconButton, type ButtonVariant } from '../components/ui/Button'
import { Badge, Tag } from '../components/ui/Badge'
import {
  Container,
  Section,
  SectionHeader,
  Eyebrow,
  Card,
  Divider,
} from '../components/ui/Surface'
import { ExternalLink } from '../components/ui/ExternalLink'
import { Portrait } from '../components/common/Portrait'
export default function DesignSystemPage() {
  const { t } = useI18n()
  const [action, setAction] = useState<ButtonVariant | 'iconLabel' | null>(null)
  const label = (variant: ButtonVariant) =>
    variant === 'ghost' ? t.ghost : t[variant]
  const github = profile.socials.find((social) => social.id === 'github')
  return (
    <Container className="design-system">
      <div className="ds-intro">
        <Eyebrow>{t.dsEyebrow}</Eyebrow>
        <h1>{t.dsTitle}</h1>
        <p>{t.dsIntro}</p>
      </div>
      <Section labelledBy="palette">
        <SectionHeader
          id="palette"
          number="01"
          title={t.palette}
          description={t.paletteDesc}
        />
        <div className="swatch-grid">
          {colorTokens.map((token) => (
            <div className="swatch" key={token}>
              <div
                className="swatch-color"
                style={{ background: `var(--color-${token})` }}
              />
              <span>{token}</span>
            </div>
          ))}
        </div>
      </Section>
      <Section labelledBy="typography">
        <SectionHeader
          id="typography"
          number="02"
          title={t.typography}
          description={t.typographyDesc}
        />
        <div className="type-specimen">
          <div>
            <Eyebrow>{t.typeDisplay}</Eyebrow>
            <p className="type-display">{t.headingSample}</p>
          </div>
          <div>
            <Eyebrow>{t.typeHeading}</Eyebrow>
            <h3>{t.headingSample}</h3>
          </div>
          <div>
            <Eyebrow>{t.typeBody}</Eyebrow>
            <p className="body-specimen">{t.bodySample}</p>
          </div>
          <div>
            <Eyebrow>{t.typeMono}</Eyebrow>
            <p className="mono-specimen">01 / SECURITY ENGINEERING</p>
          </div>
        </div>
      </Section>
      <Section labelledBy="components">
        <SectionHeader
          id="components"
          number="03"
          title={t.components}
          description={t.componentsDesc}
        />
        <div className="component-grid">
          <Card>
            <h3>{t.buttons}</h3>
            <div className="sample-controls">
              {(['primary', 'secondary', 'ghost'] as const).map((variant) => (
                <Button
                  key={variant}
                  variant={variant}
                  onClick={() => setAction(variant)}
                >
                  {label(variant)}
                  <ArrowRight size={16} aria-hidden="true" />
                </Button>
              ))}
              <Button disabled>{t.disabled}</Button>
              <IconButton
                variant="secondary"
                label={t.iconLabel}
                onClick={() => setAction('iconLabel')}
              >
                <Check size={18} aria-hidden="true" />
              </IconButton>
            </div>
            <p className="sample-hint">{t.focusHint}</p>
            <p className="interaction-status" role="status">
              {action
                ? `${t.demoAction} ${action === 'iconLabel' ? t.iconLabel : label(action)}`
                : t.demoReady}
            </p>
            <Divider />
            {github && (
              <ExternalLink href={github.url}>{t.linkExample}</ExternalLink>
            )}
          </Card>
          <Card>
            <h3>{t.badges}</h3>
            <div className="sample-controls">
              <Badge>{t.neutral}</Badge>
              <Badge tone="accent">Blue Team</Badge>
              <Badge tone="success">{t.success}</Badge>
              <Badge tone="warning">{t.warning}</Badge>
              <Badge tone="danger">{t.danger}</Badge>
            </div>
            <div className="sample-controls">
              <Tag>Python</Tag>
              <Tag>PowerShell</Tag>
              <Tag>React</Tag>
            </div>
            <Divider />
            <div className="sample-icons" aria-hidden="true">
              <Code2 />
              <Layers />
              <ScanLine />
              <Network />
            </div>
          </Card>
          <Card className="specimen-card">
            <Eyebrow>{t.cardLabel}</Eyebrow>
            <h3>{t.cardTitle}</h3>
            <p>{t.cardBody}</p>
          </Card>
        </div>
      </Section>
      <Section labelledBy="photo">
        <SectionHeader
          id="photo"
          number="04"
          title={t.photoTitle}
          description={t.photoDesc}
        />
        <div className="photo-specimen">
          <Portrait lazy />
          <div className="photo-type">
            <span className="large-wordmark" aria-hidden="true">
              {profile.wordmark}
              <span>.</span>
            </span>
            <Eyebrow>{t.disciplines}</Eyebrow>
          </div>
        </div>
      </Section>
      <Section labelledBy="spacing">
        <SectionHeader
          id="spacing"
          number="05"
          title={t.spacing}
          description={t.spacingDesc}
        />
        <div className="spacing-grid">
          {spacingSteps.map((step) => (
            <div className="spacing-item" key={step}>
              <span>{step}</span>
              <div style={{ width: `var(--space-${step})` }} />
            </div>
          ))}
        </div>
      </Section>
    </Container>
  )
}
