import type { PropsWithChildren } from 'react'
export type BadgeTone = 'neutral' | 'accent' | 'success' | 'warning' | 'danger'
export function Badge({
  tone = 'neutral',
  children,
}: PropsWithChildren<{ tone?: BadgeTone }>) {
  return (
    <span className={`badge badge--${tone}`}>
      <span className="badge-dot" aria-hidden="true" />
      {children}
    </span>
  )
}
export function Tag({ children }: PropsWithChildren) {
  return <span className="tag">{children}</span>
}
