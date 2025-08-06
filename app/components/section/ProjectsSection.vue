<script setup lang="ts">
import { MapPinIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
import FadeInOnScroll from '~/components/transition/FadeInOnScroll.vue'

const projects = [
  {
    title: 'Food Factory Design and Construction',
    location: 'Karli Turnpike Apt. 993 Port Valentine',
    imageWebp: '/img/projects/05.webp',
    imageJpg: '/img/projects/05.jpg',
    link: '/projects/food-factory',
  },
  {
    title: 'Fresh Concept Construction Renovation',
    location: 'Daphne Way New Reaganmouth',
    imageWebp: '/img/projects/02.webp',
    imageJpg: '/img/projects/02.jpg',
    link: '/projects/fresh-renovation-1',
  },
  {
    title: 'Reconstruction of Old Factory Building',
    location: 'Schoen Ramp Suite 607 Borerton',
    imageWebp: '/img/projects/06.webp',
    imageJpg: '/img/projects/06.jpg',
    link: '/projects/old-factory',
  },
  {
    title: 'Installation and Creation of a Supply System',
    location: 'Ernest Mount Bartonstad',
    imageWebp: '/img/projects/03.webp',
    imageJpg: '/img/projects/03.jpg',
    link: '/projects/supply-system',
  },
  {
    title: 'Jazzy Elite Construction Shopping Center',
    location: '100 Sunrise Ct Hamel, Minnesota',
    imageWebp: '/img/projects/01.webp',
    imageJpg: '/img/projects/01.jpg',
    link: '/projects/shopping-center',
  },
  {
    title: 'Fresh Concept Construction Renovation',
    location: 'Claudie Green Suite 698 Avisstad',
    imageWebp: '/img/projects/07.webp',
    imageJpg: '/img/projects/07.jpg',
    link: '/projects/fresh-renovation-2',
  },
]
</script>

<template>
  <section class="projects section py-16 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4">
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <FadeInOnScroll
          v-for="(project, index) in projects"
          :key="index"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <li
            class="group rounded-xl overflow-hidden shadow-md hover:shadow-lg flex flex-col bg-white/90 dark:bg-gray-900/90 transition-all duration-500"
          >
            <!-- Image -->
            <picture>
              <source :srcset="project.imageWebp" type="image/webp" />
              <img
                :src="project.imageJpg"
                :alt="project.title"
                loading="lazy"
                class="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </picture>

            <!-- Content -->
            <div class="flex flex-col gap-3 p-6 pb-8">
              <h3 class="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                {{ project.title }}
              </h3>

              <div class="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <MapPinIcon class="w-5 h-5 text-emerald-500" />
                <span>{{ project.location }}</span>
              </div>

              <a
                :href="project.link"
                class="inline-flex items-center gap-1 text-emerald-700 hover:text-white hover:bg-emerald-600 transition rounded-md px-3 py-1.5 text-sm font-semibold"
              >
                Details <ArrowRightIcon class="w-4 h-4" />
              </a>
            </div>
          </li>
        </FadeInOnScroll>
      </ul>
    </div>
  </section>
</template>
