<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import FeatureCard from '~/components/card/FeatureCard.vue'
import FadeInOnScroll from '~/components/transition/FadeInOnScroll.vue'

import {
  LockClosedIcon,
  ShieldCheckIcon,
  Cog6ToothIcon,
  BoltIcon,
  ServerIcon
} from '@heroicons/vue/24/outline'

const { t } = useI18n()

const features = [
  {
    icon: BoltIcon,
    titleKey: 'features.fastPerformance.title',
    descriptionKey: 'features.fastPerformance.description',
  },
  {
    icon: ShieldCheckIcon,
    titleKey: 'features.secure.title',
    descriptionKey: 'features.secure.description',
  },
  {
    icon: Cog6ToothIcon,
    titleKey: 'features.customizable.title',
    descriptionKey: 'features.customizable.description',
  },
  {
    icon: LockClosedIcon,
    titleKey: 'features.reliable.title',
    descriptionKey: 'features.reliable.description',
  },
  {
    icon: ServerIcon,
    titleKey: 'features.scalable.title',
    descriptionKey: 'features.scalable.description',
  },
]

const feature1 = features[0]!
const feature2 = features[1]!
const feature3 = features[2]!
const feature4 = features[3]!
const feature5 = features[4]!
</script>

<template>
  <section class="features section bg-gray-900 py-16 text-gray-100">
    <div class="container max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">

        <!-- Kolom kiri: Header + Feature 1 -->
        <div class="flex flex-col justify-start space-y-10">
          <!-- Header -->
          <FadeInOnScroll>
            <div class="section_header space-y-4" data-aos="fade-down">
              <p
                class="text-sm font-semibold uppercase tracking-wider text-sky-500 flex items-center gap-2 max-w-max"
              >
                <span class="block w-6 h-0.5 bg-yellow-500 rounded"></span>
                {{ t('features.header.label') }}
              </p>

              <h2
                class="text-4xl font-extrabold leading-tight max-w-lg"
                data-aos="fade-right"
              >
                {{ t('features.header.title.before') }}
                <span class="highlight text-emerald-400">{{ t('features.header.title.highlight') }}</span>
                {{ t('features.header.title.after') }}
              </h2>

              <p
                class="text-gray-400 max-w-lg"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                {{ t('features.header.description') }}
              </p>
            </div>
          </FadeInOnScroll>

          <!-- Feature 1 -->
          <FadeInOnScroll>
            <FeatureCard
              :feature="{
                icon: feature1.icon,
                title: t(feature1.titleKey),
                description: t(feature1.descriptionKey)
              }"
            />
          </FadeInOnScroll>
        </div>

        <!-- Kolom tengah: Feature 2 & 3 -->
        <div class="flex flex-col justify-between space-y-10">
          <FadeInOnScroll>
            <FeatureCard
              :feature="{
                icon: feature2.icon,
                title: t(feature2.titleKey),
                description: t(feature2.descriptionKey)
              }"
            />
          </FadeInOnScroll>
          <FadeInOnScroll>
            <FeatureCard
              :feature="{
                icon: feature3.icon,
                title: t(feature3.titleKey),
                description: t(feature3.descriptionKey)
              }"
            />
          </FadeInOnScroll>
        </div>

        <!-- Kolom kanan: Feature 4 & 5 -->
        <div class="flex flex-col justify-between space-y-10">
          <FadeInOnScroll>
            <FeatureCard
              :feature="{
                icon: feature4.icon,
                title: t(feature4.titleKey),
                description: t(feature4.descriptionKey)
              }"
            />
          </FadeInOnScroll>
          <FadeInOnScroll>
            <FeatureCard
              :feature="{
                icon: feature5.icon,
                title: t(feature5.titleKey),
                description: t(feature5.descriptionKey)
              }"
            />
          </FadeInOnScroll>
        </div>
      </div>
    </div>
  </section>
</template>
