<script setup lang="ts">
import { onMounted } from 'vue'
import { useCategories } from '~/composables/useCategories'
import { useTags } from '~/composables/useTags'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'

const { categories, fetchCategories } = useCategories()
const { tags, fetchTags } = useTags()

onMounted(() => {
  fetchCategories()
  fetchTags()
})
</script>

<template>
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
    <div class="bg-white rounded-xl shadow p-6 mb-6" v-if="categories.length">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
      <ul class="flex flex-wrap gap-3">
        <li v-for="category in categories" :key="category.id">
          <NuxtLink
            :to="`/blog/category/${category.slug}`"
            class="block text-sm bg-gray-200 text-gray-800 px-4 py-1 rounded-full hover:bg-emerald-600 hover:text-white transition-colors duration-300 cursor-pointer select-none"
          >
            {{ category.name }}
          </NuxtLink>
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
    <div class="bg-white rounded-xl shadow p-6" v-if="tags.length">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
      <div class="flex flex-wrap gap-3">
        <NuxtLink
          v-for="tag in tags"
          :key="tag.id"
          :to="`/blog/tag/${tag.slug}`"
          class="text-sm bg-gray-200 px-3 py-1 rounded-full hover:bg-emerald-600 hover:text-white transition"
        >
          {{ tag.name }}
        </NuxtLink>
      </div>
    </div>
  </aside>
</template>
