<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import { useWindowSize, useIntersectionObserver } from '@vueuse/core'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/autoplay'

const { width } = useWindowSize()

const feedbacks = ref([
  {
    main: 'Consequat nisl vel pretium lectus quam id leo. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Blandit libero volutpat sed cras ornare',
    avatarWebp: '/img/avatars/female01.webp',
    avatarJpg: '/img/avatars/female01.jpg',
    name: 'Rene Rodriguez',
    company: 'Acelerisque',
  },
  {
    main: 'Consequat nisl vel pretium lectus quam id leo. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Blandit libero volutpat sed cras ornare',
    avatarWebp: '/img/avatars/male01.webp',
    avatarJpg: '/img/avatars/male01.jpg',
    name: 'John Smith',
    company: 'Loremipsum',
  },
  {
    main: 'Consequat nisl vel pretium lectus quam id leo. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Blandit libero volutpat sed cras ornare',
    avatarWebp: '/img/avatars/female02.webp',
    avatarJpg: '/img/avatars/female02.jpg',
    name: 'Marta Diaz',
    company: 'Qwerty',
  },
  {
    main: 'Consequat nisl vel pretium lectus quam id leo. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Blandit libero volutpat sed cras ornare',
    avatarWebp: '/img/avatars/male02.webp',
    avatarJpg: '/img/avatars/male02.jpg',
    name: 'Victor Adams',
    company: 'Dolorsitamet',
  },
  {
    main: 'Consequat nisl vel pretium lectus quam id leo. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Blandit libero volutpat sed cras ornare',
    avatarWebp: '/img/avatars/female03.webp',
    avatarJpg: '/img/avatars/female03.jpg',
    name: 'Sarah Doe',
    company: 'Companyname',
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

useIntersectionObserver(sectionRef, (entries) => {
  const entry = entries[0]
  if (entry?.isIntersecting) {
    updateSliderHeight()
  }
}, { threshold: 0.3 })
</script>

<template>
  <section ref="sectionRef" class="bg-white dark:bg-gray-900 py-20">
    <div class="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16 items-start">
      <!-- Left: Title + Description -->
      <div
        ref="leftColRef"
        class="max-w-lg lg:text-left space-y-6"
      >
        <div class="flex items-center gap-3 justify-start">
          <span class="block w-6 h-0.5 bg-yellow-500"></span>
          <p class="text-sm font-semibold uppercase tracking-wide text-sky-500">Feedback</p>
        </div>

        <h2 class="text-4xl font-extrabold leading-tight text-gray-900 dark:text-white">
          What <span class="text-emerald-400">Our Clients</span> Say About Us
        </h2>

        <p class="text-base text-gray-600 dark:text-gray-300">
          Non curabitur gravida arcu ac tortor dignissim convallis aenean. Dui id ornare arcu odio. Sodales ut eu sem integer vitae justo eget magna.
        </p>

        <NuxtLink
          to="/contact"
          class="btn bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
        >
          Consult now
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
                <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-500 dark:border-emerald-400">
                  <picture>
                    <source :srcset="item.avatarWebp" type="image/webp" />
                    <img
                      :src="item.avatarJpg"
                      :alt="item.name"
                      class="w-full h-full object-cover"
                      loading="lazy"
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
