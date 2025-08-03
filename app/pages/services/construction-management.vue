<script setup lang="ts">
import HeaderPage from '@/components/HeaderPage.vue'
import TabsSection from '~/components/section/TabsSection.vue'
import ProcessSection from '~/components/section/ProcessSection.vue'
import ServicesSectionPage from '~/components/section/ServicesSectionPage.vue'
import ReviewsSection from '~/components/section/ReviewsSection.vue'
import FaqSection from '~/components/section/FaqSection.vue'

const tabs = [
  {
    label: 'Planning & Scheduling',
    image: '/img/tabs/01.webp',
    duration: '3 days',
    price: '$38 per hour',
    content: [
      'Detailed project planning and timeline scheduling to ensure efficient resource allocation.',
      'Utilizing advanced project management tools to keep your project on track.',
    ],
  },
  {
    label: 'Cost Control',
    image: '/img/tabs/02.webp',
    duration: '2.5 days',
    price: '$35 per hour',
    content: [
      'Monitoring and managing budgets to avoid cost overruns.',
      'Regular financial reporting and forecasting for informed decision-making.',
    ],
  },
  {
    label: 'Risk Management',
    image: '/img/tabs/03.webp',
    duration: '2 days',
    price: '$40 per hour',
    content: [
      'Identifying potential risks and implementing mitigation strategies.',
      'Ensuring compliance with safety and regulatory standards throughout the project lifecycle.',
    ],
  },
]

const breadcrumbs = [
  { text: 'Home', to: '/' },
  { text: 'Services', to: '/services' },
  { text: 'Construction Management' },
]
</script>

<template>
  <HeaderPage
    title="Construction Management"
    subtitle="Efficient, Safe, and Cost-Effective Project Delivery"
    :breadcrumbs="breadcrumbs"
    imageWebp="/img/tabs/01.webp"
    imagePng="/img/tabs/01.png"
  />

  <TabsSection
    subtitle="Construction Management Services"
    title="Construction Management"
    description="Professional management services to ensure your construction projects are completed successfully."
    :tabs="tabs"
  />

  <ProcessSection />

  <ServicesSectionPage />

  <ReviewsSection />

  <FaqSection />
</template>
