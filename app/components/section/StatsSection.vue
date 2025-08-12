<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import StatsGridSmall from '~/components/stat/StatsGridSmall.vue'
import FadeInOnScroll from '~/components/transition/FadeInOnScroll.vue'
import VideoSection from '~/components/section/VideoSection.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

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
    labelKey: 'stats.buildingControlApprovalRate',
  },
  {
    value: '320+',
    labelKey: 'stats.activeProjectsConstructionManagement',
  },
  {
    value: '200+',
    labelKey: 'stats.completedProjectsPerYear',
  },
  {
    value: '4.253',
    labelKey: 'stats.millionEurosTurnover2020',
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
            <p
              class="text-sm font-semibold uppercase tracking-wider text-sky-400 flex items-center gap-2"
            >
              <span class="block w-6 h-0.5 bg-yellow-500 rounded"></span>
              {{ t('statsSection.label') }}
            </p>
            <h2 class="text-4xl md:text-5xl font-extrabold leading-tight">
              {{ t('statsSection.title.before') }}
              <span class="text-emerald-400">{{ t('statsSection.title.highlight') }}</span>
              {{ t('statsSection.title.after') }}
            </h2>
            <p class="text-gray-400 text-base md:text-lg">
              {{ t('statsSection.description') }}
            </p>
          </div>
        </FadeInOnScroll>

        <!-- Stats -->
        <FadeInOnScroll>
          <div ref="statsRef">
            <StatsGridSmall
              :stats="stats.map(s => ({ value: s.value, label: t(s.labelKey) }))"
              :isActive="statsInView"
            />
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
