<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />

    <main class="flex-grow relative">
      <template v-if="isLoading">
        <div
          class="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50"
          aria-busy="true"
          aria-live="polite"
        >
          <!-- Spinner -->
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
      </template>

      <template v-else>
        <slot />
        <AppFooter />
      </template>
    </main>
  </div>
</template>
