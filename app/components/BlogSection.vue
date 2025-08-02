<script setup lang="ts">
import { usePosts } from '~/composables/usePosts'
import { ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid'

const { posts, loading, error, fetchAll, getImageUrl } = usePosts()
await fetchAll()

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString('en-US', {
    dateStyle: 'medium'
  })
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
        Our Latest <span class="text-emerald-500">Blog Posts</span>
      </h2>
      <p class="mt-2 text-gray-600 text-base max-w-xl">
        Explore our insights, stories, and updates on construction, technology, and sustainability.
      </p>
    </div>

    <!-- Blog + Sidebar -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <!-- Blog List (2/3) -->
      <div class="lg:col-span-2 space-y-8">
        <div v-if="loading" class="text-gray-500">Loading posts...</div>
        <div v-else-if="error" class="text-red-500">Error loading posts: {{ error.message }}</div>

        <div v-else>
          <div v-if="posts.length">
            <article
              v-for="post in posts"
              :key="post.id"
              class="grid grid-cols-1 md:grid-cols-5 gap-6 group border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out h-full"
              data-aos="fade-up"
            >
              <!-- Thumbnail -->
              <NuxtLink
                :to="`/blog/${post.slug}`"
                class="md:col-span-2 block h-full rounded-l-xl overflow-hidden"
              >
                <img
                  v-if="post.coverImage?.length"
                  :src="getImageUrl(post.coverImage)"
                  alt="Cover"
                  class="w-full h-full object-cover aspect-video md:aspect-square transform group-hover:scale-105 transition-transform duration-300"
                />
              </NuxtLink>

              <!-- Content -->
              <div class="md:col-span-3 flex flex-col h-full p-6">
                <!-- Text -->
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

                <!-- Push button to bottom -->
                <div class="mt-auto pt-4">
                  <NuxtLink
                    :to="`/blog/${post.slug}`"
                    class="inline-flex items-center bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors duration-300 font-semibold shadow-md hover:shadow-lg cursor-pointer"
                  >
                    Read more
                    <ArrowRightIcon
                    class="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </NuxtLink>
                </div>
              </div>
            </article>
          </div>
          <div v-else class="text-gray-500">No posts found.</div>
        </div>
      </div>

      <!-- Sidebar (1/3) -->
      <aside class="space-y-8">
        <!-- Search -->
        <form class="relative mb-6">
          <input
            type="text"
            placeholder="Search..."
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
          />
          <button
            type="submit"
            class="absolute right-3 top-2.5 text-gray-400 hover:text-emerald-500"
          >
            <MagnifyingGlassIcon class="w-5 h-5" />
          </button>
        </form>

        <!-- Categories -->
        <div class="bg-white rounded-xl shadow p-6 mb-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
          <ul class="flex flex-wrap gap-3">
            <li v-for="category in ['Materials', 'Technology', 'Design', 'Innovation']" :key="category">
            <a
                href="#"
                class="block text-sm bg-gray-200 text-gray-800 px-4 py-1 rounded-full hover:bg-emerald-600 hover:text-white transition-colors duration-300 cursor-pointer select-none"
            >
                {{ category }}
            </a>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="bg-white rounded-xl shadow p-6 mb-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Subscribe to our news</h3>
          <p class="text-sm text-gray-600 mb-6 leading-relaxed">
            Stay updated with our latest posts and updates.
          </p>
          <form class="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email"
              class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
            />
            <button
              type="submit"
              class="bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        <!-- Tags -->
        <div class="bg-white rounded-xl shadow p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
          <div class="flex flex-wrap gap-3">
            <a
              v-for="tag in ['Engineering', 'Design', 'Sustainability', 'Technology']"
              :key="tag"
              href="#"
              class="text-sm bg-gray-200 px-3 py-1 rounded-full hover:bg-emerald-600 hover:text-white transition"
            >
              {{ tag }}
            </a>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>
