<script setup lang="ts">
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
    bg: '/img/hero/04.webp',
  },
  {
    title: 'Renovation Services',
    text: 'Transforming and upgrading infrastructure with precision and care.',
    bg: '/img/hero/05.webp',
  },
  {
    title: 'Process Engineering',
    text: 'Optimizing industrial operations through process analysis and system improvement.',
    bg: '/img/hero/01.webp',
  },
  {
    title: 'Chemistry and Metallurgy',
    text: 'Advanced material science solutions for durability and performance.',
    bg: '/img/hero/02.webp',
  },
  {
    title: 'Electrical Engineering',
    text: 'Designing and maintaining modern electrical systems for infrastructure.',
    bg: '/img/hero/03.webp',
  },
]

const { width } = useWindowSize()
const slidesPerView = computed(() => (width.value >= 768 ? 3 : 1))
const shouldLoop = computed(() => slides.length > slidesPerView.value)

const thumbsSwiper = ref<SwiperClass | null>(null)
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
        @swiper="(s) => (thumbsSwiper = s)"
        class="rounded-md bg-black/30 backdrop-blur-sm px-4 py-6 md:py-3 cursor-pointer select-none h-[180px] md:h-auto"
      >
        <SwiperSlide
          v-for="(slide, i) in slides"
          :key="'thumb-' + i"
          class="group relative overflow-hidden rounded-lg thumbnail-hover"
        >
          <div class="aspect-video w-full h-[180px] md:h-auto relative rounded-lg overflow-hidden">
            <img :src="slide.bg" :alt="slide.title" class="object-cover w-full h-full" />
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
        :style="{ backgroundImage: `url(${slide.bg})` }"
        class="bg-cover bg-center h-full w-full relative flex items-center justify-center"
      >
        <div class="absolute inset-0 bg-black/60 z-0"></div>
        <div
          class="relative z-10 max-w-7xl px-4 md:px-6 py-12 mt-24 text-white mx-auto flex flex-col md:flex-row md:items-start md:text-left md:gap-8"
        >
          <div class="flex-1 flex flex-col">
            <p class="text-sm font-semibold uppercase tracking-wider text-sky-500 flex items-center gap-2">
              <span class="block w-6 h-0.5 bg-yellow-500"></span>
              Our Services
            </p>
            <h2 class="text-4xl md:text-5xl font-extrabold leading-tight text-emerald-400 drop-shadow mb-4 animate-fade-in-up">
              {{ slide.title }}
            </h2>
            <p class="text-base md:text-lg text-slate-200 max-w-2xl leading-relaxed mb-8 animate-fade-in-up">
              {{ slide.text }}
            </p>
            <a
              href="/single-service.html"
              class="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded transition w-max animate-fade-in-up"
            >
              SERVICE DETAILS
            </a>
          </div>
        </div>
      </SwiperSlide>
      <div
        class="custom-pagination"
      ></div>
    </Swiper>
  </section>
</template>

<style>
/* override default Swiper horizontal pagination styles */
.custom-pagination.swiper-pagination-horizontal {
  position: absolute !important;
  top: 10rem !important;
  right: 8rem !important;
  bottom: auto !important;
  left: auto !important;
  width: auto !important;
  height: auto !important;

  display: flex !important;
  flex-direction: column !important;
  gap: 1.5rem;
  z-index: 50;
}

.custom-pagination .swiper-pagination-bullet {
  width: 14px;
  height: 14px;
  background-color: #047857;
  opacity: 0.5;
  border-radius: 9999px;
  cursor: pointer;
  transition: background-color 0.3s, opacity 0.3s, transform 0.3s;
}

.custom-pagination .swiper-pagination-bullet:hover {
  opacity: 0.8;
}

.custom-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: #10b981;
  opacity: 1;
  transform: scale(1.3);
}

@media (max-width: 767px) {
  .custom-pagination.swiper-pagination-horizontal {
    position: relative !important;
    top: -17rem !important;
    right: auto !important;
    bottom: auto !important;
    left: auto !important;

    display: flex !important;
    flex-direction: row !important;
    justify-content: center;
    gap: 0.75rem !important;
    width: 100% !important;
    height: auto !important;
    z-index: 50;
  }

  .custom-pagination .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    opacity: 0.6;
  }

  .custom-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
    transform: scale(1.1);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}

.thumbnail-hover img {
  transition: transform 0.4s ease;
}

.thumbnail-hover:hover img {
  transform: scale(1.05);
}
</style>
