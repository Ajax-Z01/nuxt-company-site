<script setup lang="ts">
import HeaderPage from '@/components/HeaderPage.vue'
import TabsSection from '~/components/section/TabsSection.vue'
import ProcessSection from '~/components/section/ProcessSection.vue'
import ServicesSectionPage from '~/components/section/ServicesSectionPage.vue'
import ReviewsSection from '~/components/section/ReviewsSection.vue'
import FaqSection from '~/components/section/FaqSection.vue'

const tabs = [
  {
    label: 'Power Systems Design',
    image: '/img/tabs/05.webp',
    duration: '3 days',
    price: '$30 per hour',
    content: [
      'Design and analysis of electrical power generation, transmission, and distribution systems.',
      'Ensuring reliability and efficiency of power supply for industrial and commercial clients.',
    ],
  },
  {
    label: 'Control Systems',
    image: '/img/tabs/05.webp',
    duration: '2 days',
    price: '$28 per hour',
    content: [
      'Development and implementation of control strategies for automated processes.',
      'Integration of PLCs, SCADA systems, and real-time monitoring solutions.',
    ],
  },
  {
    label: 'Electrical Maintenance',
    image: '/img/tabs/05.webp',
    duration: '1.5 days',
    price: '$25 per hour',
    content: [
      'Routine and preventive maintenance of electrical equipment and infrastructure.',
      'Troubleshooting and rapid repair to minimize downtime and maintain safety standards.',
    ],
  },
]

const breadcrumbs = [
  { text: 'Home', to: '/' },
  { text: 'Services', to: '/services' },
  { text: 'Electrical Engineering' },
]
</script>

<template>
  <HeaderPage
    title="Electrical Engineering"
    subtitle="Innovative Electrical Solutions"
    :breadcrumbs="breadcrumbs"
    imageWebp="/img/tabs/05.webp"
    imagePng="/img/tabs/05.png"
  />

  <TabsSection
    subtitle="Electrical Engineering Services"
    title="Electrical Engineering"
    description="Comprehensive electrical engineering services tailored to your project needs."
    :tabs="tabs"
  />

  <ProcessSection />

  <ServicesSectionPage />

  <ReviewsSection />

  <FaqSection />
</template>
