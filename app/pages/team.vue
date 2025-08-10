<script setup lang="ts">
import imageUrl from '~/assets/img/plan.webp?width=600;1200&format=webp&quality=70'

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
    :imageUrl="imageUrl[0]"
  />
  
  <TeamSection />
</template>
