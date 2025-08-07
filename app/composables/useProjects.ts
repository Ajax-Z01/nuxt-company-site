import { ref } from 'vue'
import { useRuntimeConfig } from '#app'
import type { Project } from '~/types/Project'

export const useProjects = () => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.strapiBaseUrl

  const projects = ref<Project[]>([])
  const project = ref<Project | null>(null)
  const loading = ref(false)
  const error = ref<Error | null>(null)

  // Helper: build query string for populate with nested
  // populates for info_contact sub-relations
  const populateQuery = [
    'populate[image]=true',
    'populate[details]=true',
    'populate[sections][populate][checklist]=true',
    'populate[info]=true',
    'populate[info_contact][populate][emails]=true',
    'populate[info_contact][populate][phones]=true',
    'populate[info_contact][populate][socials]=true',
  ].join('&')

  const fetchAll = async (): Promise<Project[]> => {
    loading.value = true
    error.value = null
    try {
      const res = await fetch(`${baseUrl}/api/projects?${populateQuery}`)
      const json = await res.json()
      projects.value = Array.isArray(json.data) ? json.data : []
      return projects.value
    } catch (err) {
      error.value = err as Error
      return []
    } finally {
      loading.value = false
    }
  }

  const fetchBySlug = async (slug: string): Promise<Project | null> => {
    loading.value = true
    error.value = null
    try {
      const url = `${baseUrl}/api/projects?filters[slug][$eq]=${encodeURIComponent(slug)}&${populateQuery}`
      const res = await fetch(url)
      const json = await res.json()
      const data = Array.isArray(json.data) && json.data.length > 0 ? json.data[0] : null
      project.value = data
      return data
    } catch (err) {
      error.value = err as Error
      project.value = null
      return null
    } finally {
      loading.value = false
    }
  }

  const getImageUrl = (images: Project['image'] = []): string => {
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
    projects,
    project,
    loading,
    error,
    fetchAll,
    fetchBySlug,
    getImageUrl,
  }
}
