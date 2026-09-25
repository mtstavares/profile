import type { HTMLAttributes, PropsWithChildren } from 'react'
type DivProps = HTMLAttributes<HTMLDivElement>
export function Container({ className = '', ...props }: DivProps) {
  return <div className={`site-container ${className}`} {...props} />
}
export function Card({ className = '', ...props }: DivProps) {
  return <div className={`card ${className}`} {...props} />
}
export function Divider() {
  return <hr className="divider" />
}
export function Eyebrow({ children }: PropsWithChildren) {
  return <p className="eyebrow">{children}</p>
}
interface SectionProps extends HTMLAttributes<HTMLElement> {
  labelledBy: string
}
export function Section({
  labelledBy,
  className = '',
  ...props
}: SectionProps) {
  return (
    <section
      aria-labelledby={labelledBy}
      className={`section ${className}`}
      {...props}
    />
  )
}
export function SectionHeader({
  id,
  number,
  title,
  description,
}: {
  id: string
  number: string
  title: string
  description: string
}) {
  return (
    <div className="section-header">
      <div className="flex items-baseline gap-4">
        <span className="index">{number}</span>
        <h2 id={id}>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  )
}
