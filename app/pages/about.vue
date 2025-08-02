<script setup lang="ts">
import HeaderPage from '~/components/HeaderPage.vue'
import AboutSectionPage from '~/components/AboutSectionPage.vue'
import QuoteSection from '~/components/QuoteSection.vue'
import ServicesSectionAbout from '~/components/ServicesSectionAbout.vue';
import GalleryPresentation from '~/components/GalleryPresentation.vue';
import FeaturesSection from '~/components/FeaturesSection.vue';
import ReviewsSection from '~/components/ReviewsSection.vue';

const breadcrumbs = [
  { text: 'Home', to: '/' },
  { text: 'About' },
]
</script>

<template>
  <HeaderPage
    title="About Us"
    subtitle="Company Overview"
    :breadcrumbs="breadcrumbs"
    imageWebp="/img/plan.webp"
    imagePng="/img/plan.png"
  />
  <AboutSectionPage />
  <QuoteSection />
  <ServicesSectionAbout />
  <GalleryPresentation />
  <FeaturesSection />
  <ReviewsSection />
</template>
