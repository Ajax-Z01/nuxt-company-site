<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import AdvantagesList from '~/components/list/AdvantagesList.vue'
import StatsGrid from '~/components/stat/StatsGrid.vue'
import FadeInOnScroll from '~/components/transition/FadeInOnScroll.vue'

const stats = [
  { value: '200+', label: 'Completed Projects Every Year' },
  { value: '4.253', label: 'Million Euros Turnover in 2020' },
  { value: '99%', label: 'Building Control Approval Rate' },
  { value: '320+', label: 'Active Projects in Engineering' },
]

const advantages = [
  {
    number: '01',
    title: 'Unique Projects',
    description:
      'Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin',
  },
  {
    number: '02',
    title: 'Value Convenience',
    description: 'Ullamcorper dignissim cras lobortis feugiat vivamus risus',
  },
  {
    number: '03',
    title: 'Implement New Ideas',
    description:
      'Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus',
  },
]

const statsRef = ref<HTMLElement | null>(null)
const isStatsActive = ref(false)

// Pas elemen statsRef terlihat, set isStatsActive true
useIntersectionObserver(
  statsRef,
  ([entry]) => {
    if (entry?.isIntersecting) {
      isStatsActive.value = true
    }
  },
  { threshold: 0.3 }
)
</script>

<template>
  <section class="py-20 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <FadeInOnScroll>
        <div class="mb-12">
          <p class="text-sm font-semibold uppercase tracking-wider text-sky-500 flex items-center gap-2">
            <span class="block w-6 h-0.5 bg-yellow-500"></span>
            Sustainable Construction
          </p>
          <h2 class="mt-2 text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Why Choose <span class="text-emerald-600">Us</span>
          </h2>
        </div>
      </FadeInOnScroll>

      <!-- Two Columns -->
      <div class="flex flex-col md:flex-row gap-16">
        <!-- Left: Stats -->
        <FadeInOnScroll>
          <div
            ref="statsRef"
            class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 md:p-10 w-full md:basis-1/2"
          >
            <StatsGrid :stats="stats" :isActive="isStatsActive" />
          </div>
        </FadeInOnScroll>

        <!-- Right: Advantages -->
        <FadeInOnScroll>
          <div class="flex-1">
            <p class="text-gray-700 dark:text-gray-300 mb-10 leading-relaxed max-w-prose">
              Elementum sagittis vitae et leo duis ut diam. In nibh mauris cursus mattis molestie a iaculis at.
            </p>
            <AdvantagesList :advantages="advantages" />
          </div>
        </FadeInOnScroll>
      </div>
    </div>
  </section>
</template>
