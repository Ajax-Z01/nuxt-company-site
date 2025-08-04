<script setup lang="ts">
import { usePosts } from '~/composables/usePosts'
import HeaderPage from '~/components/HeaderPage.vue'
import BlogSection from '~/components/section/BlogSection.vue'

const { posts, fetchAll, loading, error } = usePosts()
await fetchAll()

const breadcrumbs = [
  { text: 'Home', to: '/' },
  { text: 'Blog' },
]
</script>

<template>
  <!-- Hero Header -->
  <HeaderPage
    title="Blog"
    subtitle="Our Blog"
    :breadcrumbs="breadcrumbs"
    imageWebp="/img/plan.webp"
    imagePng="/img/plan.png"
  />
  <BlogSection
    :posts="posts"
    :loading="loading"
    :error="error"
    title="Our Latest"
    subtitle="Explore insights, stories, and updates on our field."
  />
</template>