export interface ImageFormat {
  name: string
  hash: string
  ext: string
  mime: string
  path: string | null
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}

export interface ImageFormats {
  thumbnail?: ImageFormat
  small?: ImageFormat
  medium?: ImageFormat
  large?: ImageFormat
}

export interface CoverImage {
  id: number
  documentId: string
  name: string
  alternativeText: string | null
  caption: string | null
  width: number
  height: number
  formats?: ImageFormats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: string
  provider_metadata: any | null
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Post {
  id: number
  documentId: string
  title: string
  slug: string
  content: string
  postDate: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  coverImage?: CoverImage[]
}
