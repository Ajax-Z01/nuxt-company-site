<script setup lang="ts">
import { usePosts } from '~/composables/usePosts'
import HeaderPage from '@/components/HeaderPage.vue'

const { posts, loading, error, fetchAll, getImageUrl } = usePosts()

await fetchAll()

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleString('en-US', {
    dateStyle: 'long',
    timeStyle: 'short',
  })
</script>

<template>
  <!-- Hero Header -->
  <HeaderPage
    title="Blog"
    subtitle="Our Blog"
    current="Blog"
    imageWebp="/img/plan.webp"
    imagePng="/img/plan.png"
  />

  <!-- Blog List -->
  <section class="p-6 space-y-6 max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold">Latest Blog Posts</h1>

    <div v-if="loading" class="text-gray-500">Loading posts...</div>
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
              v-if="post.coverImage?.length"
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
