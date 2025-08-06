<script setup lang="ts">
import CountUpNumber from '~/components/transition/CountUpNumber.vue'

const props = defineProps<{
  stats: { value: string; label: string }[]
  isActive: boolean
}>()
</script>

<template>
  <div class="grid grid-cols-2 gap-x-12 gap-y-2 text-center">
    <!-- Baris angka -->
    <div v-for="(stat, i) in props.stats" :key="i">
      <CountUpNumber
        :target="stat.value"
        :isActive="props.isActive"
        class="text-5xl font-extrabold text-emerald-400"
      />
    </div>

    <!-- Baris label -->
    <div v-for="(stat, i) in props.stats" :key="'label-' + i" class="text-lg text-gray-700 dark:text-gray-300 font-medium">
      {{ stat.label }}
    </div>
  </div>
</template>
