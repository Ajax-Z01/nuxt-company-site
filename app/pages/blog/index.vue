<script setup lang="ts">
import HeaderPage from '@/components/HeaderPage.vue'
import BlogSection from '~/components/section/BlogSection.vue';

const breadcrumbs = [
  { text: 'Home', to: '/' },
  { text: 'Blog' },
]
</script>

<template>
  <!-- Hero Header -->
  <HeaderPage
    title="Blog"
    subtitle="Our Blog"
    :breadcrumbs="breadcrumbs"
    imageWebp="/img/plan.webp"
    imagePng="/img/plan.png"
  />
  <BlogSection />
</template>
