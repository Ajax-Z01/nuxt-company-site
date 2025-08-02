export type SocialName = 'facebook' | 'instagram' | 'twitter' | 'whatsapp'

export interface ProjectSocial {
  name: SocialName
  link: string
  label: string
}

export interface ProjectContactInfo {
  address: string
  emails: string[]
  phones: string[]
  socials: ProjectSocial[]
}

export interface ProjectSection {
  header: string
  text: string
  checklist?: string[]
}

export interface ProjectInfoTableItem {
  property: string
  value: string
}
