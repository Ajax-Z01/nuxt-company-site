<script setup lang="ts">
import HeaderPage from '~/components/HeaderPage.vue'
import AboutSectionPage from '~/components/AboutSectionPage.vue'
import QuoteSection from '~/components/QuoteSection.vue'
import ServicesSection from '~/components/ServicesSection.vue';
import GalleryPresentation from '~/components/GalleryPresentation.vue';
import FeaturesSection from '~/components/FeaturesSection.vue';
import ReviewsSection from '~/components/ReviewsSection.vue';
</script>

<template>
  <HeaderPage
    title="About Us"
    subtitle="Company Overview"
    current="About"
    imageWebp="/img/plan.webp"
    imagePng="/img/plan.png"
  />
  <AboutSectionPage />
  <QuoteSection />
  <ServicesSection />
  <GalleryPresentation />
  <FeaturesSection />
  <ReviewsSection />
</template>
