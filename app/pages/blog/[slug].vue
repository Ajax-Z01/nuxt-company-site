<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { usePosts } from '~/composables/usePosts'

const route = useRoute()
const slug = route.params.slug as string

const { post, loading, error, fetchBySlug, getImageUrl } = usePosts()

await fetchBySlug(slug)

const imageUrl = computed(() => getImageUrl(post.value?.coverImage || []))

const formatDate = (dateStr: string) =>
  dateStr
    ? new Date(dateStr).toLocaleString('en-US', {
        dateStyle: 'long',
        timeStyle: 'short',
      })
    : 'Unknown date'
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
    <div v-html="post.content" />
  </article>

  <div v-else-if="loading" class="text-center p-6">Loading post...</div>
  <div v-else-if="error" class="text-center p-6 text-red-500">
    Error loading post: {{ error.message }}
  </div>
  <div v-else class="text-center p-6 text-gray-500">
    Post not found.
  </div>
</template>
