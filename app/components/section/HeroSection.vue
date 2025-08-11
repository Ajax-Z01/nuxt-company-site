<script setup lang="ts">
import hero01 from '~/assets/img/hero/01.webp?width=600;1200&format=webp&quality=70'
import hero02 from '~/assets/img/hero/02.webp?width=600;1200&format=webp&quality=70'
import hero03 from '~/assets/img/hero/03.webp?width=600;1200&format=webp&quality=70'
import hero04 from '~/assets/img/hero/04.webp?width=600;1200&format=webp&quality=70'
import hero05 from '~/assets/img/hero/05.webp?width=600;1200&format=webp&quality=70'
import thumb01 from '~/assets/img/hero/thumb01.webp?width=380;280&format=webp&quality=70'
import thumb02 from '~/assets/img/hero/thumb02.webp?width=380;280&format=webp&quality=70'
import thumb03 from '~/assets/img/hero/thumb03.webp?width=380;280&format=webp&quality=70'
import thumb04 from '~/assets/img/hero/thumb04.webp?width=380;280&format=webp&quality=70'
import thumb05 from '~/assets/img/hero/thumb05.webp?width=380;280&format=webp&quality=70'

import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade, Thumbs, FreeMode, Pagination } from 'swiper/modules'
import type { Swiper as SwiperClass } from 'swiper'
import { useWindowSize } from '@vueuse/core'

import 'swiper/css'
import 'swiper/css/thumbs'
import 'swiper/css/effect-fade'
import 'swiper/css/free-mode'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

const slides = [
  {
    title: 'Specialty Services',
    text: 'We offer tailored services across various industries, addressing specific client needs with technical precision and innovative solutions.',
    bg: hero04[0],
    thumb: thumb04[0],
  },
  {
    title: 'Renovation Services',
    text: 'Transforming and upgrading infrastructure with precision and care.',
    bg: hero05[0],
    thumb: thumb05[0],
  },
  {
    title: 'Process Engineering',
    text: 'Optimizing industrial operations through process analysis and system improvement.',
    bg: hero01[0],
    thumb: thumb01[0],
  },
  {
    title: 'Chemistry and Metallurgy',
    text: 'Advanced material science solutions for durability and performance.',
    bg: hero02[0],
    thumb: thumb02[0],
  },
  {
    title: 'Electrical Engineering',
    text: 'Designing and maintaining modern electrical systems for infrastructure.',
    bg: hero03[0],
    thumb: thumb03[0],
  },
]

const { width } = useWindowSize()
const slidesPerView = computed(() => (width.value >= 768 ? 3 : 1))
const shouldLoop = computed(() => slides.length > slidesPerView.value)

const thumbsSwiper = ref<SwiperClass | null>(null)

function onThumbsSwiperInit(swiper: SwiperClass) {
  thumbsSwiper.value = swiper
}
</script>

<template>
  <section class="relative h-[100vh] md:h-[120vh] w-full overflow-hidden">
    <!-- Thumbnails -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 w-full max-w-7xl px-4">
      <Swiper
        :modules="[Thumbs, FreeMode, Autoplay]"
        :slides-per-view="slidesPerView"
        :loop="shouldLoop"
        :free-mode="true"
        :autoplay="{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }"
        :watch-slides-progress="true"
        :watch-slides-visibility="true"
        :slide-to-clicked-slide="true"
        :space-between="20"
        :speed="4000"
        @swiper="onThumbsSwiperInit"
        class="rounded-md bg-black/30 backdrop-blur-sm px-4 py-6 md:py-3 cursor-pointer select-none h-[180px] md:h-auto"
      >
        <SwiperSlide
          v-for="(slide, i) in slides"
          :key="'thumb-' + i"
          class="group relative overflow-hidden rounded-lg thumbnail-hover"
        >
          <div class="aspect-video w-full h-[180px] md:h-auto relative rounded-lg overflow-hidden">
            <img
              :src="slide.thumb"
              :alt="slide.title"
              width="600"
              class="object-cover w-full h-full"
              loading="lazy"
              decoding="async"
            />
            <div
              class="absolute bottom-2 left-2 text-white font-bold text-lg drop-shadow-md truncate max-w-[90%]"
            >
              {{ slide.title }}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <p class="text-sm text-white text-center mt-2 md:hidden animate-pulse">Swipe to explore →</p>
    </div>

    <!-- Hero -->
    <Swiper
      :modules="[Thumbs, EffectFade, Autoplay, Pagination]"
      :thumbs="{ swiper: thumbsSwiper }"
      effect="fade"
      :loop="shouldLoop"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :pagination="{ clickable: true, el: '.custom-pagination' }"
      class="h-full w-full relative z-10"
    >
      <SwiperSlide
        v-for="(slide, i) in slides"
        :key="i"
        class="bg-cover bg-center h-full w-full relative flex items-center justify-center"
      >
        <img
          :src="slide.bg"
          :alt="slide.title"
          class="absolute inset-0 object-cover w-full h-full"
          :loading="i === 0 ? 'eager' : 'lazy'"
          decoding="async"
          sizes="100vw"
          :fetchpriority="i === 0 ? 'high' : undefined"
        />
        <div class="absolute inset-0 bg-black/60 z-0"></div>
        <div
          class="relative z-10 max-w-7xl px-4 md:px-6 py-12 mt-24 text-white mx-auto flex flex-col md:flex-row md:items-start md:text-left md:gap-8"
        >
          <div class="flex-1 flex flex-col">
            <h3 class="text-sm font-semibold uppercase tracking-wider text-sky-500 flex items-center gap-2">
              <span class="block w-6 h-0.5 bg-yellow-500"></span>
              Our Services
            </h3>
            <h1 class="text-4xl md:text-5xl font-extrabold leading-tight text-emerald-400 drop-shadow mb-4 animate-fade-in-up">
              {{ slide.title }}
            </h1>
            <h2 class="text-base md:text-lg text-slate-200 max-w-2xl leading-relaxed mb-8 animate-fade-in-up">
              {{ slide.text }}
            </h2>
            <NuxtLink
              to="/services"
              class="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded transition w-max animate-fade-in-up"
            >
              SERVICE DETAILS
            </NuxtLink>
          </div>
        </div>
      </SwiperSlide>
      <div class="custom-pagination"></div>
    </Swiper>
  </section>
</template>
