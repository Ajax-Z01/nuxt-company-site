<script setup lang="ts">
const props = defineProps<{
  advantages: { number: string; title: string; description: string }[]
}>()
</script>

<template>
  <ul class="space-y-10">
    <li v-for="(adv, i) in props.advantages" :key="i" class="flex items-start gap-6">
      <span class="text-3xl font-extrabold text-gray-300 dark:text-gray-600 select-none">
        {{ adv.number }}
      </span>
      <div>
        <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {{ adv.title }}
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          {{ adv.description }}
        </p>
      </div>
    </li>
  </ul>
</template>
