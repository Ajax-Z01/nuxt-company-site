<script setup lang="ts">
import HeaderPage from '~/components/HeaderPage.vue'
import AboutSectionPage from '~/components/section/AboutSectionPage.vue'
import QuoteSection from '~/components/section/QuoteSection.vue'
import ServicesSectionAbout from '~/components/section/ServicesSectionAbout.vue';
import GalleryPresentation from '~/components/GalleryPresentation.vue';
import FeaturesSection from '~/components/section/FeaturesSection.vue';
import ReviewsSection from '~/components/section/ReviewsSection.vue';

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
