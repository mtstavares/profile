import { Mail, Phone, MessageCircle } from 'lucide-react'
import { profile } from '../content/profile'
import { localize, useI18n } from '../i18n/context'
import { Section, SectionHeader } from '../components/ui/Surface'
import { ExternalLink } from '../components/ui/ExternalLink'
import { SocialLink } from '../components/common/SocialLink'
export function Contact() {
  const { t, locale } = useI18n()
  return (
    <Section
      id="contact"
      tabIndex={-1}
      labelledBy="contact-title"
      className="home-section"
    >
      <SectionHeader
        id="contact-title"
        number="08"
        title={t.contactNav}
        description={t.contactSubtitle}
      />
      <div className="contact-grid">
        <div>
          <h3>{t.contactTitle}</h3>
          <p>{localize(profile.contact.location, locale)}</p>
        </div>
        <div>
          <a className="contact-email" href={'mailto:' + profile.contact.email}>
            <Mail size={20} aria-hidden="true" />
            {profile.contact.email}
          </a>
          <div className="contact-links">
            <a
              className="external-link"
              href={'tel:' + profile.contact.phone.international}
            >
              <Phone size={16} aria-hidden="true" />
              {t.phone} · {profile.contact.phone.display}
            </a>
            <ExternalLink
              href={
                'https://wa.me/' +
                profile.contact.phone.international.replace('+', '')
              }
            >
              <MessageCircle size={16} aria-hidden="true" />
              {t.whatsapp}
            </ExternalLink>
          </div>
          <div className="socials">
            {profile.socials.map((social) => (
              <SocialLink key={social.id} social={social} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
