export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.strapiBaseUrl

  const getImageUrl = (images: any[] = []) => {
    const image = images?.[0]
    if (!image) return ''
    const url =
      image.formats?.medium?.url ||
      image.formats?.small?.url ||
      image.formats?.thumbnail?.url ||
      image.url
    return url.startsWith('http') ? url : `${baseUrl}${url}`
  }

  return {
    provide: {
      getImageUrl,
    },
  }
})
