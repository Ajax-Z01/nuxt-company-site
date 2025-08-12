<script setup lang="ts">
import female01 from '~/assets/img/avatars/female01.webp?width=600;1200&format=webp&quality=70'
import female02 from '~/assets/img/avatars/female02.webp?width=600;1200&format=webp&quality=70'
import male01 from '~/assets/img/avatars/male01.webp?width=600;1200&format=webp&quality=70'
import male02 from '~/assets/img/avatars/male02.webp?width=600;1200&format=webp&quality=70'

import { ref, computed, nextTick } from 'vue'
import { useWindowSize, useIntersectionObserver } from '@vueuse/core'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import { useI18n } from 'vue-i18n'

import 'swiper/css'
import 'swiper/css/autoplay'

const { width } = useWindowSize()

const { t } = useI18n()

const feedbacks = ref([
  {
    main: t('feedbacks.rene.main'),
    avatar: female01[0],
    name: t('feedbacks.rene.name'),
    company: t('feedbacks.rene.company'),
  },
  {
    main: t('feedbacks.john.main'),
    avatar: male01[0],
    name: t('feedbacks.john.name'),
    company: t('feedbacks.john.company'),
  },
  {
    main: t('feedbacks.marta.main'),
    avatar: female02[0],
    name: t('feedbacks.marta.name'),
    company: t('feedbacks.marta.company'),
  },
  {
    main: t('feedbacks.victor.main'),
    avatar: male02[0],
    name: t('feedbacks.victor.name'),
    company: t('feedbacks.victor.company'),
  },
  {
    main: t('feedbacks.sarah.main'),
    avatar: '/img/avatars/female03.webp',
    name: t('feedbacks.sarah.name'),
    company: t('feedbacks.sarah.company'),
  },
])

const sectionRef = ref<HTMLElement | null>(null)
const leftColRef = ref<HTMLElement | null>(null)
const sliderHeight = ref('auto')
const isReady = ref(false)
const shouldLoop = computed(() => feedbacks.value.length > 1)

const updateSliderHeight = async () => {
  await nextTick()
  if (width.value >= 1024 && leftColRef.value) {
    const height = leftColRef.value.offsetHeight
    if (height > 0) {
      sliderHeight.value = `${height}px`
    }
  } else {
    sliderHeight.value = 'auto'
  }
  isReady.value = true
}

useIntersectionObserver(
  sectionRef,
  (entries) => {
    const entry = entries[0]
    if (entry?.isIntersecting) {
      updateSliderHeight()
    }
  },
  { threshold: 0.3 }
)
</script>

<template>
  <section ref="sectionRef" class="bg-white dark:bg-gray-900 py-20">
    <div class="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16 items-start">
      <!-- Left: Title + Description -->
      <div ref="leftColRef" class="max-w-lg lg:text-left space-y-6">
        <div class="flex items-center gap-3 justify-start">
          <span class="block w-6 h-0.5 bg-yellow-500"></span>
          <p class="text-sm font-semibold uppercase tracking-wide text-sky-500">
            {{ t('feedbacks.sectionTitle') }}
          </p>
        </div>

        <h2 class="text-4xl font-extrabold leading-tight text-gray-900 dark:text-white">
          {{ t('feedbacks.titlePart1') }}
          <span class="text-emerald-400">{{ t('feedbacks.titleHighlight') }}</span>
          {{ t('feedbacks.titlePart2') }}
        </h2>

        <p class="text-base text-gray-600 dark:text-gray-300">
          {{ t('feedbacks.description') }}
        </p>

        <NuxtLink
          to="/contact"
          class="btn mt-6 inline-block px-6 py-3 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition mx-auto lg:mx-0"
        >
          {{ t('feedbacks.cta') }}
        </NuxtLink>
      </div>

      <!-- Right: Slider -->
      <div class="w-full max-w-3xl">
        <Swiper
          v-if="isReady"
          :modules="[Autoplay]"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :loop="shouldLoop"
          :slidesPerView="1"
          :spaceBetween="24"
          class="w-full"
          :style="{ height: sliderHeight }"
        >
          <SwiperSlide
            v-for="(item, index) in feedbacks"
            :key="index"
            class="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg h-full"
          >
            <div class="h-full flex flex-col items-center justify-center text-center space-y-6">
              <p class="text-lg sm:text-xl font-serif italic text-gray-800 dark:text-gray-100 leading-relaxed max-w-2xl">
                “{{ item.main }}”
              </p>

              <div class="flex items-center justify-center gap-4">
                <div
                  class="w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-500 dark:border-emerald-400"
                >
                  <picture>
                    <img
                      :src="item.avatar"
                      :alt="item.name"
                      class="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </div>

                <div class="text-left">
                  <p class="font-semibold text-gray-900 dark:text-white text-base">
                    {{ item.name }}
                  </p>
                  <p class="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {{ item.company }}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>
