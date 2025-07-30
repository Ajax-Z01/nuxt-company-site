<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const partnerLogos = [
  { src: '/svg/remedy.svg', alt: 'Remedy Engineering' },
  { src: '/svg/brickblock.svg', alt: 'Brick & Block' },
  { src: '/svg/stateofdesign.svg', alt: 'State of Design' },
  { src: '/svg/arup.svg', alt: 'Arup' },
  { src: '/svg/fluor.svg', alt: 'Fluor Corp.' },
]

const isVisible = ref(false)
const sectionRef = ref<HTMLElement | null>(null)

function handleIntersection(entries: IntersectionObserverEntry[]) {
  if (entries[0]?.isIntersecting) {
    isVisible.value = true
  } else {
    isVisible.value = false
  }
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1,
  })
  if (sectionRef.value) observer.observe(sectionRef.value)
})

onBeforeUnmount(() => {
  if (sectionRef.value && observer) observer.unobserve(sectionRef.value)
})
</script>

<template>
  <section
    ref="sectionRef"
    class="py-20 bg-white dark:bg-gray-950"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-12">
        <p class="text-sm font-semibold uppercase tracking-wider text-sky-500 flex items-center gap-2">
          <span class="block w-6 h-0.5 bg-yellow-500"></span>
          Where we work
        </p>
        <h2 class="mt-2 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white">
          <span class="text-emerald-500">Top Ranking</span>
          <span class="text-gray-800 dark:text-gray-100"> Company</span>
        </h2>
      </div>

      <!-- Logo Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div
          v-for="(logo, i) in partnerLogos"
          :key="i"
          :class="[
            'border-2 border-transparent dark:border-transparent rounded-lg p-6 bg-white dark:bg-gray-100 shadow-sm transform flex flex-col items-center text-center will-change-opacity will-change-transform transition-[transform,opacity] duration-[300ms,1200ms] ease-in-out',
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          ]"
          class="hover:shadow-md hover:scale-[1.03] hover:border-emerald-500"
          :style="{ transitionDelay: `${i * 150}ms` }"
        >
          <img
            :src="logo.src"
            :alt="logo.alt"
            class="h-16 w-auto object-contain mb-4"
          />
          <p class="text-sm font-semibold text-gray-800 dark:text-gray-700">{{ logo.alt }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
