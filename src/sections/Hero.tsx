import { ArrowRight, FileText, MapPin, Mail } from 'lucide-react'
import { Link } from 'react-router'
import { m } from 'framer-motion'
import { profile } from '../content/profile'
import { positioning } from '../content/about'
import { localize, useI18n } from '../i18n/context'
import { Eyebrow } from '../components/ui/Surface'
import { Portrait } from '../components/common/Portrait'
import { SocialLink } from '../components/common/SocialLink'
import { SectionLink } from '../components/common/SectionLink'
export function Hero() {
  const { t, locale } = useI18n()
  return (
    <>
      <div className="page-kicker">
        <Eyebrow>{t.heroEyebrow}</Eyebrow>
        <span className="small-location">
          <MapPin size={13} aria-hidden="true" />
          {localize(profile.contact.location, locale)}
        </span>
      </div>
      <m.section
        className="identity-grid"
        aria-labelledby="identity-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        <div className="identity-copy">
          <Eyebrow>{profile.name}</Eyebrow>
          <h1 id="identity-title">
            {localize(profile.role, locale)}
            <span className="title-dot">.</span>
          </h1>
          <div className="focus-lines">
            {localize(profile.focus, locale).map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <p className="hero-positioning">{localize(positioning, locale)}</p>
          <div className="identity-actions">
            <SectionLink section="projects" className="button button--primary">
              {t.exploreWork}
              <ArrowRight size={17} aria-hidden="true" />
            </SectionLink>
            <Link to="/resume" className="button button--secondary">
              <FileText size={17} aria-hidden="true" />
              {t.resume}
            </Link>
          </div>
          <div className="socials">
            {profile.socials.map((social) => (
              <SocialLink key={social.id} social={social} />
            ))}
            <a
              className="external-link"
              href={'mailto:' + profile.contact.email}
            >
              <Mail size={17} aria-hidden="true" />
              {t.email}
            </a>
          </div>
        </div>
        <Portrait />
      </m.section>
      <div className="discipline-strip">
        <span className="accent-line" />
        <Eyebrow>{t.disciplines}</Eyebrow>
      </div>
    </>
  )
}
