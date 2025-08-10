<script setup lang="ts">
import posterSrc from '~/assets/img/video/03.webp?width=600;1200&format=webp&quality=70'

import { ref } from 'vue'
import { useStorage } from '@vueuse/core'

const videoStarted = useStorage('videoStarted', false)
const videoRef = ref<HTMLVideoElement | null>(null)

const videoSrc = '/img/video/Services.mp4'

onMounted(() => {
  videoStarted.value = false
})
</script>

<template>
  <div class="relative max-w-7xl mx-auto rounded-xl overflow-hidden aspect-video" data-aos="zoom-in">
    <template v-if="!videoStarted">
      <img
        :src="posterSrc[0]"
        alt="Video Poster"
        class="w-full h-full object-cover pointer-events-none"
        loading="lazy"
        decoding="async"
      />
      <button
        @click="videoStarted = true"
        class="absolute inset-0 z-10 flex items-center justify-center bg-black/40 hover:bg-black/30 transition"
        aria-label="Play Video"
      >
        <svg class="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </template>

    <template v-else>
      <video
        ref="videoRef"
        class="w-full h-full object-cover"
        controls
        preload="metadata"
        :poster="posterSrc"
      >
        <source :src="videoSrc" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </template>
  </div>
</template>
