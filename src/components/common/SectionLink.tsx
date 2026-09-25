import { Link, useLocation, type LinkProps } from 'react-router'
import { scrollToSection } from '../../lib/navigation'
export function SectionLink({
  section,
  onClick,
  ...props
}: Omit<LinkProps, 'to'> & { section: string }) {
  const location = useLocation()
  return (
    <Link
      to={'/#' + section}
      {...props}
      onClick={(event) => {
        onClick?.(event)
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.altKey ||
          event.shiftKey
        )
          return
        if (location.pathname === '/' && location.hash === '#' + section)
          requestAnimationFrame(() => scrollToSection('#' + section))
      }}
    />
  )
}
