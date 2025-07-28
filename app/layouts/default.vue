<script setup>
import AppHeader from '~/components/AppHeader.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="bg-gray-100 p-4 text-center text-sm text-gray-500">
      &copy; 2025 PT Ajaxtreon. All rights reserved.
    </footer>
  </div>
</template>
