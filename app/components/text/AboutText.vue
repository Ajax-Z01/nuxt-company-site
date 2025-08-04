<script setup lang="ts">
import AchievementsList from '~/components/list/AchievementsList.vue'
import { NuxtLink } from '#components'

const props = defineProps<{
  achievements: { icon: string; label: string }[]
}>()
</script>

<template>
  <div class="flex flex-col text-gray-900 dark:text-white">
    <!-- Subtitle -->
    <p
      class="mb-2 text-sm font-semibold uppercase tracking-wide text-sky-500 flex items-center gap-3"
    >
      <span class="block w-6 h-0.5 bg-yellow-500 rounded"></span>
      Just feel the future
    </p>

    <!-- Heading -->
    <h2 class="text-4xl font-extrabold leading-tight text-gray-900 dark:text-white mb-6">
      <span class="text-emerald-500">Bringing Your Ideas</span>
      <span> and Innovations to Life</span>
    </h2>

    <!-- Description -->
    <p class="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed mb-10">
      Vitae ultricies leo integer malesuada nunc vel. Molestie ac feugiat sed lectus vestibulum
      mattis ullamcorper velit. Viverra aliquet eget sit amet tellus cras adipiscing.
    </p>

    <!-- Achievements -->
    <div class="mb-10">
      <AchievementsList :achievements="props.achievements" />
    </div>

    <!-- CTA Button -->
    <NuxtLink
      to="/about"
      class="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 text-white font-semibold rounded-lg shadow-sm transition-all w-max"
    >
      About company
      <svg
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </NuxtLink>
  </div>
</template>
