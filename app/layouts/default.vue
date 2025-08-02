<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 800)
})
</script>

<template>
  <div class="min-h-screen flex flex-col relative">
    <AppHeader />

    <main class="flex-grow relative">
      <!-- Page is rendered, but hidden until loading finishes -->
      <div v-show="!isLoading">
        <NuxtPage />
        <AppFooter />
      </div>

      <!-- Loading overlay -->
      <transition name="fade">
        <div
          v-if="isLoading"
          class="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
        >
          <svg
            class="animate-spin h-10 w-10 text-emerald-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            />
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        </div>
      </transition>
    </main>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
