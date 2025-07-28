<script setup>
import HeroSection from '~/components/HeroSection.vue'
</script>

<template>
  <HeroSection />

  <section class="text-center min-h-screen flex flex-col justify-center bg-gray-600 px-4">
    <h2 class="text-4xl font-bold mb-4 text-white">Welcome to PT Ajaxtreon</h2>
    <p class="text-lg text-gray-300 max-w-xl mx-auto">
      We specialize in business consulting, sustainable development, and estate construction. Let's build the future together.
    </p>

    <div class="mt-8">
      <NuxtLink
        to="/services"
        class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg transition"
      >
        Explore Our Services
      </NuxtLink>
    </div>
  </section>
</template>
