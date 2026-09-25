import { Code2, BriefcaseBusiness } from 'lucide-react'
import type { SocialLink as SocialLinkData } from '../../types/content'
import { ExternalLink } from '../ui/ExternalLink'
export function SocialLink({ social }: { social: SocialLinkData }) {
  const Icon = social.id === 'github' ? Code2 : BriefcaseBusiness
  return (
    <ExternalLink href={social.url}>
      <Icon size={17} aria-hidden="true" />
      {social.label}
    </ExternalLink>
  )
}
