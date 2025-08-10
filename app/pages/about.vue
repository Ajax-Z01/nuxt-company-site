<script setup lang="ts">
import imageUrl from '~/assets/img/plan.webp?width=600;1200&format=webp&quality=70'

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
    :imageUrl="imageUrl[0]"
  />
  <AboutSectionPage />
  <QuoteSection />
  <ServicesSectionAbout />
  <GalleryPresentation />
  <FeaturesSection />
  <ReviewsSection />
</template>
