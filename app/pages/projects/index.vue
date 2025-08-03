<script setup lang="ts">
import HeaderPage from '~/components/HeaderPage.vue'
import ProjectsSection from '~/components/section/ProjectsSection.vue'

const breadcrumbs = [
  { text: 'Home', to: '/' },
  { text: 'Projects' },
]
</script>

<template>
  <HeaderPage
    title="Our Projects"
    subtitle="Building communities"
    :breadcrumbs="breadcrumbs"
    imageWebp="/img/plan.webp"
    imagePng="/img/plan.png"
  />
  <ProjectsSection />
</template>
