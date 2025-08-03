<script setup lang="ts">
import { ref } from 'vue'

const showVideo = ref(false)

const stats = [
  {
    value: '99%',
    label: 'Building Control\nApproval Rate',
  },
  {
    value: '320+',
    label: 'Active Projects in\nConstruction Management',
  },
  {
    value: '200+',
    label: 'Completed Projects\nEvery Year',
  },
  {
    value: '4.253',
    label: 'Million Euros Turnover\nin 2020',
  },
]
</script>

<template>
  <section class="bg-gray-900 text-white py-20">
    <div class="container max-w-7xl mx-auto px-4">
      <!-- Grid: Header & Stats -->
      <div class="grid md:grid-cols-2 gap-12 mb-16 items-start">
        <!-- Header -->
        <div class="space-y-4" data-aos="fade-right">
          <p class="text-sm font-semibold uppercase tracking-wider text-sky-800 flex items-center gap-2">
            <span class="block w-6 h-0.5 bg-yellow-500 rounded"></span>
            What we do
          </p>
          <h2 class="text-4xl md:text-5xl font-extrabold leading-tight">
            Building The Future on a <span class="text-emerald-400">Foundation of Excellence</span>
          </h2>
          <p class="text-gray-400 text-base md:text-lg">
            Risus commodo viverra maecenas accumsan lacus vel. Semper viverra nam libero justo laoreet sit amet cursus.
          </p>
        </div>

        <!-- Stats -->
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-8" data-aos="fade-left">
          <li
            v-for="(item, index) in stats"
            :key="index"
            class="text-center space-y-3"
          >
            <h2 class="text-4xl font-bold text-emerald-400">{{ item.value }}</h2>
            <p class="text-gray-300 whitespace-pre-line text-sm md:text-base">
              {{ item.label }}
            </p>
          </li>
        </ul>
      </div>

      <!-- Video Section -->
      <div class="relative max-w-7xl mx-auto rounded-xl overflow-hidden aspect-video" data-aos="zoom-in">
        <template v-if="!showVideo">
          <!-- Poster Image -->
          <img
            src="/img/video/03.webp"
            alt="Video Poster"
            class="w-full h-full object-cover"
          />
          <!-- Play Button Overlay -->
          <button
            @click="showVideo = true"
            class="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition"
            aria-label="Play Video"
          >
            <svg
              class="w-20 h-20 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </template>

        <template v-else>
          <video
            class="w-full h-full object-cover"
            controls
            autoplay
            preload="metadata"
            poster="/img/video/03.webp"
          >
            <source src="/img/video/Services.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </template>
      </div>
    </div>
  </section>
</template>
