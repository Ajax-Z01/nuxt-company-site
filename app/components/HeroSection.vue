<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Thumbs, Autoplay, EffectFade, FreeMode } from 'swiper/modules'
import type { Swiper as SwiperClass } from 'swiper'

import 'swiper/css'
import 'swiper/css/thumbs'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const slides = [
  {
    title: 'Specialty Services',
    text: 'Varius morbi enim nunc faucibus a. Pretium quam vulputate dignissim suspendisse. Tortor vitae purus faucibus ornare. Viverra mauris in aliquam sem fringilla ut morbi.',
    bg: '/img/hero/04.webp',
  },
  {
    title: 'Renovation Services',
    text: 'Transforming and upgrading infrastructure with precision and care.',
    bg: '/img/hero/05.webp',
  },
  {
    title: 'Process Engineering',
    text: 'Focused on optimizing industrial operations through systematic process analysis and innovation.',
    bg: '/img/hero/01.webp',
  },
  {
    title: 'Chemistry and Metallurgy',
    text: 'Advanced solutions in material science for enhanced durability and performance.',
    bg: '/img/hero/02.webp',
  },
  {
    title: 'Electrical Engineering',
    text: 'Designing and maintaining systems that power modern infrastructure.',
    bg: '/img/hero/03.webp',
  },
]

const thumbsSwiper = ref<SwiperClass | null>(null)
function onThumbsInit(swiperInstance: unknown) {
  thumbsSwiper.value = swiperInstance as SwiperClass
}
</script>

<template>
  <section class="relative h-[100vh] md:h-[120vh] w-full overflow-hidden">
    <!-- Hero Swiper -->
    <Swiper
      :modules="[Thumbs, Autoplay, EffectFade]"
      effect="fade"
      :thumbs="{ swiper: thumbsSwiper }"
      :loop="true"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
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
          class="relative z-10 max-w-7xl px-4 md:px-6 py-12 mt-24 text-white mx-auto flex flex-col
                 items-center text-center
                 md:items-start md:text-left
          "
        >
          <p class="text-sm font-semibold uppercase tracking-wider text-sky-500 flex items-center gap-2">
            <span class="block w-6 h-0.5 bg-yellow-500"></span>
            Our Services
          </p>
          <h2 class="text-4xl md:text-5xl font-extrabold leading-tight text-emerald-400 drop-shadow mb-4">
            {{ slide.title }}
          </h2>
          <p class="text-base md:text-lg text-slate-200 max-w-2xl leading-relaxed mb-8">
            {{ slide.text }}
          </p>
          <a
            href="/single-service.html"
            class="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded transition"
          >
            SERVICE DETAILS
          </a>
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- Thumbnails di bagian bawah, 3 per view, scroll nonstop -->
    <div
      class="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 w-full max-w-7xl px-4"
    >
      <Swiper
        :modules="[Thumbs, Autoplay, FreeMode]"
        :slidesPerView="1"
        :spaceBetween="20"
        watchSlidesProgress
        watchSlidesVisibility
        @swiper="onThumbsInit"
        :loop="true"
        :freeMode="true"
        :autoplay="{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }"
        :speed="4000"
        :breakpoints="{
          768: {
            slidesPerView: 3
          }
        }"
        class="rounded-md bg-black/30 backdrop-blur-sm px-4 py-6 md:py-3 cursor-grab select-none h-[180px] md:h-auto"
      >
        <SwiperSlide
          v-for="(slide, i) in slides"
          :key="'thumb-' + i"
          class="group relative transition-all duration-300 overflow-hidden rounded-lg"
        >
          <div
            class="w-full relative rounded-lg overflow-hidden aspect-video md:aspect-video h-[180px] md:h-auto"
          >
            <img
              :src="slide.bg"
              :alt="slide.title"
              class="object-cover w-full h-full rounded-lg"
            />
            <div
              class="absolute bottom-2 left-2 text-white font-bold text-lg drop-shadow-md max-w-[90%] truncate select-none"
              :title="slide.title"
            >
              {{ slide.title }}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
