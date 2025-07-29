<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isScrollingUp = ref(true)

let lastScrollY = 0

function onScroll() {
  const currentScrollY = window.scrollY
  isScrolled.value = currentScrollY > 10
  isScrollingUp.value = currentScrollY < lastScrollY
  lastScrollY = currentScrollY
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
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
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out backdrop-blur',
      isScrolled ? 'bg-[#0f172a]/90 shadow-lg' : 'bg-transparent',
      isScrollingUp ? 'translate-y-0' : '-translate-y-full',
      'h-16 md:h-20'
    ]"
  >
    <nav class="mx-auto max-w-7xl h-full flex justify-between items-center px-4">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="flex items-center gap-3 group"
      >
        <img src="/svg/logo.svg" alt="Ajaxtreon Logo" class="h-8 w-auto md:h-10" />
        <span class="text-2xl font-extrabold tracking-wide select-none text-white group-hover:text-emerald-400 transition">
          Ajaxtreon <span class="text-emerald-400">Construct</span>
        </span>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <ul class="hidden md:flex gap-8 text-white text-base font-medium">
        <li v-for="(link, index) in ['Home', 'About', 'Services', 'Blog', 'Contact']" :key="index">
          <NuxtLink
            :to="`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`"
            class="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-sky-400 after:w-0 hover:after:w-full after:transition-all after:duration-300"
          >
            {{ link }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Mobile Hamburger -->
      <button
        @click="toggleMobileMenu"
        class="md:hidden text-white focus:outline-none"
        aria-label="Toggle mobile menu"
      >
        <svg
          v-if="!isMobileMenuOpen"
          class="w-6 h-6 md:w-7 md:h-7"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          class="w-6 h-6 md:w-7 md:h-7"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Nav Drawer -->
    <transition name="slide-fade">
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-16 left-0 right-0 bg-[#0f172a]/95 backdrop-blur text-white text-lg font-medium px-6 py-6 flex flex-col gap-4"
      >
        <NuxtLink
          to="/"
          @click="isMobileMenuOpen = false"
          class="hover:text-sky-400 transition"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          @click="isMobileMenuOpen = false"
          class="hover:text-sky-400 transition"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/services"
          @click="isMobileMenuOpen = false"
          class="hover:text-sky-400 transition"
        >
          Services
        </NuxtLink>
        <NuxtLink
          to="/blog"
          @click="isMobileMenuOpen = false"
          class="hover:text-sky-400 transition"
        >
          Blog
        </NuxtLink>
        <NuxtLink
          to="/contact"
          @click="isMobileMenuOpen = false"
          class="hover:text-sky-400 transition"
        >
          Contact
        </NuxtLink>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
