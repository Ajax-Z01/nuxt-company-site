<script setup lang="ts">
import HeaderPage from '@/components/HeaderPage.vue'
import TeamSection from '@/components/section/TeamSection.vue'

const breadcrumbs = [
  { text: 'Home', to: '/' },
  { text: 'Team' },
]
</script>

<template>
  <HeaderPage
    title="Meet Our Team"
    subtitle="The People Behind Our Success"
    :breadcrumbs="breadcrumbs"
    imageWebp="/img/plan.webp"
    imagePng="/img/plan.png"
  />
  
  <TeamSection />
</template>
