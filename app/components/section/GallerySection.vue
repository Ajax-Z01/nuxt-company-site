<script setup lang="ts">
import FadeInOnScroll from '~/components/transition/FadeInOnScroll.vue'

const galleryItems = [
  {
    src: '/img/gallery/02.webp',
    webp: '/img/gallery/02.webp',
    full: '/img/gallery/02full.webp',
    caption: 'Fresh Concept Construction Renovation',
    label: 'Special projects',
  },
  {
    src: '/img/gallery/03.webp',
    webp: '/img/gallery/03.webp',
    full: '/img/gallery/03full.webp',
    caption: 'Fresh Concept Construction Renovation',
    label: 'Special projects',
  },
  {
    src: '/img/gallery/06.webp',
    webp: '/img/gallery/06.webp',
    full: '/img/gallery/06full.webp',
    caption: 'Fresh Concept Construction Renovation',
    label: 'Special projects',
  },
  {
    src: '/img/gallery/08.webp',
    webp: '/img/gallery/08.webp',
    full: '/img/gallery/08full.webp',
    caption: 'Fresh Concept Construction Renovation',
    label: 'Special projects',
  },
  {
    src: '/img/gallery/05.webp',
    webp: '/img/gallery/05.webp',
    full: '/img/gallery/05full.webp',
    caption: 'Fresh Concept Construction Renovation',
    label: 'Special projects',
  },
  {
    src: '/img/gallery/01.webp',
    webp: '/img/gallery/01.webp',
    full: '/img/gallery/01full.webp',
    caption: 'Fresh Concept Construction Renovation',
    label: 'Special projects',
  },
]
</script>

<template>
  <section class="py-16 bg-gray-100 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Header -->
      <div class="mb-12">
        <FadeInOnScroll>
          <p class="text-sm font-semibold uppercase tracking-wider text-sky-500 flex items-center gap-2">
            <span class="block w-6 h-0.5 bg-yellow-500"></span>
            What we do
          </p>
          <h2 class="mt-2 text-4xl font-extrabold text-gray-100 leading-tight">
            Our <span class="text-emerald-400">Gallery</span>
          </h2>
        </FadeInOnScroll>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <FadeInOnScroll
          v-for="(item, index) in galleryItems"
          :key="index"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <a
            :href="item.full"
            class="relative group block overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 transform transition-all duration-700 ease-out"
            rel="noopener noreferrer"
            target="_blank"
          >
            <!-- Picture with WebP fallback -->
            <picture>
              <source :srcset="item.webp" type="image/webp" />
              <img
                :src="item.src"
                :alt="item.caption"
                class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </picture>

            <!-- Overlay -->
            <div
              class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-4"
            >
              <h4 class="text-white text-lg font-semibold">{{ item.caption }}</h4>
              <span class="text-sm text-emerald-300 mt-1">{{ item.label }}</span>
            </div>
          </a>
        </FadeInOnScroll>
      </div>
    </div>
  </section>
</template>
