<script setup lang="ts">
import image from '~/assets/img/gallery/18.webp?width=600;1200&format=webp&quality=70'

import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import AboutText from '~/components/text/AboutText.vue'
import StatsCountUp from '~/components/stat/StatsCountUp.vue'
import FadeInOnScroll from '~/components/transition/FadeInOnScroll.vue'

const achievements = [
  {
    icon: `<svg class="w-10 h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M36.406 6.563L21.406 0.3125C20.9375 0.156 20.4688 0.078 20 0.078C19.453 0.078 18.984 0.156 18.516 0.312L3.516 6.563C2.109 7.188 1.25 8.516 1.25 10C1.25 25.547 10.156 36.25 18.516 39.766C19.453 40.156 20.469 40.156 21.406 39.766C28.125 36.953 38.75 27.344 38.75 10C38.75 8.516 37.813 7.188 36.406 6.563ZM20.469 37.422C20.156 37.578 19.766 37.578 19.453 37.422C11.875 34.375 3.75 23.75 3.75 10C3.75 9.532 3.984 9.062 4.453 8.906L19.453 2.656C19.766 2.5 20.156 2.5 20.469 2.656L35.469 8.906C35.937 9.062 36.25 9.532 36.172 10C36.25 23.75 28.125 34.375 20.469 37.422ZM31.094 12.031C30.703 11.719 30.156 11.719 29.766 12.031L17.031 24.688L11.641 19.297C11.25 18.906 10.625 18.906 10.313 19.297L9.609 19.922C9.219 20.313 9.219 20.859 9.609 21.25L16.328 28.047C16.719 28.36 17.266 28.36 17.656 28.047L31.719 14.063C32.109 13.672 32.109 13.125 31.719 12.734L31.094 12.031Z"/></svg>`,
    label: 'Successfully Completed Projects',
  },
  {
    icon: `<svg class="w-10 h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 41 40" xmlns="http://www.w3.org/2000/svg"><path d="M39.469 28.828L29.859 19.219L33.766 15.313L39.078 10C40.563 8.516 40.563 6.172 39.078 4.688L35.563 1.172C34.859 0.391 33.922 0 32.906 0C31.969 0 31.031 0.391 30.25 1.172L24.938 6.484L21.031 10.391L11.422 0.781C10.953 0.313 10.328 0 9.703 0C9.078 0 8.453 0.313 7.984 0.781L0.953 7.734C-0.063 8.75 -0.063 10.313 0.953 11.25L10.563 20.859L1.734 29.688L0.25 38.125C0.016 39.297 1.109 40.234 2.125 40L10.563 38.516L19.391 29.688L29 39.297C29.391 39.766 30.016 40 30.719 40C31.344 40 31.969 39.766 32.438 39.297L39.469 32.266C40.484 31.328 40.484 29.766 39.469 28.828ZM32.047 2.891C32.359 2.578 33.453 2.578 33.844 2.891L37.359 6.406C37.828 6.953 37.828 7.734 37.359 8.203L33.766 11.797L28.453 6.484L32.047 2.891ZM2.672 9.531L9.703 2.578L14.078 6.875L11.031 10C10.797 10.234 10.797 10.625 11.031 10.859L11.891 11.719C12.125 11.953 12.516 11.953 12.75 11.719L15.875 8.672L19.312 12.109L12.281 19.141L2.672 9.531ZM9.313 36.25L2.906 37.344L4 30.938L26.656 8.281L31.969 13.594L9.313 36.25ZM30.719 37.578L21.109 27.969L28.141 20.938L31.578 24.375L28.531 27.5C28.297 27.734 28.297 28.125 28.531 28.359L29.391 29.219C29.625 29.453 30.016 29.453 30.25 29.219L33.375 26.172L37.75 30.547L30.719 37.578Z"/></svg>`,
    label: 'Simplicity In Design With Practically In Mind',
  },
  {
    icon: `<svg class="w-10 h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 41 40" xmlns="http://www.w3.org/2000/svg"><path d="M37.75 27.5V25C37.75 17.11 32.438 10.469 25.25 8.36V7.5C25.25 6.172 24.078 5 22.75 5H17.75C16.344 5 15.25 6.172 15.25 7.5V8.36C7.984 10.469 2.75 17.11 2.75 25V27.5C1.344 27.5 0.25 28.672 0.25 30V32.5C0.25 33.906 1.344 35 2.75 35H37.75C39.078 35 40.25 33.906 40.25 32.5V30C40.25 28.672 39.078 27.5 37.75 27.5ZM5.25 25C5.25 18.906 9 13.672 14.313 11.406L16.344 19.531C16.422 19.844 16.656 20 17.047 20C17.359 20 17.672 19.688 17.75 19.297V7.5H22.75V19.297C22.75 19.688 23.063 20 23.375 20C23.766 20 24 19.844 24.078 19.531L26.109 11.406C31.422 13.672 35.25 18.906 35.25 25V27.5H5.25V25ZM37.75 32.5H2.75V30H37.75V32.5Z"/></svg>`,
    label: 'High Level of Construction Control Approval',
  },
]

const stats = [
  { value: '200+', label: 'Active Projects in Civil Engineering' },
  { value: '99%', label: 'Building Control Approval Rate' },
]

const statsRef = ref<HTMLElement | null>(null)
const isStatsActive = ref(false)

useIntersectionObserver(
  statsRef,
  ([entry]) => {
    if (entry?.isIntersecting) {
      isStatsActive.value = true
    }
  },
  { threshold: 0.3 }
)
</script>

<template>
  <section class="py-20 bg-white dark:bg-gray-950">
    <div class="container max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-stretch">
      <FadeInOnScroll>
        <div class="w-full">
          <AboutText :achievements="achievements" />
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <div class="w-full flex flex-col gap-8" ref="statsRef">
          <StatsCountUp :stats="stats" :isActive="isStatsActive" />
          <div class="rounded-lg overflow-hidden shadow-lg">
            <img
              :src="image[0]"
              alt="Construction site"
              class="w-full object-cover aspect-[16/9]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </FadeInOnScroll>
    </div>
  </section>
</template>