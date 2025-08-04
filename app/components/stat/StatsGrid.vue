<script setup lang="ts">
import CountUpNumber from '~/components/transition/CountUpNumber.vue'

const props = defineProps<{
  stats: { value: string; label: string }[]
  isActive: boolean
}>()
</script>

<template>
  <ul class="grid grid-cols-2 grid-rows-2 gap-y-12 gap-x-8 h-full">
    <li
      v-for="(stat, i) in props.stats"
      :key="i"
      class="flex flex-col items-center justify-center text-center"
    >
      <h3 class="text-5xl font-extrabold text-emerald-600 leading-tight">
        <CountUpNumber :target="stat.value" :isActive="props.isActive ?? true" />
      </h3>
      <p class="mt-3 text-base font-medium text-gray-900 dark:text-gray-200 max-w-[10rem]">
        {{ stat.label }}
      </p>
    </li>
  </ul>
</template>
