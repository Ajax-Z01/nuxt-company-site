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

  const fetchAll = async (): Promise<Post[]> => {
    loading.value = true
    error.value = null
    try {
      const res = await fetch(
        `${baseUrl}/api/posts?populate[coverImage]=true&populate[category]=true&populate[tags]=true`
      )
      const json = await res.json()
      posts.value = Array.isArray(json.data) ? json.data : []
      return posts.value
    } catch (err) {
      error.value = err as Error
      return []
    } finally {
      loading.value = false
    }
  }

  const fetchBySlug = async (slug: string) => {
    loading.value = true
    error.value = null
    try {
      const res = await fetch(
        `${baseUrl}/api/posts?filters[slug][$eq]=${encodeURIComponent(slug)}&populate[coverImage]=true&populate[category]=true&populate[tags]=true`
      )
      const json = await res.json()
      post.value = Array.isArray(json.data) && json.data.length > 0 ? json.data[0] : null
    } catch (err) {
      error.value = err as Error
      post.value = null
    } finally {
      loading.value = false
    }
  }

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
    error,
    loading,
    fetchAll,
    fetchBySlug,
    getImageUrl,
  }
}
