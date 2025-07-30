<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import SwiperCore from 'swiper'
SwiperCore.use([Pagination, Autoplay, Navigation])

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
const swiperWrapperRef = ref<HTMLElement | null>(null)
const sliderHeight = ref('auto')

function updateHeight() {
  if (leftColRef.value && swiperWrapperRef.value) {
    const height = leftColRef.value.offsetHeight
    sliderHeight.value = `${height}px`
  }
}

onMounted(() => {
  updateHeight()
  window.addEventListener('resize', updateHeight)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateHeight)
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
      <Swiper
        ref="swiperWrapperRef"
        :modules="[Pagination, Autoplay, Navigation]"
        :pagination="{ clickable: true, el: '.custom-pagination' }"
        :navigation="{ prevEl: '.custom-prev', nextEl: '.custom-next' }"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :spaceBetween="30"
        :slidesPerView="1"
        class="feedback_slider max-w-3xl relative w-full"
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
        <div class="custom-pagination mt-6 flex justify-center space-x-2"></div>
      </Swiper>
    </div>
  </section>
</template>
