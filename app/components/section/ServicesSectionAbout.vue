<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import tabs01 from '~/assets/img/tabs/01.webp?width=600;1200&format=webp&quality=70'
import tabs02 from '~/assets/img/tabs/02.webp?width=600;1200&format=webp&quality=70'
import tabs03 from '~/assets/img/tabs/03.webp?width=600;1200&format=webp&quality=70'
import tabs04 from '~/assets/img/tabs/04.webp?width=600;1200&format=webp&quality=70'
import tabs05 from '~/assets/img/tabs/05.webp?width=600;1200&format=webp&quality=70'
import tabs06 from '~/assets/img/tabs/06.webp?width=600;1200&format=webp&quality=70'

import FadeInOnScroll from '../transition/FadeInOnScroll.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const { t } = useI18n()

const services = [
  {
    key: 'processEngineering',
    imageWebp: tabs01[0],
  },
  {
    key: 'chemistryAndMetallurgy',
    imageWebp: tabs02[0],
  },
  {
    key: 'electricalEngineering',
    imageWebp: tabs03[0],
  },
  {
    key: 'specialtyServices',
    imageWebp: tabs04[0],
  },
  {
    key: 'civilEngineering',
    imageWebp: tabs05[0],
  },
  {
    key: 'constructionManagement',
    imageWebp: tabs06[0],
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
            {{ t('servicesSectionAbout.justFeelTheFuture') }}
          </p>
          <h2 class="text-4xl font-extrabold leading-tight">
            {{ t('servicesSectionAbout.spotlightServices') }} 
            <span class="text-emerald-400">{{ t('servicesSectionAbout.servicesLabel', 'Services') }}</span>
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
            v-for="service in services"
            :key="service.key"
            class="p-0"
            style="will-change: transform;"
          >
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <!-- Image -->
              <div class="media rounded-lg overflow-hidden shadow-none">
                <picture>
                  <img
                    :src="service.imageWebp"
                    :alt="t(`servicesSectionAbout.services.${service.key}.title`)"
                    class="w-full object-cover aspect-[4/3] rounded-lg"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              <!-- Content -->
              <div class="main space-y-5 px-0 md:px-6">
                <h3 class="text-4xl font-semibold tracking-tight">
                  {{ t(`servicesSectionAbout.services.${service.key}.title`) }}
                </h3>
                <p class="text-gray-300 text-lg md:text-xl leading-relaxed">
                  {{ t(`servicesSectionAbout.services.${service.key}.description`) }}
                </p>
                <ul class="list-disc list-inside space-y-3 text-gray-400 text-base md:text-lg">
                  <li v-for="(label, key) in ['first', 'second', 'third']" :key="key">
                    {{ t(`servicesSectionAbout.services.${service.key}.points.${label}`) }}
                  </li>
                </ul>
                <NuxtLink
                  :to="`/services/${t(`servicesSectionAbout.services.${service.key}.slug`)}`"
                  class="inline-block mt-6 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded shadow-md transition"
                  :aria-label="t('servicesSectionAbout.ariaLabelReadMore', { service: t(`servicesSectionAbout.services.${service.key}.title`) })"
                >
                  {{ t('servicesSectionAbout.readMore') }}
                </NuxtLink>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </FadeInOnScroll>
    </div>
  </section>
</template>
