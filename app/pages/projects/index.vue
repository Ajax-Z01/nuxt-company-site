<script setup lang="ts">
import imageUrl from '~/assets/img/plan.webp?width=600;1200&format=webp&quality=70'

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
    :imageUrl="imageUrl[0]"
  />
  <ProjectsSection />
</template>
