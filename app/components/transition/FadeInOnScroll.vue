<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const el = ref<HTMLElement | null>(null)
const visible = ref(false)
let stopObserver: (() => void) | null = null

onMounted(() => {
  if (!el.value) return

  const { stop } = useIntersectionObserver(
    el.value,
    ([entry]) => {
      if (entry?.isIntersecting) {
        visible.value = true
        stop() // stop observing after first intersection
        stopObserver = null
      }
    },
    { threshold: 0.3 }
  )
  stopObserver = stop
})

onUnmounted(() => {
  if (stopObserver) stopObserver()
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
