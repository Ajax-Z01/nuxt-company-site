<script setup lang="ts">
import imageUrl from '~/assets/img/plan.webp?width=600;1200&format=webp&quality=70'

import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePosts } from '~/composables/usePosts'
import HeaderPage from '~/components/HeaderPage.vue'
import BlogSection from '~/components/section/BlogSection.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const route = useRoute()
const router = useRouter()

// Pagination state
const pageSize = 5
const page = ref(Number(route.query.page) || 1)
const totalPages = ref(1)

// Fetch data
const { posts, fetchAll, total, loading, error } = usePosts()

// Fetch on mount and whenever page changes
watchEffect(async () => {
  await fetchAll({ page: page.value, pageSize })
  totalPages.value = Math.ceil(total.value / pageSize)
  router.replace({ query: { page: page.value } })
})

// Breadcrumbs with i18n
const breadcrumbs = [
  { text: t('breadcrumbs.home'), to: '/' },
  { text: t('breadcrumbs.blog') }
]

// Pagination logic
const goToPage = (n: number) => {
  if (n >= 1 && n <= totalPages.value) page.value = n
}
</script>

<template>
  <!-- Hero Header -->
  <HeaderPage
    :title="t('blogPage.title')"
    :subtitle="t('blogPage.subtitle')"
    :breadcrumbs="breadcrumbs"
    :imageUrl="imageUrl[0]"
  />

  <!-- Blog Posts -->
  <BlogSection
    :posts="posts"
    :loading="loading"
    :error="error"
    :title="t('blogPage.postsTitle')"
    :subtitle="t('blogPage.postsSubtitle')"
  />

  <!-- Pagination -->
  <div
    v-if="totalPages > 1"
    class="flex flex-wrap justify-center items-center gap-2 my-10 text-sm"
  >
    <!-- Previous -->
    <button
      class="px-3 py-1.5 rounded border text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="page === 1"
      @click="goToPage(page - 1)"
    >
      {{ t('pagination.previous') }}
    </button>

    <!-- Numbered Pages -->
    <template v-for="n in totalPages" :key="n">
      <button
        class="px-3 py-1.5 rounded border transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        :class="{
          'bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700': page === n,
          'text-gray-700 hover:bg-gray-100 border-gray-300': page !== n
        }"
        @click="goToPage(n)"
      >
        {{ n }}
      </button>
    </template>

    <!-- Next -->
    <button
      class="px-3 py-1.5 rounded border text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="page === totalPages"
      @click="goToPage(page + 1)"
    >
      {{ t('pagination.next') }}
    </button>
  </div>
</template>
