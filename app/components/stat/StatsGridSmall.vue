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
      class="text-center space-y-3"
    >
      <h3 class="text-4xl font-bold text-emerald-400">
        <CountUpNumber
          :target="stat.value"
          :isActive="props.isActive"
        />
      </h3>
      <p class="text-gray-300 whitespace-pre-line text-sm md:text-base">
        {{ stat.label }}
      </p>
    </li>
  </ul>
</template>
