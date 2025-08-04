import type { Category } from './Category'
import type { Tag } from './Tag'

export interface ImageFormat {
  url: string
}

export interface CoverImage {
  url: string
  formats?: {
    thumbnail?: ImageFormat
    small?: ImageFormat
    medium?: ImageFormat
  }
}

export interface Post {
  id: number
  title: string
  subtitle?: string
  slug: string
  excerpt?: string
  content: string
  postDate: string
  coverImage?: CoverImage[]
  category?: Category
  tags?: Tag[]
}
