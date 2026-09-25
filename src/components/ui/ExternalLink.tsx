import { ArrowUpRight } from 'lucide-react'
import type { AnchorHTMLAttributes } from 'react'
import { useI18n } from '../../i18n/context'
export function ExternalLink({
  children,
  className = '',
  ...props
}: Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'>) {
  const { t } = useI18n()
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className={`external-link ${className}`}
    >
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
      <span className="sr-only"> ({t.external})</span>
    </a>
  )
}
