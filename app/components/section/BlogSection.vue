<!-- components/blog/BlogSection.vue -->
<script setup lang="ts">
import type { Post } from '~/types/Post'
import { ArrowRightIcon } from '@heroicons/vue/24/solid'

defineProps<{
  posts: Post[]
  loading?: boolean
  error?: Error | null
  title?: string
  subtitle?: string
}>()

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString('en-US', { dateStyle: 'medium' })

defineEmits(['reload'])
</script>

<template>
  <section class="px-4 py-12 max-w-7xl mx-auto space-y-10">
    <!-- Header -->
    <div class="mb-8 max-w-3xl" data-aos="fade-right">
      <p class="text-sm font-semibold uppercase tracking-wider text-sky-500 flex items-center gap-2">
        <span class="block w-6 h-0.5 bg-yellow-500 rounded"></span>
        Blog
      </p>
      <h2 class="mt-2 text-4xl font-extrabold text-gray-900 leading-tight">
        {{ title || 'Our Latest' }} <span class="text-emerald-500">Blog Posts</span>
      </h2>
      <p class="mt-2 text-gray-600 text-base max-w-xl">
        {{ subtitle || 'Explore insights, stories, and updates on our field.' }}
      </p>
    </div>

    <!-- Blog List + Sidebar -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div class="lg:col-span-2 space-y-8">
        <div v-if="loading" class="text-gray-500">Loading posts...</div>
        <div v-else-if="error" class="text-red-500">Error: {{ error.message }}</div>
        <div v-else-if="!posts.length" class="text-gray-500">No posts found.</div>

        <div v-else class="space-y-8">
          <article
            v-for="post in posts"
            :key="post.id"
            class="grid grid-cols-1 md:grid-cols-5 gap-6 group rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out h-full"
            data-aos="fade-up"
          >
            <!-- Thumbnail -->
            <NuxtLink
              :to="`/blog/${post.slug}`"
              class="md:col-span-2 block h-full rounded-l-xl overflow-hidden"
            >
              <img
                v-if="post.coverImage?.length"
                :src="$getImageUrl(post.coverImage)"
                alt="Cover"
                class="w-full h-full object-cover aspect-video md:aspect-square transform group-hover:scale-105 transition-transform duration-300"
              />
            </NuxtLink>

            <!-- Content -->
            <div class="md:col-span-3 flex flex-col h-full p-6">
              <div class="space-y-2 flex-grow">
                <p class="text-sm text-gray-500 tracking-wide">
                  {{ formatDate(post.postDate) }}
                </p>
                <NuxtLink
                  :to="`/blog/${post.slug}`"
                  class="block text-2xl font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300"
                >
                  {{ post.title.trim() || 'Untitled' }}
                </NuxtLink>
                <p class="text-gray-700 text-base line-clamp-3 leading-relaxed">
                  {{ post.excerpt || 'No description available.' }}
                </p>
              </div>

              <div class="mt-auto pt-4">
                <NuxtLink
                  :to="`/blog/${post.slug}`"
                  class="inline-flex items-center bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors duration-300 font-semibold shadow-md hover:shadow-lg cursor-pointer"
                >
                  Read more
                  <ArrowRightIcon class="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- Sidebar -->
      <BlogSidebar />
    </div>
  </section>
</template>
