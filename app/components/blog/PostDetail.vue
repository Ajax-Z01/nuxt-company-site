<script setup lang="ts">
defineProps<{
  title: string
  date: string
  coverImage?: string
  htmlContent: string
}>()
</script>

<template>
  <article
    class="prose prose-lg dark:prose-invert max-w-none bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-xl shadow transition-all hover:shadow-md"
  >
    <img
      v-if="coverImage"
      :src="coverImage"
      :alt="title"
      class="w-full aspect-video object-cover rounded-md mb-8 transition-all"
    />

    <h1 class="text-4xl font-extrabold leading-tight mb-4">
      {{ title || 'Untitled' }}
    </h1>

    <p class="text-base text-gray-500 dark:text-gray-400 mb-10">
      {{ date }}
    </p>

    <div v-html="htmlContent" />
  </article>
</template>
