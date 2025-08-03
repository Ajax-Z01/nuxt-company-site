<script setup lang="ts">
import HeaderPage from '@/components/HeaderPage.vue'
import TabsSection from '~/components/section/TabsSection.vue'
import ProcessSection from '~/components/section/ProcessSection.vue'
import ServicesSectionPage from '~/components/section/ServicesSectionPage.vue'
import ReviewsSection from '~/components/section/ReviewsSection.vue'
import FaqSection from '~/components/section/FaqSection.vue'

const tabs = [
  {
    label: 'Project Management',
    image: '/img/tabs/01.webp',
    duration: '4 days',
    price: '$35 per hour',
    content: [
      'Comprehensive planning, coordination, and control of construction projects from start to finish.',
      'Ensuring timely delivery, budget control, and quality assurance.',
    ],
  },
  {
    label: 'Site Supervision',
    image: '/img/tabs/02.webp',
    duration: '3 days',
    price: '$30 per hour',
    content: [
      'On-site management to oversee construction activities, safety compliance, and progress tracking.',
      'Facilitating communication between stakeholders and contractors.',
    ],
  },
  {
    label: 'Quality Control',
    image: '/img/tabs/03.webp',
    duration: '2 days',
    price: '$28 per hour',
    content: [
      'Inspection and testing of construction materials and workmanship to meet project standards.',
      'Implementation of corrective actions and documentation.',
    ],
  },
]

const breadcrumbs = [
  { text: 'Home', to: '/' },
  { text: 'Services', to: '/services' },
  { text: 'Construction Services' },
]
</script>

<template>
  <HeaderPage
    title="Construction Services"
    subtitle="Building Excellence from Ground Up"
    :breadcrumbs="breadcrumbs"
    imageWebp="/img/tabs/01.webp"
    imagePng="/img/tabs/01.png"
  />

  <TabsSection
    subtitle="Construction Service Offerings"
    title="Construction Services"
    description="Professional construction services ensuring quality, safety, and efficiency."
    :tabs="tabs"
  />

  <ProcessSection />

  <ServicesSectionPage />

  <ReviewsSection />

  <FaqSection />
</template>
