<script setup lang="ts">
import imageUrl from '~/assets/img/plan.webp?width=600;1200&format=webp&quality=70'

import { useRoute } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import { usePosts } from '~/composables/usePosts'
import { useTags } from '~/composables/useTags'
import HeaderPage from '~/components/HeaderPage.vue'
import BlogSection from '~/components/section/BlogSection.vue'
import type { Post } from '~/types/Post'

const route = useRoute()
const slug = route.params.slug as string

const { posts, fetchAll, loading, error } = usePosts()
const { tags, fetchTags } = useTags()

const filteredPosts = ref<Post[]>([])
const tagName = ref('')

onMounted(async () => {
  await fetchTags()
  await fetchAll()

  const tag = tags.value.find((t) => t.slug === slug)
  tagName.value = tag?.name || slug

  filteredPosts.value = posts.value.filter((post) =>
    post.tags?.some((t) => t.slug === slug)
  )
})

const breadcrumbs = computed(() => [
  { text: 'Home', to: '/' },
  { text: 'Blog', to: '/blog' },
  { text: tagName.value },
])
</script>

<template>
  <HeaderPage
    :title="tagName"
    subtitle="Tag"
    :breadcrumbs="breadcrumbs"
    :imageUrl="imageUrl[0]"
  />
  <BlogSection
    :posts="filteredPosts"
    :loading="loading"
    :error="error"
    :title="`Posts tagged with ${tagName}`"
    subtitle="Explore content by tag"
  />
</template>
