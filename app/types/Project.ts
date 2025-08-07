export type SocialName = 'facebook' | 'instagram' | 'twitter' | 'whatsapp' | 'linkedin'

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
  description: string
}

export interface ProjectDetail {
  text: string
}

export interface ProjectInfo {
  id: number
  Location: string
  Client: string
  Date: string
  Budget: string
  Area: string
  Type: string
}

export interface ProjectImageFormat {
  url: string
}

export interface ProjectImage {
  url: string
  formats?: {
    thumbnail?: ProjectImageFormat
    small?: ProjectImageFormat
    medium?: ProjectImageFormat
    large?: ProjectImageFormat
  }
}

export interface Project {
  id: number
  documentId: string
  title: string
  subtitle: string
  slug: string
  location: string
  description: string
  image: ProjectImage[]
  details: ProjectDetail[]
  sections: ProjectSection[]
  info: ProjectInfo
  info_contact: {
    address: string
    emails: { text: string }[]
    phones: { text: string }[]
    socials: ProjectSocial[]
  }
  createdAt: string
  updatedAt: string
  publishedAt: string
}
