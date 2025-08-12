<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import AdvantagesList from '~/components/list/AdvantagesList.vue'
import StatsGrid from '~/components/stat/StatsGrid.vue'
import FadeInOnScroll from '~/components/transition/FadeInOnScroll.vue'
import { useI18n } from '#i18n'

const { t } = useI18n()

const stats = [
  { value: '200+', label: t('sustainableConstruction.stats.completedProjects') },
  { value: '4.253', label: t('sustainableConstruction.stats.turnover') },
  { value: '99%', label: t('sustainableConstruction.stats.approvalRate') },
  { value: '320+', label: t('sustainableConstruction.stats.activeProjects') },
]

const advantages = [
  {
    number: '01',
    title: t('sustainableConstruction.advantages.uniqueProjects.title'),
    description: t('sustainableConstruction.advantages.uniqueProjects.description'),
  },
  {
    number: '02',
    title: t('sustainableConstruction.advantages.valueConvenience.title'),
    description: t('sustainableConstruction.advantages.valueConvenience.description'),
  },
  {
    number: '03',
    title: t('sustainableConstruction.advantages.implementIdeas.title'),
    description: t('sustainableConstruction.advantages.implementIdeas.description'),
  },
]

const statsRef = ref<HTMLElement | null>(null)
const isStatsActive = ref(false)

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
          <p
            class="text-sm font-semibold uppercase tracking-wider text-sky-500 flex items-center gap-2"
          >
            <span class="block w-6 h-0.5 bg-yellow-500"></span>
            {{ t('sustainableConstruction.header.subtitle') }}
          </p>
          <h2
            class="mt-2 text-4xl font-extrabold text-gray-900 dark:text-white leading-tight"
          >
            {{ t('sustainableConstruction.header.titleBefore') }}
            <span class="text-emerald-400">{{ t('sustainableConstruction.header.titleHighlight') }}</span>
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
              {{ t('sustainableConstruction.description') }}
            </p>
            <AdvantagesList :advantages="advantages" />
          </div>
        </FadeInOnScroll>
      </div>
    </div>
  </section>
</template>
