<script setup lang="ts">
import FadeInOnScroll from '../transition/FadeInOnScroll.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const services = [
  {
    title: 'Process Engineering',
    imageWebp: '/img/tabs/01.webp',
    description:
      'Vitae ultricies leo integer malesuada nunc vel. Molestie ac feugiat sed lectus vestibulum mattis.',
    points: [
      'Making lives easier',
      'Get every solution right here',
      'Innovation and creativity',
    ],
  },
  {
    title: 'Chemistry and Metallurgy',
    imageWebp: '/img/tabs/02.webp',
    description:
      'Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Viverra aliquet eget sit amet.',
    points: ['Precision science', 'Material excellence', 'Lab-to-site implementation'],
  },
  {
    title: 'Electrical Engineering',
    imageWebp: '/img/tabs/03.webp',
    description:
      'Engineering efficient and sustainable systems for energy distribution and automation.',
    points: ['Smart systems', 'Sustainable energy', 'Future-ready solutions'],
  },
  {
    title: 'Specialty Services',
    imageWebp: '/img/tabs/04.webp',
    description: 'Viverra aliquet eget sit amet tellus cras adipiscing. Custom solutions for unique problems.',
    points: ['Custom engineering', 'Expert consultants', 'Unique innovation'],
  },
  {
    title: 'Civil Engineering',
    imageWebp: '/img/tabs/05.webp',
    description:
      'High-quality residential and commercial construction with durable materials and methods.',
    points: ['Urban planning', 'Infrastructure design', 'Structural safety'],
  },
  {
    title: 'Construction Management',
    imageWebp: '/img/tabs/06.webp',
    description:
      'Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Efficient project delivery.',
    points: ['Budget control', 'Time efficiency', 'Professional oversight'],
  },
]
</script>

<template>
  <section class="services section bg-gray-900 py-20 text-gray-100">
    <div class="container max-w-7xl mx-auto px-4">
      <!-- Header -->
      <FadeInOnScroll>
        <div class="section_header max-w-lg mb-12 space-y-4" data-aos="fade-up">
          <p
            class="text-sm font-semibold uppercase tracking-wider text-sky-400 flex items-center gap-2 max-w-max"
          >
            <span class="block w-6 h-0.5 bg-yellow-500 rounded"></span>
            Just feel the future
          </p>
          <h2 class="text-4xl font-extrabold leading-tight">
            Spotlight <span class="text-emerald-400">Services</span>
          </h2>
        </div>
      </FadeInOnScroll>

      <!-- Swiper Slider -->
      <FadeInOnScroll>
        <Swiper
          :modules="[Autoplay, Pagination]"
          :slides-per-view="1"
          :space-between="30"
          :loop="true"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :pagination="false"
          class="services_slider"
          data-aos="fade-up"
        >
          <SwiperSlide
            v-for="(service, index) in services"
            :key="index"
            class="p-0"
            style="will-change: transform;"
          >
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <!-- Image -->
              <div class="media rounded-lg overflow-hidden shadow-none">
                <picture>
                  <source :srcset="service.imageWebp" type="image/webp" />
                  <img
                    :src="service.imageWebp"
                    :alt="service.title"
                    class="w-full object-cover aspect-[4/3] rounded-lg"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              <!-- Content -->
              <div class="main space-y-5 px-0 md:px-6">
                <h3 class="text-4xl font-semibold tracking-tight">
                  {{ service.title }}
                </h3>
                <p class="text-gray-300 text-lg md:text-xl leading-relaxed">
                  {{ service.description }}
                </p>
                <ul class="list-disc list-inside space-y-3 text-gray-400 text-base md:text-lg">
                  <li
                    v-for="(item, i) in service.points"
                    :key="i"
                    class="hover:text-emerald-400 transition-colors cursor-default"
                  >
                    {{ item }}
                  </li>
                </ul>
                <NuxtLink
                  :to="`/services/${service.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z-]/g, '')}`"
                  class="inline-block mt-6 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded shadow-md transition"
                  aria-label="Read more about {{ service.title }}"
                >
                  Read more
                </NuxtLink>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </FadeInOnScroll>
    </div>
  </section>
</template>
