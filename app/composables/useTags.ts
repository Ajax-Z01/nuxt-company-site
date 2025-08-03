import { ref } from 'vue'
import { useRuntimeConfig } from '#app'
import type { Tag } from '~/types/Tag'

export const useTags = () => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.strapiBaseUrl

  const tags = ref<Tag[]>([])
  const error = ref<Error | null>(null)
  const loading = ref(false)

  const fetchTags = async () => {
    loading.value = true
    error.value = null
    try {
      const res = await fetch(`${baseUrl}/api/tags`)
      const json = await res.json()
      tags.value = json.data?.map((item: any) => ({
        id: item.id,
        documentId: item.documentId,
        name: item.name,
        slug: item.slug,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        publishedAt: item.publishedAt,
      })) || []
    } catch (err) {
      error.value = err as Error
      tags.value = []
    } finally {
      loading.value = false
    }
  }

  return {
    tags,
    error,
    loading,
    fetchTags,
  }
}
