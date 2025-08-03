<script setup lang="ts">
import HeaderPage from '@/components/HeaderPage.vue'
import TabsSection from '~/components/section/TabsSection.vue'
import ProcessSection from '~/components/section/ProcessSection.vue'
import ServicesSectionPage from '~/components/section/ServicesSectionPage.vue'
import ReviewsSection from '~/components/section/ReviewsSection.vue'
import FaqSection from '~/components/section/FaqSection.vue'

const tabs = [
  {
    label: 'Process Optimization',
    image: '/img/tabs/01.webp',
    duration: '2 days',
    price: '$15 per hour',
    content: [
      'We assess and improve existing industrial processes to enhance efficiency, reduce costs, and maintain product quality.',
      'Using simulation and modeling, our team provides actionable insights tailored to your operation.',
    ],
  },
  {
    label: 'Technology Integration',
    image: '/img/tabs/02.webp',
    duration: '1.5 days',
    price: '$18 per hour',
    content: [
      'We help integrate cutting-edge technology into your production lines with minimal disruption.',
      'From control systems to IoT sensors, our team handles the full integration lifecycle.',
    ],
  },
  {
    label: 'Process Safety Management',
    image: '/img/tabs/03.webp',
    duration: '3 days',
    price: '$20 per hour',
    content: [
      'Comprehensive audits, risk analysis, and hazard identification procedures to ensure safety.',
      'We implement standards like HAZOP, SIL, and OSHA regulations with rigorous documentation.',
    ],
  },
]

const breadcrumbs = [
  { text: 'Home', to: '/' },
  { text: 'Services', to: '/services' },
  { text: 'Process Engineering' },
]
</script>

<template>
  <HeaderPage
    title="Process Engineering"
    subtitle="Expertise in Engineering Solutions"
    :breadcrumbs="breadcrumbs"
    imageWebp="/img/tabs/01.webp"
    imagePng="/img/tabs/01.png"
  />

  <TabsSection
    subtitle="Process Engineering Services"
    title="Process Engineering"
    description="Explore our full suite of process engineering capabilities, tailored to meet your industry’s needs."
    :tabs="tabs"
  />

  <ProcessSection />

  <ServicesSectionPage />

  <ReviewsSection />

  <FaqSection />
</template>
