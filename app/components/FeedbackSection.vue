<script setup lang="ts">
import { ref, computed, watchEffect, nextTick, onMounted } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'

// Reactive window size
const { width } = useWindowSize()

// Feedback data
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

const leftColRef = ref<HTMLElement | null>(null)
const sliderHeight = ref('auto')

const prevEl = ref<HTMLElement | null>(null)
const nextEl = ref<HTMLElement | null>(null)

const shouldLoop = computed(() => feedbacks.value.length > 1)

// Update slider height when DOM is ready or resized
const updateSliderHeight = async () => {
  await nextTick()
  if (leftColRef.value) {
    const height = leftColRef.value.offsetHeight
    if (height > 0) {
      sliderHeight.value = `${height}px`
    }
  }
}

onMounted(() => {
  updateSliderHeight()
})

// Recalculate on window size change
watchEffect(() => {
  void updateSliderHeight()
})
</script>

<template>
  <section class="feedback section bg-white dark:bg-gray-900 py-16">
    <div
      class="mx-auto max-w-7xl flex flex-col lg:flex-row gap-10 lg:gap-20 items-start px-4"
    >
      <!-- KIRI: Header & Intro -->
      <div
        ref="leftColRef"
        class="feedback_header section_header max-w-lg mx-auto text-center lg:text-left lg:mx-0"
      >
        <span
          class="subtitle text-sm uppercase font-semibold tracking-wide text-sky-500 flex items-center justify-center lg:justify-start gap-2"
        >
          <span class="block w-6 h-0.5 bg-yellow-500"></span>
          Feedback
        </span>

        <h2
          class="title mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight"
        >
          What
          <span class="highlight text-emerald-600">Our Clients</span>
          Say About Us
        </h2>

        <p class="text mt-4 text-gray-600 dark:text-gray-300 max-w-md mx-auto lg:mx-0">
          Non curabitur gravida arcu ac tortor dignissim convallis aenean. Dui
          id ornare arcu odio. Sodales ut eu sem integer vitae justo eget magna.
          Duis tristique sollicitudin nibh sit amet commodo nulla facilisi
          nullam.
        </p>

        <a
          href="/contacts"
          class="btn mt-6 inline-block px-6 py-3 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition mx-auto lg:mx-0"
          >Consult now</a
        >
      </div>

      <!-- KANAN: Swiper Slider -->
      <div class="max-w-3xl w-full relative">
        <Swiper
          ref="swiperWrapperRef"
          :modules="[Autoplay, Navigation]"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :spaceBetween="30"
          :slidesPerView="1"
          :loop="shouldLoop"
          :navigation="{ prevEl: prevEl, nextEl: nextEl }"
          class="feedback_slider relative w-full"
          :style="{ height: sliderHeight }"
        >
          <SwiperSlide
            v-for="(item, i) in feedbacks"
            :key="i"
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 h-full flex"
          >
            <div
              class="flex flex-col justify-center h-full max-w-xl mx-auto text-center px-4"
            >
              <p
                class="main text-gray-900 dark:text-gray-100 mb-8 text-base sm:text-lg md:text-xl leading-relaxed font-serif italic"
              >
                “{{ item.main }}”
              </p>

              <div class="media flex items-center justify-center gap-4">
                <div
                  class="avatar w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-emerald-500 dark:border-emerald-400"
                >
                  <picture>
                    <source :srcset="item.avatarWebp" type="image/webp" />
                    <img
                      :src="item.avatarJpg"
                      :alt="item.name"
                      loading="lazy"
                      class="object-cover w-full h-full"
                    />
                  </picture>
                </div>

                <div class="media_info text-left">
                  <span
                    class="name block font-semibold text-gray-900 dark:text-white text-sm sm:text-base md:text-lg"
                    >{{ item.name }}</span
                  >
                  <span
                    class="company block text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium"
                    >{{ item.company }}</span
                  >
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <!-- Navigation buttons -->
        <div
          class="flex justify-center gap-4 mt-6"
        >
          <button
            ref="prevEl"
            class="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            aria-label="Previous slide"
          >
            Prev
          </button>
          <button
            ref="nextEl"
            class="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            aria-label="Next slide"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
