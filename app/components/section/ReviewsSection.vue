<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'

const reviews = [
  {
    id: 1,
    rating: 5,
    text:
      'Curabitur vitae nunc sed velit dignissim sodales ut. Maecenas ultricies mi eget mauris pharetra et. Et ligula ullamcorper malesuada proin pellentesque diam volutpat commodo',
    name: 'Vera Robinson',
    details: 'Psychologist',
    avatarWebp: '/img/avatars/female01.webp',
    avatarJpg: '/img/avatars/female01.jpg',
  },
  {
    id: 2,
    rating: 5,
    text:
      'Commodo quis imperdiet massa tincidunt nunc. Volutpat odio facilisis mauris sit amet. Mauris commodo quis imperdiet massa tincidunt',
    name: 'Benjamin Norris',
    details: 'Business analyst',
    avatarWebp: '/img/avatars/male01.webp',
    avatarJpg: '/img/avatars/male01.jpg',
  },
  {
    id: 3,
    rating: 5,
    text:
      'Curabitur vitae nunc sed velit dignissim sodales ut. Maecenas ultricies mi eget mauris pharetra et. Et ligula ullamcorper malesuada proin pellentesque diam volutpat commodo',
    name: 'Lisa Smith',
    details: 'Manager',
    avatarWebp: '/img/avatars/female02.webp',
    avatarJpg: '/img/avatars/female02.jpg',
  },
  {
    id: 4,
    rating: 5,
    text:
      'Commodo quis imperdiet massa tincidunt nunc. Volutpat odio facilisis mauris sit amet. Mauris commodo quis imperdiet massa tincidunt',
    name: 'Lucas Perry',
    details: 'Analyst',
    avatarWebp: '/img/avatars/male02.webp',
    avatarJpg: '/img/avatars/male02.jpg',
  },
]
</script>

<template>
  <section class="reviews section bg-gray-50 py-16">
    <div class="container max-w-7xl mx-auto px-4">
      <!-- Header + Arrow Controls -->
      <div class="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center mb-8 gap-4">
        <div class="section_header max-w-lg space-y-4" data-aos="fade-up">
          <p class="text-sm font-semibold uppercase tracking-wider text-sky-500 flex items-center gap-2 max-w-max">
            <span class="block w-6 h-0.5 bg-yellow-500 rounded"></span>
            Our Reviews
          </p>
          <h2 class="text-4xl font-extrabold leading-tight">
            What <span class="text-emerald-400">Our Clients</span> Say
          </h2>
          <p class="text-gray-600 max-w-lg">
            We value our clients' feedback and constantly strive to improve our services.
          </p>
        </div>
        <div class="md:justify-end gap-8 mt-2 mr-4 md:mt-0 md:flex hidden">
          <button
            aria-label="Previous"
            class="btn-control swiper-button-prev-custom bg-white hover:bg-emerald-50 border border-gray-300 rounded-full p-2 shadow transition"
          >
            <ChevronLeftIcon class="w-8 h-8 text-emerald-500" />
          </button>
          <button
            aria-label="Next"
            class="btn-control swiper-button-next-custom bg-white hover:bg-emerald-50 border border-gray-300 rounded-full p-2 shadow transition"
          >
            <ChevronRightIcon class="w-8 h-8 text-emerald-500" />
          </button>
        </div>
      </div>

      <Swiper
        :modules="[Navigation, Autoplay]"
        :spaceBetween="24"
        :slidesPerView="2"
        :loop="true"
        :navigation="{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }"
        :autoplay="{ delay: 5000 }"
        :breakpoints="{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 }
        }"
        class="reviews_swiper"
      >
        <SwiperSlide v-for="review in reviews" :key="review.id">
          <article
            class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-[1.03] text-gray-900"
          >
            <div class="rating mb-4 flex gap-1">
              <template v-for="star in 5" :key="star">
                <svg
                  v-if="star <= review.rating"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.972c.3.922-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.972a1 1 0 00-.364-1.118L2.044 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.973z"
                  />
                </svg>
                <svg
                  v-else
                  class="w-5 h-5 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.972c.3.922-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.972a1 1 0 00-.364-1.118L2.044 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.973z"
                  />
                </svg>
              </template>
            </div>
            <p class="main mb-6 text-sm leading-relaxed">{{ review.text }}</p>
            <div class="media flex items-center gap-4">
              <div class="rounded-full overflow-hidden w-12 h-12 border border-gray-300">
                <picture>
                  <source :srcset="review.avatarWebp" type="image/webp" />
                  <img
                    :src="review.avatarJpg"
                    :alt="review.name"
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                </picture>
              </div>
              <div>
                <span class="font-semibold block">{{ review.name }}</span>
                <span class="text-sm text-gray-600">{{ review.details }}</span>
              </div>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
.reviews_swiper {
  padding-bottom: 2rem;
}
</style>
