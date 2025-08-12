<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { NuxtLink } from '#components'
import FadeInOnScroll from '~/components/transition/FadeInOnScroll.vue'

const { t } = useI18n()

const serviceKeys = [
  'processEngineering',
  'constructionManagement',
  'civilEngineering',
  'electricalEngineering',
  'chemistryAndMetallurgy',
  'specialtyServices'
]
</script>

<template>
  <section class="services section bg-gray-900 py-24 text-gray-100">
    <div class="container max-w-7xl mx-auto px-4">
      <!-- Header -->
      <div class="section_header max-w-lg mb-12 space-y-4" data-aos="fade-up">
        <p class="text-sm font-semibold uppercase tracking-wider text-sky-400 flex items-center gap-2 max-w-max">
          <span class="block w-6 h-0.5 bg-yellow-500 rounded"></span>
          {{ t('servicesSection.label') }}
        </p>
        <h2 class="text-4xl md:text-5xl font-extrabold leading-tight">
          {{ t('servicesSection.title.before') }}
          <span class="text-emerald-400">{{ t('servicesSection.title.highlight') }}</span>
          {{ t('servicesSection.title.after') }}
        </h2>
        <p class="text-gray-400 text-base md:text-lg leading-relaxed">
          {{ t('servicesSection.description') }}
        </p>
      </div>

      <!-- Services Grid -->
      <ul class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <FadeInOnScroll
          v-for="(key, index) in serviceKeys"
          :key="key"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <li
            class="group bg-gray-800 rounded-2xl p-6 border-t-4 border-emerald-400/20 hover:border-emerald-400 hover:shadow-xl hover:bg-gray-700 transition-all duration-300 flex flex-col"
          >
            <div class="flex-grow space-y-3">
              <span class="text-2xl font-bold text-emerald-400 block">
                {{ (index + 1).toString().padStart(2, '0') }}
              </span>
              <h4 class="text-xl font-semibold text-white group-hover:text-emerald-300 transition-colors">
                {{ t(`servicesSection.services.${key}.title`) }}
              </h4>
              <p class="text-gray-400 leading-relaxed text-sm md:text-base">
                {{ t(`servicesSection.services.${key}.description`) }}
              </p>
            </div>

            <NuxtLink
              :to="`/services/${t(`servicesSection.services.${key}.slug`)}`"
              class="inline-flex items-center gap-2 text-emerald-400 hover:text-white mt-6 font-medium group self-start"
              :aria-label="t('servicesSection.readMoreAria', { service: t(`servicesSection.services.${key}.title`) })"
            >
              <span>{{ t('servicesSection.details') }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </NuxtLink>
          </li>
        </FadeInOnScroll>
      </ul>
    </div>
  </section>
</template>
