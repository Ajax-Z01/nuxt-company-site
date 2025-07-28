<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
      isScrolled ? 'bg-[#0f172a]/90 shadow-lg backdrop-blur' : 'bg-transparent'
    ]"
    class="h-24"
  >
    <nav
      class="mx-auto max-w-5xl h-full flex justify-between items-center px-6"
    >
      <!-- Logo -->
      <h1 class="text-2xl font-bold text-sky-400 tracking-wide drop-shadow-sm">
        PT Ajaxtreon
      </h1>

      <!-- Navigation Links -->
      <ul class="hidden md:flex gap-8 text-white text-base font-medium">
        <li>
          <NuxtLink
            to="/"
            class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-sky-400 after:w-0 hover:after:w-full after:transition-all after:duration-300"
          >
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/about"
            class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-sky-400 after:w-0 hover:after:w-full after:transition-all after:duration-300"
          >
            About
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/services"
            class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-sky-400 after:w-0 hover:after:w-full after:transition-all after:duration-300"
          >
            Services
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/contact"
            class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-sky-400 after:w-0 hover:after:w-full after:transition-all after:duration-300"
          >
            Contact
          </NuxtLink>
        </li>
      </ul>

      <!-- Mobile menu (optional, could add later) -->
    </nav>
  </header>
</template>

<style scoped>
/* Optional: Transition for smoother background effect */
header {
  backdrop-filter: blur(6px);
}
</style>
