<script setup lang="ts">
const galleryItems = [
  {
    full: '/img/gallery/10full.jpg',
    webp: '/img/gallery/10.webp',
    jpg: '/img/gallery/10.jpg',
    caption: 'Fresh Concept Construction Renovation',
    label: 'Special Projects',
  },
  {
    full: '/img/gallery/08full.jpg',
    webp: '/img/gallery/08.webp',
    jpg: '/img/gallery/08.jpg',
    caption: 'Fresh Concept Construction Renovation',
    label: 'Special Projects',
  },
  {
    full: '/img/gallery/02full.jpg',
    webp: '/img/gallery/02.webp',
    jpg: '/img/gallery/02.jpg',
    caption: 'Fresh Concept Construction Renovation',
    label: 'Special Projects',
  },
  {
    full: '/img/gallery/09full.jpg',
    webp: '/img/gallery/09.webp',
    jpg: '/img/gallery/09.jpg',
    caption: 'Fresh Concept Construction Renovation',
    label: 'Special Projects',
  },
]
</script>

<template>
  <section
    class="gallery presentation py-16 bg-gray-50 dark:bg-gray-900"
    aria-label="Gallery section showcasing recent projects"
  >
    <div class="container max-w-7xl mx-auto px-4">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0"
        role="list"
      >
        <div
          v-for="(item, index) in galleryItems"
          :key="index"
          class="gallery_item relative overflow-hidden rounded-none lg:rounded-lg shadow-lg group cursor-pointer"
          role="listitem"
        >
          <a
            :href="item.full"
            class="media block focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-none lg:rounded-lg"
            :aria-label="`View full image: ${item.caption}`"
            data-role="gallery-link"
            tabindex="0"
          >
            <picture>
              <source :srcset="item.webp" type="image/webp" />
              <img
                :src="item.jpg"
                :alt="item.caption"
                class="w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[26rem]"
                loading="lazy"
                decoding="async"
                width="400"
                height="288"
              />
            </picture>

            <div
              class="overlay absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8 rounded-none lg:rounded-lg"
              aria-hidden="true"
            >
              <div
                class="overlay_header text-xs md:text-sm text-emerald-400 font-semibold uppercase tracking-wide mb-1"
              >
                Our Gallery
              </div>
              <h4
                class="overlay_caption text-lg md:text-xl font-bold leading-tight text-white"
              >
                {{ item.caption }}
              </h4>
              <span class="overlay_label text-sm text-gray-300">{{ item.label }}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery_item .overlay {
  will-change: opacity;
}

.gallery_item img {
  transition-property: transform;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;
}

.gallery_item:focus-within .overlay,
.gallery_item:hover .overlay {
  opacity: 1 !important;
}

/* Lebih tinggi dan tanpa gap di desktop */
@media (min-width: 1024px) {
  .gallery.presentation .grid {
    gap: 0 !important;
  }
  .gallery_item {
    border-radius: 0 !important; /* supaya gambar menempel rapi */
  }
  .gallery_item .overlay {
    border-radius: 0 !important;
  }
}
</style>
