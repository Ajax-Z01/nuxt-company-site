import { ref } from 'vue'
import { useRuntimeConfig } from '#app'
import type { Post } from '~/types/Post'

export const usePosts = () => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.strapiBaseUrl

  const posts = ref<Post[]>([])
  const post = ref<Post | null>(null)
  const error = ref<Error | null>(null)
  const loading = ref(false)
  const total = ref(0)

  /**
   * Fetch paginated list of posts
   */
  const fetchAll = async ({
    page = 1,
    pageSize = 5,
    sort = 'postDate:desc',
  }: {
    page?: number
    pageSize?: number
    sort?: string
  } = {}): Promise<Post[]> => {
    loading.value = true
    error.value = null

    try {
      const url = new URL(`${baseUrl}/api/posts`)
      url.searchParams.append('populate[coverImage]', 'true')
      url.searchParams.append('populate[category]', 'true')
      url.searchParams.append('populate[tags]', 'true')
      url.searchParams.append('pagination[page]', page.toString())
      url.searchParams.append('pagination[pageSize]', pageSize.toString())
      url.searchParams.append('sort', sort)

      const res = await fetch(url.toString())
      const json = await res.json()

      posts.value = Array.isArray(json.data) ? json.data : []
      total.value = json.meta?.pagination?.total || 0

      return posts.value
    } catch (err) {
      error.value = err as Error
      return []
    } finally {
      loading.value = false
    }
  }

  /**
   * Fetch a single post by its slug
   */
  const fetchBySlug = async (slug: string) => {
    loading.value = true
    error.value = null

    try {
      const url = new URL(`${baseUrl}/api/posts`)
      url.searchParams.append('filters[slug][$eq]', slug)
      url.searchParams.append('populate[coverImage]', 'true')
      url.searchParams.append('populate[category]', 'true')
      url.searchParams.append('populate[tags]', 'true')

      const res = await fetch(url.toString())
      const json = await res.json()

      post.value = Array.isArray(json.data) && json.data.length > 0 ? json.data[0] : null
    } catch (err) {
      error.value = err as Error
      post.value = null
    } finally {
      loading.value = false
    }
  }

  /**
   * Get full image URL from Strapi image field
   */
  const getImageUrl = (images: Post['coverImage'] = []): string => {
    const image = images?.[0]
    if (!image) return ''

    const url =
      image.formats?.medium?.url ||
      image.formats?.small?.url ||
      image.formats?.thumbnail?.url ||
      image.url

    if (!url) return ''
    return url.startsWith('http') ? url : `${baseUrl}${url}`
  }

  return {
    posts,
    post,
    total,
    loading,
    error,
    fetchAll,
    fetchBySlug,
    getImageUrl,
  }
}
