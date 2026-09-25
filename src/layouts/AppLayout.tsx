import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router'
import { applyMetadata, pageMetadata } from '../lib/metadata'
import { useI18n } from '../i18n/context'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { scrollToSection } from '../lib/navigation'
export function AppLayout() {
  const { t, locale } = useI18n()
  const { pathname, hash } = useLocation()
  const main = useRef<HTMLElement>(null)
  const previousPath = useRef(pathname)
  useEffect(() => {
    const metadata = pageMetadata(pathname, locale, t)
    applyMetadata(metadata, locale)
    if (previousPath.current !== pathname) {
      main.current?.focus()
      window.scrollTo(0, 0)
      previousPath.current = pathname
    }
  }, [pathname, t, locale])
  useEffect(() => {
    if (pathname !== '/' || !hash) return
    const frame = requestAnimationFrame(() => scrollToSection(hash))
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])
  return (
    <>
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault()
          main.current?.focus()
          main.current?.scrollIntoView()
        }}
      >
        {t.skip}
      </a>
      <Header />
      <main id="main-content" ref={main} tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
