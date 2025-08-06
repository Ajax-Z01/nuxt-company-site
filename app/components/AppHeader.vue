<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isScrollingUp = ref(true)

let lastScrollY = 0
const route = useRoute()

function onScroll() {
  const currentY = window.scrollY
  isScrolled.value = currentY > 10
  isScrollingUp.value = currentY < lastScrollY
  lastScrollY = currentY
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

// Optional: scroll to top when opening mobile nav
watch(isMobileMenuOpen, (open) => {
  if (open) window.scrollTo(0, 0)
})

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Team', path: '/team' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-colors duration-500',
      (isMobileMenuOpen || isScrolled) ? 'bg-slate-900/90 shadow-lg backdrop-blur' : 'bg-transparent'
    ]"
    :style="{
      transform: (isScrollingUp || isMobileMenuOpen) ? 'translateY(0)' : 'translateY(-100%)',
      transition: 'transform 0.5s ease',
    }"
  >
    <nav class="max-w-7xl mx-auto flex justify-between items-center px-4 h-16 md:h-20 transition-transform">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 group">
        <img src="/svg/logo.svg" alt="Ajaxtreon Logo" class="h-8 w-auto md:h-10" />
        <span class="text-2xl font-extrabold text-white group-hover:text-emerald-400 transition">
          PT <span class="text-emerald-400">Ajaxtreon</span>
        </span>
      </NuxtLink>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex gap-8 text-white text-sm font-semibold tracking-wide uppercase">
        <li v-for="link in links" :key="link.path">
          <NuxtLink
            :to="link.path"
            :class="[
              'relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-sky-400 after:transition-all after:duration-300',
              route.path === link.path
                ? 'text-sky-400 font-semibold after:w-full'
                : 'after:w-0 hover:after:w-full hover:text-sky-400'
            ]"
          >
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Mobile Toggle -->
      <button @click="toggleMobileMenu" class="md:hidden text-white">
        <svg
          v-if="!isMobileMenuOpen"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 bg-slate-900/95 backdrop-blur z-40 px-6 py-8 text-white flex flex-col gap-6 text-lg font-semibold uppercase tracking-wide"
      >
        <NuxtLink
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          @click="isMobileMenuOpen = false"
          :class="[
            'transition hover:text-sky-400',
            route.path === link.path ? 'text-sky-400 font-bold' : ''
          ]"
        >
          {{ link.name }}
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
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
