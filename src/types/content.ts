export const locales = ['pt-BR', 'en-US'] as const
export type Locale = (typeof locales)[number]
// Portuguese is the editorial fallback; English can be added field by field.
export type Localized<T> = { 'pt-BR': T; 'en-US'?: T }
export type PublicUrl = `https://${string}`

export interface Contact {
  email: string
  phone: { display: string; international: string }
  location: Localized<string>
}
export interface SocialLink {
  id: 'github' | 'linkedin'
  label: string
  url: PublicUrl
  username?: string
}
export interface Profile {
  name: string
  wordmark: string
  role: Localized<string>
  headline: Localized<string>
  focus: Localized<readonly string[]>
  contact: Contact
  socials: readonly SocialLink[]
  photo: { src: string; alt: Localized<string>; width: number; height: number }
}
export interface Period {
  start: string // ISO year or YYYY-MM, depending on the known precision.
  end?: string // Omitted only for an ongoing role/course.
}
export interface Experience {
  id: string
  period: Period
  organization: Localized<string>
  role: Localized<string>
  description?: Localized<string>
  highlights: Localized<readonly string[]>
  skillIds: readonly string[]
  location?: Localized<string>
  secondary?: boolean
}
export interface Education {
  id: string
  institution: string
  qualification: Localized<string>
  period?: Period
  completedAt?: string
  description?: Localized<string>
}
export interface Certification {
  category: 'cybersecurity' | 'networking' | 'development'
  credentialId?: string
  certificateAsset?: string
  issuerLogo?: { src: string; alt: string; width: number; height: number }
  featured?: boolean
  resumeSelected?: boolean
  id: string
  name: Localized<string>
  issuer?: string
  issuedAt?: string
  expiresAt?: string
  credentialUrl?: PublicUrl
}
export interface Skill {
  id: string
  name: Localized<string>
  category: 'security' | 'engineering' | 'software' | 'infrastructure'
  description?: Localized<string>
}
export interface Project {
  id: string
  slug: string
  repository: `${string}/${string}`
  status: 'draft' | 'reviewed'
  name?: Localized<string>
  category?: Localized<string>
  description?: Localized<string>
  highlights?: Localized<readonly string[]>
  technologies?: readonly string[]
  url?: PublicUrl
  featured?: boolean
  listingFeatured?: boolean
  stage?: Localized<string>
  evidence?: { revision: string; reviewedAt: string; files: readonly string[] }
  caseStudy?: ProjectCase
}
export type ProjectSectionId =
  'overview' | 'motivation' | 'solution' | 'features' | 'security' | 'lessons'
export interface ProjectCaseSection {
  id: ProjectSectionId
  paragraphs?: Localized<readonly string[]>
  bullets?: Localized<readonly string[]>
}
export interface ProjectArchitecture {
  description: Localized<string>
  steps: readonly { label: Localized<string>; detail: Localized<string> }[]
  note?: Localized<string>
}
export interface ProjectCase {
  sections: readonly ProjectCaseSection[]
  architecture?: ProjectArchitecture
}
