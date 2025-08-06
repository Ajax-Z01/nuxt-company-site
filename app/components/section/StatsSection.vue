<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import StatsGridSmall from '~/components/stat/StatsGridSmall.vue'
import FadeInOnScroll from '~/components/transition/FadeInOnScroll.vue'
import VideoSection from '~/components/section/VideoSection.vue'

const statsInView = ref(false)
const statsRef = ref<HTMLElement | null>(null)

useIntersectionObserver(statsRef, ([entry]) => {
  if (entry?.isIntersecting) {
    statsInView.value = true
  }
}, {
  threshold: 0.3,
})

const stats = [
  {
    value: '99%',
    label: 'Building Control\nApproval Rate',
  },
  {
    value: '320+',
    label: 'Active Projects in\nConstruction Management',
  },
  {
    value: '200+',
    label: 'Completed Projects\nEvery Year',
  },
  {
    value: '4.253',
    label: 'Million Euros Turnover\nin 2020',
  },
]
</script>

<template>
  <section class="bg-gray-900 text-white py-20">
    <div class="container max-w-7xl mx-auto px-4">
      <!-- Grid: Header & Stats -->
      <div class="grid md:grid-cols-2 gap-12 mb-16 items-start">
        <!-- Header -->
        <FadeInOnScroll>
          <div class="space-y-4" data-aos="fade-right">
            <p class="text-sm font-semibold uppercase tracking-wider text-sky-400 flex items-center gap-2">
              <span class="block w-6 h-0.5 bg-yellow-500 rounded"></span>
              What we do
            </p>
            <h2 class="text-4xl md:text-5xl font-extrabold leading-tight">
              Building The Future on a <span class="text-emerald-400">Foundation of Excellence</span>
            </h2>
            <p class="text-gray-400 text-base md:text-lg">
              Risus commodo viverra maecenas accumsan lacus vel. Semper viverra nam libero justo laoreet sit amet cursus.
            </p>
          </div>
        </FadeInOnScroll>

        <!-- Stats -->
        <FadeInOnScroll>
          <div ref="statsRef">
            <StatsGridSmall :stats="stats" :isActive="statsInView" />
          </div>
        </FadeInOnScroll>
      </div>

      <!-- Video Section -->
      <FadeInOnScroll>
        <VideoSection />
      </FadeInOnScroll>
    </div>
  </section>
</template>
