<script setup lang="ts">
import HeaderPage from '@/components/HeaderPage.vue'
import TabsSection from '@/components/TabsSection.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import ServicesSectionPage from '@/components/ServicesSectionPage.vue'
import ReviewsSection from '@/components/ReviewsSection.vue'
import FaqSection from '@/components/FaqSection.vue'

const tabs = [
  {
    label: 'Expert Consultations',
    image: '/img/tabs/04.webp',
    duration: '1 day',
    price: '$22 per hour',
    content: [
      'Get expert advice tailored to your specific project needs from our seasoned specialists.',
      'We analyze project requirements thoroughly to provide the best recommendations.',
    ],
  },
  {
    label: 'Tailored Solutions',
    image: '/img/tabs/04.webp',
    duration: '2 days',
    price: '$25 per hour',
    content: [
      'We design and implement custom solutions to address your unique challenges.',
      'Our solutions focus on innovation, efficiency, and scalability.',
    ],
  },
  {
    label: 'Innovative Approaches',
    image: '/img/tabs/04.webp',
    duration: '1.5 days',
    price: '$28 per hour',
    content: [
      'Leveraging cutting-edge technology and creative methods to optimize your projects.',
      'We constantly explore new methodologies to keep your project ahead of the curve.',
    ],
  },
]

const breadcrumbs = [
  { text: 'Home', to: '/' },
  { text: 'Services', to: '/services' },
  { text: 'Specialty Services' },
]
</script>

<template>
  <HeaderPage
    title="Specialty Services"
    subtitle="Tailored Expertise for Unique Challenges"
    :breadcrumbs="breadcrumbs"
    imageWebp="/img/tabs/04.webp"
    imagePng="/img/tabs/04.png"
  />

  <TabsSection
    subtitle="Specialty Service Offerings"
    title="Specialty Services"
    description="Offering specialized services tailored to meet unique project requirements and challenges."
    :tabs="tabs"
  />

  <ProcessSection />

  <ServicesSectionPage />

  <ReviewsSection />

  <FaqSection />
</template>
