<script setup lang="ts">
import imageUrl from '~/assets/img/plan.webp?width=600;1200&format=webp&quality=70'

import { useRoute } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import { usePosts } from '~/composables/usePosts'
import { useCategories } from '~/composables/useCategories'
import HeaderPage from '~/components/HeaderPage.vue'
import BlogSection from '~/components/section/BlogSection.vue'
import type { Post } from '~/types/Post'

const route = useRoute()
const slug = route.params.slug as string

const { posts, fetchAll, loading, error } = usePosts()
const { categories, fetchCategories } = useCategories()

const filteredPosts = ref<Post[]>([])
const categoryName = ref('')

onMounted(async () => {
  await fetchCategories()
  await fetchAll()

  const category = categories.value.find(c => c.slug === slug)
  categoryName.value = category?.name || slug

  filteredPosts.value = posts.value.filter(post => post.category?.slug === slug)
})

const breadcrumbs = computed(() => [
  { text: 'Home', to: '/' },
  { text: 'Blog', to: '/blog' },
  { text: categoryName.value },
])
</script>

<template>
  <HeaderPage
    :title="categoryName"
    subtitle="Category"
    :breadcrumbs="breadcrumbs"
    :imageUrl="imageUrl[0]"
  />
  <BlogSection
    :posts="filteredPosts"
    :loading="loading"
    :error="error"
    :title="`Posts in ${categoryName}`"
    subtitle="Explore articles in this category"
  />
</template>
