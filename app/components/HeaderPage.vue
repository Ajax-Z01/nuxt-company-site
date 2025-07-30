<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  current: string
  imageWebp: string
  imagePng: string
}>()
</script>

<template>
  <header class="page relative bg-gray-900 text-white overflow-hidden">
    <!-- CONTENT -->
    <div class="mx-auto max-w-7xl px-4 py-24 lg:py-36 relative z-10">
      <div class="section_header text-center lg:text-left animate-fade-up opacity-0 transition-opacity duration-700 delay-200">
        <span class="subtitle uppercase text-base lg:text-lg font-semibold text-yellow-400 tracking-widest block mb-4">
          {{ subtitle }}
        </span>
        <h1 class="title text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md">
          {{ title }}
        </h1>
        <ul class="breadcrumbs flex flex-wrap justify-center lg:justify-start gap-3 text-sm lg:text-base text-gray-300">
          <li class="breadcrumbs_item">
            <NuxtLink to="/" class="hover:underline text-emerald-400">Home</NuxtLink>
          </li>
          <li class="breadcrumbs_item text-gray-500">/</li>
          <li class="breadcrumbs_item breadcrumbs_item--current">
            <span>{{ current }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- BACKGROUND IMAGE -->
    <div class="media absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      <picture>
        <source :srcset="imageWebp" type="image/webp" />
        <img
          :src="imagePng"
          :alt="title"
          class="w-full h-full object-cover scale-105 brightness-75 transition-transform duration-1000"
        />
      </picture>
    </div>
  </header>
</template>

<style scoped>
@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fade-up 0.8s ease-out forwards;
}
</style>
