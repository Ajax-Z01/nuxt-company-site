<script setup lang="ts">
import HeaderPage from '@/components/HeaderPage.vue'
import TabsSection from '@/components/TabsSection.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import ServicesSectionPage from '@/components/ServicesSectionPage.vue'
import ReviewsSection from '@/components/ReviewsSection.vue'
import FaqSection from '@/components/FaqSection.vue'

const tabs = [
  {
    label: 'Chemical Analysis',
    image: '/img/tabs/01.webp',
    duration: '3 days',
    price: '$40 per hour',
    content: [
      'Comprehensive chemical testing and quality control services for your materials.',
      'Utilizing advanced laboratory equipment for precise results.',
    ],
  },
  {
    label: 'Metallurgical Testing',
    image: '/img/tabs/02.webp',
    duration: '2.5 days',
    price: '$38 per hour',
    content: [
      'In-depth analysis of metal properties and behavior under different conditions.',
      'Failure analysis and material certification services.',
    ],
  },
  {
    label: 'Process Improvement',
    image: '/img/tabs/03.webp',
    duration: '3.5 days',
    price: '$42 per hour',
    content: [
      'Optimizing chemical and metallurgical processes for efficiency and safety.',
      'Implementation of best practices and innovative technologies.',
    ],
  },
]

const breadcrumbs = [
  { text: 'Home', to: '/' },
  { text: 'Services', to: '/services' },
  { text: 'Chemistry and Metallurgy' },
]
</script>

<template>
  <HeaderPage
    title="Chemistry and Metallurgy"
    subtitle="Precision and Innovation in Material Sciences"
    :breadcrumbs="breadcrumbs"
    imageWebp="/img/tabs/01.webp"
    imagePng="/img/tabs/01.png"
  />

  <TabsSection
    subtitle="Chemistry and Metallurgy Services"
    title="Chemistry and Metallurgy"
    description="Advanced services in chemical analysis and metallurgical testing tailored for your industry."
    :tabs="tabs"
  />

  <ProcessSection />

  <ServicesSectionPage />

  <ReviewsSection />

  <FaqSection />
</template>
