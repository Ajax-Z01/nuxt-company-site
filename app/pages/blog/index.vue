<script setup>
const { data, error, pending } = await useFetch('http://localhost:1337/api/posts?populate=*')

// Normalisasi data & filter post yang punya slug valid
const rawPosts = computed(() => {
  if (!data.value) return []
  if (Array.isArray(data.value)) return data.value
  if (Array.isArray(data.value.data)) return data.value.data
  return []
})

const posts = computed(() => rawPosts.value.filter(post => post && typeof post.slug === 'string' && post.slug.trim() !== ''))

const getImageUrl = (imgArr) => {
  if (!Array.isArray(imgArr) || imgArr.length === 0) return ''
  const image = imgArr[0]
  if (image.formats?.medium?.url) {
    return image.formats.medium.url.startsWith('http')
      ? image.formats.medium.url
      : `http://localhost:1337${image.formats.medium.url}`
  }
  if (image.url) {
    return image.url.startsWith('http')
      ? image.url
      : `http://localhost:1337${image.url}`
  }
  return ''
}

const formatDate = (dateStr) =>
  dateStr
    ? new Date(dateStr).toLocaleString('en-US', {
        dateStyle: 'long',
        timeStyle: 'short',
      })
    : 'Unknown date'
</script>

<template>
  <section class="p-6 space-y-6 max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold">Latest Blog Posts</h1>

    <div v-if="pending" class="text-gray-500">Loading posts...</div>
    <div v-else-if="error" class="text-red-500">Error loading posts: {{ error.message }}</div>

    <div v-else>
      <div v-if="posts.length">
        <article
          v-for="post in posts"
          :key="post.id"
          class="border rounded-xl p-4 hover:shadow transition"
        >
          <NuxtLink :to="`/blog/${post.slug}`" class="block space-y-2">
            <img
              v-if="post.coverImage && post.coverImage.length"
              :src="getImageUrl(post.coverImage)"
              alt="Cover image"
              class="w-full aspect-video object-cover rounded-md"
            />
            <h2 class="text-xl font-semibold">
              {{ post.title.trim() || 'Untitled' }}
            </h2>
            <p class="text-sm text-gray-500">
              {{ formatDate(post.postDate) }}
            </p>
          </NuxtLink>
        </article>
      </div>
      <div v-else class="text-gray-500">No posts found.</div>
    </div>
  </section>
</template>
