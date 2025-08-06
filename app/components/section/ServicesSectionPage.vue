<script setup lang="ts">
import { NuxtLink } from '#components'
import FadeInOnScroll from '~/components/transition/FadeInOnScroll.vue'

const services = [
  {
    title: 'Process Engineering',
    description:
      'Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin.',
  },
  {
    title: 'Construction Services',
    description:
      'Donec adipiscing tristique risus nec feugiat in. Porttitor massa id neque aliquam vestibulum morbi.',
  },
  {
    title: 'Civil Engineering',
    description:
      'Morbi tincidunt ornare massa eget egestas purus viverra blandit elementum cursus risus.',
  },
  {
    title: 'Electrical Engineering',
    description:
      'Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Nam aliquam sem et tortor.',
  },
  {
    title: 'Chemistry and Metallurgy',
    description:
      'Mollis nunc sed id semper. Sodales ut etiam sit amet nisl purus. Sed odio morbi quis commodo.',
  },
  {
    title: 'Specialty Services',
    description:
      'Tellus elementum sagittis vitae et. Amet justo donec enim diam vulputate ut consequat id porta nibh.',
  },
]
</script>

<template>
  <section class="services section bg-gray-900 py-24 text-gray-100">
    <div class="container max-w-7xl mx-auto px-4">
      <!-- Header -->
      <div class="section_header max-w-lg mb-12 space-y-4" data-aos="fade-up">
        <p class="text-sm font-semibold uppercase tracking-wider text-sky-400 flex items-center gap-2 max-w-max">
          <span class="block w-6 h-0.5 bg-yellow-500 rounded"></span>
          What We Offer
        </p>
        <h2 class="text-4xl md:text-5xl font-extrabold leading-tight">
          Our <span class="text-emerald-400">Services</span>
        </h2>
        <p class="text-gray-400 text-base md:text-lg leading-relaxed">
          Discover the range of solutions we offer to drive your business forward with engineering excellence.
        </p>
      </div>

      <!-- Services Grid -->
      <ul class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <FadeInOnScroll
          v-for="(service, index) in services"
          :key="index"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <li
            class="group bg-gray-800 rounded-2xl p-6 border-t-4 border-emerald-400/20 hover:border-emerald-400 hover:shadow-xl hover:bg-gray-700 transition-all duration-300 flex flex-col"
          >
            <div class="flex-grow space-y-3">
              <span class="text-2xl font-bold text-emerald-400 block">
                {{ (index + 1).toString().padStart(2, '0') }}
              </span>
              <h4 class="text-xl font-semibold text-white group-hover:text-emerald-300 transition-colors">
                {{ service.title }}
              </h4>
              <p class="text-gray-400 leading-relaxed text-sm md:text-base">
                {{ service.description }}
              </p>
            </div>

            <NuxtLink
              :to="`/services/${service.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z-]/g, '')}`"
              class="inline-flex items-center gap-2 text-emerald-400 hover:text-white mt-6 font-medium group self-start"
              :aria-label="`Read more about ${service.title}`"
            >
              <span>Details</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </NuxtLink>
          </li>
        </FadeInOnScroll>
      </ul>
    </div>
  </section>
</template>
