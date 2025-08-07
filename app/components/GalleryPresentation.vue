<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useProjects } from '~/composables/useProjects'

const { fetchAll, projects, getImageUrl } = useProjects()

onMounted(async () => {
  await fetchAll()
})

const galleryItems = computed(() => {
  return [...projects.value]
    .filter(p => p.image && p.title && p.info?.Location)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4)
    .map(project => {
      const imageUrl = getImageUrl(project.image)
      return {
        title: project.title,
        caption: project.title,
        label: project.info?.Location || 'Unknown location',
        webp: imageUrl,
        jpg: imageUrl,
        link: `/projects/${project.slug}`,
      }
    })
})
</script>

<template>
  <section
    class="gallery presentation py-20 bg-gray-50 dark:bg-gray-900"
    aria-label="Gallery section showcasing recent projects"
  >
    <div class="container max-w-7xl mx-auto px-4">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        role="list"
      >
        <div
          v-for="(item, index) in galleryItems"
          :key="index"
          class="gallery_item group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
          role="listitem"
        >
          <a
            :href="item.link"
            class="media block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500 rounded-xl"
            :aria-label="`View project: ${item.caption}`"
            tabindex="0"
          >
            <!-- Image -->
            <picture>
              <source :srcset="item.webp" type="image/webp" />
              <img
                :src="item.jpg"
                :alt="item.caption"
                class="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[26rem] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </picture>

            <!-- Overlay -->
            <div
              class="overlay absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm p-6 flex flex-col justify-end"
            >
              <div class="text-sm text-emerald-300 font-medium uppercase tracking-wide">
                Our Work
              </div>
              <h4 class="text-white text-lg font-bold mt-1 leading-tight line-clamp-2">
                {{ item.caption }}
              </h4>
              <span class="text-sm text-gray-300 mt-0.5 line-clamp-1">
                {{ item.label }}
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery_item {
  will-change: transform, opacity;
  transition: all 0.3s ease;
}

.gallery_item:focus-within .overlay,
.gallery_item:hover .overlay {
  opacity: 1;
}

.overlay {
  border-radius: inherit;
  transition: opacity 0.3s ease;
}

.line-clamp-1 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
}
</style>
