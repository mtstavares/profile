export function scrollToSection(hash: string) {
  const target = document.getElementById(hash.replace(/^#/, ''))
  if (!target) return
  target.focus({ preventScroll: true })
  target.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'instant'
      : 'smooth',
    block: 'start',
  })
}
