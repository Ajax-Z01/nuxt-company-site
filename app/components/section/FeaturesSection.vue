<script setup lang="ts">
import FeatureCard from '~/components/card/FeatureCard.vue'
import FadeInOnScroll from '~/components/transition/FadeInOnScroll.vue'

import {
  LockClosedIcon,
  ShieldCheckIcon,
  Cog6ToothIcon,
  BoltIcon,
  ServerIcon
} from '@heroicons/vue/24/outline'

const features = [
  {
    icon: BoltIcon,
    title: 'Fast Performance',
    description: 'Our system is optimized to deliver lightning fast speed and reliability.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Secure',
    description: 'We prioritize your security with industry-leading practices and encryption.',
  },
  {
    icon: Cog6ToothIcon,
    title: 'Customizable',
    description: 'Flexible configurations let you tailor the service to your exact needs.',
  },
  {
    icon: LockClosedIcon,
    title: 'Reliable',
    description: 'Built with robust architecture for consistent uptime and stability.',
  },
  {
    icon: ServerIcon,
    title: 'Scalable',
    description: 'Easily scale resources to handle growth without compromising performance.',
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
                Our Features
              </p>

              <h2
                class="text-4xl font-extrabold leading-tight max-w-lg"
                data-aos="fade-right"
              >
                Discover the <span class="highlight text-emerald-400">Unique Features</span> That Make Us Stand Out
              </h2>
              <p
                class="text-gray-400 max-w-lg"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                Discover the unique features that make our services stand out.
              </p>
            </div>
          </FadeInOnScroll>

          <!-- Feature 1 -->
          <FadeInOnScroll>
            <FeatureCard :feature="feature1" />
          </FadeInOnScroll>
        </div>

        <!-- Kolom tengah: Feature 2 & 3 -->
        <div class="flex flex-col justify-between space-y-10">
          <FadeInOnScroll>
            <FeatureCard :feature="feature2" />
          </FadeInOnScroll>
          <FadeInOnScroll>
            <FeatureCard :feature="feature3" />
          </FadeInOnScroll>
        </div>

        <!-- Kolom kanan: Feature 4 & 5 -->
        <div class="flex flex-col justify-between space-y-10">
          <FadeInOnScroll>
            <FeatureCard :feature="feature4" />
          </FadeInOnScroll>
          <FadeInOnScroll>
            <FeatureCard :feature="feature5" />
          </FadeInOnScroll>
        </div>
      </div>
    </div>
  </section>
</template>
