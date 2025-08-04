<script setup lang="ts">
const props = defineProps<{
  achievements: { icon: string; label: string }[]
}>()
</script>

<template>
  <ul class="space-y-6 max-w-md">
    <li
      v-for="(ach, idx) in props.achievements"
      :key="idx"
      class="flex items-center gap-4 cursor-default group transition"
      tabindex="0"
      role="listitem"
    >
      <div
        v-html="ach.icon"
        aria-hidden="true"
        class="transition group-hover:text-emerald-600"
      ></div>
      <span
        class="text-gray-900 dark:text-white font-semibold text-lg transition group-hover:text-emerald-600"
      >
        {{ ach.label }}
      </span>
    </li>
  </ul>
</template>
