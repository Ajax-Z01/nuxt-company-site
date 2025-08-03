<script setup lang="ts">
import HeaderPage from '@/components/HeaderPage.vue'
import InfoSection from '~/components/section/InfoSection.vue'
import ContactSection from '~/components/section/ContactSectionService.vue'

const breadcrumbs = [
  { text: 'Home', to: '/' },
  { text: 'Contact' },
]
</script>

<template>
  <HeaderPage
    title="Contact Us"
    subtitle="Get in Touch"
    :breadcrumbs="breadcrumbs"
    imageWebp="/img/plan.webp"
    imagePng="/img/plan.png"
  />
  <InfoSection />
  <ContactSection />
</template>
