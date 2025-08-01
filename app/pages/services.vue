<script setup lang="ts">
import HeaderPage from '@/components/HeaderPage.vue'
import ServicesSectionPage from '@/components/ServicesSectionPage.vue'
import StatsSection from '@/components/StatsSection.vue'
import AboutSectionService from '@/components/AboutSectionService.vue'
import AboutSectionServiceRevert from '@/components/AboutSectionServiceRevert.vue'
import ContactSectionService from '@/components/ContactSectionService.vue'
</script>

<template>
  <HeaderPage
    title="Our Services"
    subtitle="What We Offer"
    current="Services"
    imageWebp="/img/plan.webp"
    imagePng="/img/plan.png"
  />
  <ServicesSectionPage />
  <StatsSection />
  <AboutSectionService />
  <AboutSectionServiceRevert />
  <ContactSectionService />
</template>
