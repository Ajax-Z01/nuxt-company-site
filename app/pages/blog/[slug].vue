<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import HeaderPage from '@/components/HeaderPage.vue'
import PostDetail from '@/components/blog/PostDetail.vue'
import PostCard from '@/components/blog/PostCard.vue'
import { usePosts } from '~/composables/usePosts'
import { useMarkdown } from '~/composables/useMarkdown'
import BlogSidebar from '~/components/blog/BlogSidebar.vue'
import Prism from 'prismjs'

const route = useRoute()
const slug = route.params.slug as string

const { post, loading, error, fetchBySlug, getImageUrl, fetchAll } = usePosts()
const { renderMarkdown } = useMarkdown()

const formattedContent = ref('')
const relatedPosts = ref<any[]>([])

const imageUrl = computed(() =>
  post.value?.coverImage?.length ? getImageUrl(post.value.coverImage) : ''
)

const formatDate = (dateStr: string) =>
  dateStr
    ? new Date(dateStr).toLocaleString('en-US', {
        dateStyle: 'long',
        timeStyle: 'short',
      })
    : 'Unknown date'

onMounted(async () => {
  if (!slug) return
  await fetchBySlug(slug)

  // Ambil semua post dan filter berdasarkan slug
  const all = await fetchAll()
  relatedPosts.value = all
    .filter(p => p.slug !== slug)
    .sort((a, b) => new Date(b.postDate).getTime() - new Date(a.postDate).getTime()) // sort by latest
    .slice(0, 3) // ambil 3 post
})

watch(
  () => post.value?.content,
  async (newContent) => {
    if (newContent) {
      formattedContent.value = await renderMarkdown(newContent)
    } else {
      formattedContent.value = ''
    }
  },
  { immediate: true }
)

watch(formattedContent, async () => {
  await nextTick()
  Prism.highlightAll()
})
</script>

<template>
  <HeaderPage
    :title="post?.title || 'Loading...'"
    :subtitle="post?.subtitle || ''"
    :breadcrumbs="[
      { text: 'Home', to: '/' },
      { text: 'Blog', to: '/blog' },
      { text: post?.title || 'Loading...' },
    ]"
    image-webp="/img/plan.webp"
    image-png="/img/plan.png"
  />

  <div class="bg-white dark:bg-gray-700 text-gray-800 dark:text-white">
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
      <!-- Left: Article -->
      <div class="lg:col-span-2">
        <PostDetail
          v-if="post"
          :title="post.title?.trim() || 'Untitled'"
          :date="formatDate(post.postDate)"
          :cover-image="imageUrl"
          :html-content="formattedContent"
        />

        <div v-else-if="loading" class="text-center text-gray-500 py-16 text-lg">
          Loading post...
        </div>

        <div v-else-if="error" class="text-center text-red-500 py-16 text-lg">
          Error loading post: {{ error.message }}
        </div>

        <div v-else class="text-center text-gray-400 py-16 text-lg">
          Post not found.
        </div>

        <!-- Related Posts -->
        <div v-if="relatedPosts.length" class="mt-16">
          <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            Related Posts
          </h2>
          <div class="grid gap-6 sm:grid-cols-2">
            <PostCard
              v-for="related in relatedPosts"
              :key="related.id"
              :title="related.title"
              :date="formatDate(related.postDate)"
              :excerpt="related.excerpt"
              :cover-image="getImageUrl(related.coverImage)"
              :to="`/blog/${related.slug}`"
            />
          </div>
        </div>
      </div>

      <!-- Right: Sidebar -->
      <BlogSidebar />
    </section>
  </div>
</template>
