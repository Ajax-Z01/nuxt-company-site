<script setup lang="ts">
import HeaderPage from '@/components/HeaderPage.vue'
import TabsSection from '@/components/TabsSection.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import ServicesSectionPage from '@/components/ServicesSectionPage.vue'
import ReviewsSection from '@/components/ReviewsSection.vue'
import FaqSection from '@/components/FaqSection.vue'

const tabs = [
  {
    label: 'Structural Design',
    image: '/img/tabs/01.webp',
    duration: '4 days',
    price: '$32 per hour',
    content: [
      'Design of safe and efficient structures tailored to your project requirements.',
      'Utilizing modern software for precise analysis and simulation.',
    ],
  },
  {
    label: 'Site Development',
    image: '/img/tabs/02.webp',
    duration: '3 days',
    price: '$30 per hour',
    content: [
      'Planning and preparation of construction sites to ensure smooth project execution.',
      'Coordination of grading, drainage, and utility installation activities.',
    ],
  },
  {
    label: 'Environmental Engineering',
    image: '/img/tabs/03.webp',
    duration: '2.5 days',
    price: '$28 per hour',
    content: [
      'Assessment and mitigation of environmental impacts.',
      'Implementation of sustainable engineering practices and compliance with regulations.',
    ],
  },
]

const breadcrumbs = [
  { text: 'Home', to: '/' },
  { text: 'Services', to: '/services' },
  { text: 'Civil Engineering' },
]
</script>

<template>
  <HeaderPage
    title="Civil Engineering"
    subtitle="Innovative and Sustainable Civil Solutions"
    :breadcrumbs="breadcrumbs"
    imageWebp="/img/tabs/01.webp"
    imagePng="/img/tabs/01.png"
  />

  <TabsSection
    subtitle="Civil Engineering Services"
    title="Civil Engineering"
    description="Comprehensive civil engineering services to meet your infrastructure needs."
    :tabs="tabs"
  />

  <ProcessSection />

  <ServicesSectionPage />

  <ReviewsSection />

  <FaqSection />
</template>
