import { ref } from 'vue'
import { useRuntimeConfig } from '#app'
import type { Category } from '~/types/Category'

export const useCategories = () => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.strapiBaseUrl

  const categories = ref<Category[]>([])
  const error = ref<Error | null>(null)
  const loading = ref(false)

  const fetchCategories = async () => {
    loading.value = true
    error.value = null
    try {
      const res = await fetch(`${baseUrl}/api/categories`)
      const json = await res.json()
      categories.value = json.data?.map((item: any) => ({
        id: item.id,
        documentId: item.documentId,
        name: item.name,
        slug: item.slug,
        description: item.description,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        publishedAt: item.publishedAt,
        locale: item.locale,
      })) || []
    } catch (err) {
      error.value = err as Error
      categories.value = []
    } finally {
      loading.value = false
    }
  }

  return {
    categories,
    error,
    loading,
    fetchCategories,
  }
}
