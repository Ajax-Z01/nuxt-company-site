<script setup lang="ts">
import HeaderPage from '@/components/HeaderPage.vue'
import InfoSection from '@/components/InfoSection.vue'
import ContactSection from '~/components/ContactSectionService.vue'

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
