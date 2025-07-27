<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
console.log('Current slug:', route.params.slug)

const { data, pending, error } = await useFetch(
  `http://localhost:1337/api/posts?filters[slug][$eq]=${route.params.slug}&populate=*`
)

console.log('Raw fetch data:', data.value)

const post = computed(() => data.value?.data?.[0] ?? null)

const imageUrl = computed(() => {
  const coverImages = post.value?.coverImage
  if (Array.isArray(coverImages) && coverImages.length > 0) {
    const url = coverImages[0].url
    return url.startsWith('http') ? url : `http://localhost:1337${url}`
  }
  return ''
})

const formatDate = (dateStr) => {
  if (!dateStr) return 'Unknown date'
  return new Date(dateStr).toLocaleString('en-US', {
    dateStyle: 'long',
    timeStyle: 'short',
  })
}
</script>

<template>
  <article class="prose mx-auto p-6" v-if="post">
    <img
      v-if="imageUrl"
      :src="imageUrl"
      alt=""
      class="w-full aspect-video object-cover rounded-md mb-4"
    />
    <h1>{{ post.title?.trim() || 'Untitled' }}</h1>
    <p class="text-sm text-gray-500">{{ formatDate(post.postDate) }}</p>
    <div v-html="post.content"></div>
  </article>

  <div v-else-if="pending" class="text-center p-6">Loading post...</div>
  <div v-else-if="error" class="text-center p-6 text-red-500">
    Error loading post: {{ error.message }}
  </div>
  <div v-else class="text-center p-6 text-gray-500">
    Post not found.
    <pre>{{ data }}</pre> <!-- untuk debugging -->
  </div>
</template>
