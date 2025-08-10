<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  breadcrumbs: { text: string; to?: string }[]
  imageUrl: any
}>()
</script>

<template>
  <header class="relative bg-gray-900 text-white overflow-hidden">
    <!-- CONTENT -->
    <div class="relative z-10 mx-auto max-w-7xl px-4 py-24 lg:py-36">
      <div class="text-center lg:text-left space-y-6 backdrop-blur-sm bg-black/10 p-6 rounded-md animate-fade-up">
        <!-- Subtitle -->
        <span class="block text-yellow-400 uppercase tracking-widest text-base lg:text-lg font-semibold">
          {{ subtitle }}
        </span>

        <!-- Title -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-md max-w-4xl">
          {{ title }}
        </h1>

        <!-- Breadcrumbs -->
        <ul class="flex flex-wrap justify-center lg:justify-start gap-2 text-sm lg:text-base text-gray-300">
          <li
            v-for="(crumb, index) in breadcrumbs"
            :key="index"
            class="flex items-center gap-2"
          >
            <template v-if="crumb.to && index !== breadcrumbs.length - 1">
              <NuxtLink :to="crumb.to" class="hover:underline text-emerald-400">
                {{ crumb.text }}
              </NuxtLink>
              <span class="text-gray-500">›</span>
            </template>
            <template v-else>
              <span
                :class="[
                  'text-white font-semibold',
                  index !== 0 ? 'pl-1' : ''
                ]"
              >
                {{ crumb.text }}
              </span>
            </template>
          </li>
        </ul>
      </div>
    </div>

    <!-- BACKGROUND IMAGE -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      <picture>
        <img
          :src="imageUrl"
          :alt="title"
          class="w-full h-full object-cover scale-105 brightness-[0.75] transition-transform duration-1000"
          loading="lazy"
          decoding="async"
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
  animation: fade-up 1s ease-out forwards;
}
</style>
