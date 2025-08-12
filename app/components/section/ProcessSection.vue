<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { CheckCircleIcon, ClipboardDocumentCheckIcon, PencilSquareIcon, WrenchScrewdriverIcon } from '@heroicons/vue/24/solid'
import FadeInOnScroll from '~/components/transition/FadeInOnScroll.vue'

const { t } = useI18n()

const currentStep = ref(3)

const steps = [
  {
    title: t('process.steps.leaveRequest.title'),
    description: t('process.steps.leaveRequest.description'),
    icon: ClipboardDocumentCheckIcon,
    completed: true,
  },
  {
    title: t('process.steps.costCalculation.title'),
    description: t('process.steps.costCalculation.description'),
    icon: PencilSquareIcon,
    completed: true,
  },
  {
    title: t('process.steps.signingContract.title'),
    description: t('process.steps.signingContract.description'),
    icon: CheckCircleIcon,
    completed: true,
  },
  {
    title: t('process.steps.executionWorks.title'),
    description: t('process.steps.executionWorks.description'),
    icon: WrenchScrewdriverIcon,
    completed: true,
  },
]
</script>

<template>
  <section class="bg-white dark:bg-gray-950 py-20 text-gray-900 dark:text-white">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Header -->
      <FadeInOnScroll>
        <div class="mb-12">
          <p class="text-sm font-semibold uppercase tracking-wider text-sky-500 flex items-center gap-2">
            <span class="block w-6 h-0.5 bg-yellow-400"></span>
            {{ t('process.header.subtitle') }}
          </p>
          <h2 class="mt-2 text-4xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight">
            {{ t('process.header.titleBefore') }} <span class="text-emerald-400">{{ t('process.header.titleHighlight') }}</span>
          </h2>
        </div>
      </FadeInOnScroll>

      <!-- Steps -->
      <div class="relative">
        <!-- Vertical line on mobile -->
        <div class="absolute left-[21px] top-0 h-full w-0.5 bg-emerald-400 md:hidden"></div>
        <!-- Horizontal line on desktop -->
        <div class="hidden md:block absolute top-[40px] left-0 right-0 h-0.5 bg-emerald-400"></div>

        <ul class="flex flex-col md:flex-row md:justify-between gap-12 md:pt-16 md:gap-16 relative z-10 ml-12">
          <FadeInOnScroll
            v-for="(step, index) in steps"
            :key="index"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <li
              class="relative md:flex-1 md:min-w-[180px] text-left md:text-center group"
              :class="{ 'opacity-50': index > currentStep }"
            >
              <!-- Step marker -->
              <div
                class="absolute w-5 h-5 rounded-full z-10 border-2 border-emerald-400 bg-white dark:bg-gray-900"
                :class="[
                  step.completed ? 'bg-yellow-400 border-yellow-400' : '',
                  'top-[50px] left-[-35px] md:top-[-80px] md:left-1/2 md:-translate-x-1/2'
                ]"
              ></div>

              <!-- Ping animation -->
              <div
                v-if="index === currentStep"
                class="absolute w-5 h-5 rounded-full bg-yellow-400 opacity-30 animate-ping"
                :class="[
                  'top-[50px] left-[-35px] md:top-[-80px] md:left-1/2 md:-translate-x-1/2'
                ]"
              ></div>

              <!-- Content -->
              <div class="flex flex-col items-start md:items-center mt-10 md:mt-12 px-2">
                <component
                  :is="step.icon"
                  class="w-8 h-8 text-emerald-500 mb-4"
                />
                <h4 class="font-semibold text-lg text-gray-900 dark:text-white">
                  {{ step.title }}
                </h4>
                <p class="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300 max-w-xs md:max-w-sm">
                  {{ step.description }}
                </p>
              </div>
            </li>
          </FadeInOnScroll>
        </ul>
      </div>
    </div>
  </section>
</template>

