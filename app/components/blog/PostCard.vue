<script setup lang="ts">
defineProps<{
  title: string
  date: string
  excerpt?: string
  coverImage?: string
  to: string
}>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="group block rounded-xl overflow-hidden bg-white dark:bg-zinc-900 shadow hover:shadow-lg transition-shadow"
  >
    <img
      v-if="coverImage"
      :src="coverImage"
      :alt="title"
      class="w-full h-48 object-cover transition-transform group-hover:scale-105"
    />

    <div class="p-5">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-white mb-1">
        {{ title }}
      </h2>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">
        {{ date }}
      </p>
      <p class="text-gray-600 dark:text-gray-300 line-clamp-3">
        {{ excerpt }}
      </p>
    </div>
  </NuxtLink>
</template>
