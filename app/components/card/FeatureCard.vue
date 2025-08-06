<script setup lang="ts">
import type { PropType } from 'vue'

import {
  LockClosedIcon,
  ShieldCheckIcon,
  Cog6ToothIcon,
  BoltIcon,
  ServerIcon,
} from '@heroicons/vue/24/outline'

type Feature = {
  icon: typeof LockClosedIcon
  title: string
  description: string
}

const props = defineProps<{
  feature: Feature
}>()
</script>

<template>
  <div
    class="feature-card bg-gray-800 rounded-lg p-12 shadow-lg hover:shadow-emerald-500/50 transition cursor-default"
  >
    <div class="icon mb-4 text-emerald-400 flex justify-center">
      <component :is="feature.icon" class="w-12 h-12" />
    </div>
    <h3 class="text-xl font-semibold mb-2 text-center">
      {{ feature.title }}
    </h3>
    <p class="text-gray-300 text-sm text-center">
      {{ feature.description }}
    </p>
  </div>
</template>
