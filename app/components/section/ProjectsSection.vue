<script setup lang="ts">
import { MapPinIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
import { ref, computed, onMounted, watch } from 'vue'
import FadeInOnScroll from '~/components/transition/FadeInOnScroll.vue'
import { useProjects } from '~/composables/useProjects'

const { fetchAll, projects, total, getImageUrl } = useProjects()

const page = ref(1)
const pageSize = 6

// Fetch projects saat mount dan setiap page berubah
const loadProjects = async () => {
  await fetchAll({ page: page.value, pageSize })
}

onMounted(loadProjects)

watch(page, loadProjects)

const displayProjects = computed(() =>
  projects.value.map((project) => ({
    title: project.title,
    location: project.location || project.info?.Location || 'Unknown',
    imageWebp: getImageUrl(project.image),
    imageJpg: getImageUrl(project.image),
    link: `/projects/${project.slug}`,
  }))
)

const totalPages = computed(() => Math.ceil(total.value / pageSize))

const goToPage = (n: number) => {
  if (n >= 1 && n <= totalPages.value) page.value = n
}
</script>

<template>
  <section class="projects section py-16 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4">
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <FadeInOnScroll
          v-for="(project, index) in displayProjects"
          :key="project.link"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <li
            class="group rounded-xl overflow-hidden shadow-md hover:shadow-lg flex flex-col bg-white/90 dark:bg-gray-900/90 transition-all duration-500"
          >
            <picture>
              <source :srcset="project.imageWebp" type="image/webp" />
              <img
                :src="project.imageJpg"
                :alt="project.title"
                loading="lazy"
                class="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </picture>

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

      <!-- Pagination -->
      <div
        v-if="totalPages > 1"
        class="flex justify-center items-center gap-2 mt-10 text-sm"
      >
        <button
          class="px-3 py-1.5 rounded border
                text-gray-600 dark:text-gray-300
                hover:bg-gray-100 dark:hover:bg-gray-700
                focus:outline-none focus:ring-2 focus:ring-emerald-400
                disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="page === 1"
          @click="goToPage(page - 1)"
        >
          Previous
        </button>

        <template v-for="n in totalPages" :key="n">
          <button
            class="px-3 py-1.5 rounded border transition-colors duration-150
                  focus:outline-none focus:ring-2 focus:ring-emerald-400"
            :class="{
              // Active page
              'bg-emerald-500 text-white border-emerald-500 hover:bg-emerald-600':
                page === n,

              // Non-active page
              'text-gray-600 hover:bg-gray-100 border-gray-300 dark:text-gray-300 dark:hover:bg-gray-700 dark:border-gray-600':
                page !== n,
            }"
            @click="goToPage(n)"
          >
            {{ n }}
          </button>
        </template>

        <button
          class="px-3 py-1.5 rounded border
                text-gray-600 dark:text-gray-300
                hover:bg-gray-100 dark:hover:bg-gray-700
                focus:outline-none focus:ring-2 focus:ring-emerald-400
                disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="page === totalPages"
          @click="goToPage(page + 1)"
        >
          Next
        </button>
      </div>
    </div>
  </section>
</template>
