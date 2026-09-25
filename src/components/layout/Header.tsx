import { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'
import { profile } from '../../content/profile'
import { useI18n } from '../../i18n/context'
import { LanguageSwitcher } from '../common/LanguageSwitcher'
import { SectionLink } from '../common/SectionLink'
import { Container } from '../ui/Surface'
import { IconButton } from '../ui/Button'

export function Header() {
  const { t } = useI18n()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const header = useRef<HTMLElement>(null)
  const navigation = [
    { id: 'about', label: t.about },
    { id: 'experience', label: t.experience },
    { id: 'projects', label: t.projects },
    { id: 'credentials', label: t.credentials },
    { id: 'contact', label: t.contactNav },
  ]
  const close = () => setOpen(false)
  return (
    <header
      ref={header}
      className="site-header portfolio-header"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          close()
          header.current
            ?.querySelector<HTMLButtonElement>('.menu-toggle')
            ?.focus()
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) close()
      }}
    >
      <Container className="header-inner">
        <Link
          to="/"
          onClick={close}
          className="wordmark"
          aria-label={profile.name + ' — ' + t.navHome}
        >
          {profile.wordmark}
          <span>.</span>
        </Link>
        <div className="header-actions">
          <LanguageSwitcher />
          <Link
            to="/resume"
            onClick={close}
            className="button button--secondary header-resume"
          >
            {t.resume}
          </Link>
          <IconButton
            className="menu-toggle"
            variant="ghost"
            label={open ? t.menuClose : t.menuOpen}
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </IconButton>
        </div>
        <nav
          id="primary-navigation"
          className={open ? 'primary-navigation is-open' : 'primary-navigation'}
          aria-label={t.navigation}
        >
          {navigation.map((item) => (
            <SectionLink
              key={item.id}
              section={item.id}
              onClick={close}
              aria-current={
                location.pathname === '/' && location.hash === '#' + item.id
                  ? 'location'
                  : undefined
              }
            >
              {item.label}
            </SectionLink>
          ))}
        </nav>
      </Container>
    </header>
  )
}
