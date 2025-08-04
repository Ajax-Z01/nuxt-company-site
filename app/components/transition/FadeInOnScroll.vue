<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const el = ref<HTMLElement | null>(null)
const visible = ref(false)

onMounted(() => {
  if (!el.value) return

  useIntersectionObserver(
    el,
    ([entry], observer) => {
      if (entry?.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.3 }
  )
})
</script>

<template>
  <div
    ref="el"
    class="w-full transition-all duration-700 ease-out transform-gpu will-change-transform"
    :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
  >
    <slot />
  </div>
</template>
