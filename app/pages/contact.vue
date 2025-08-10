<script setup lang="ts">
import imageUrl from '~/assets/img/plan.webp?width=600;1200&format=webp&quality=70'

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
    :imageUrl="imageUrl[0]"
  />
  <InfoSection />
  <ContactSection />
</template>
