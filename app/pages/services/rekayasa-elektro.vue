<script setup lang="ts">
import imageUrl from '~/assets/img/tabs/05.webp?width=600;1200&format=webp&quality=70'

import HeaderPage from '@/components/HeaderPage.vue'
import TabsSection from '~/components/section/TabsSection.vue'
import ProcessSection from '~/components/section/ProcessSection.vue'
import ServicesSectionPage from '~/components/section/ServicesSectionPage.vue'
import ReviewsSection from '~/components/section/ReviewsSection.vue'
import FaqSection from '~/components/section/FaqSection.vue'

const tabs = [
  {
    label: 'Desain Sistem Tenaga Listrik',
    image: '/img/tabs/05.webp',
    duration: '3 hari',
    price: '$30 per jam',
    content: [
      'Desain dan analisis sistem pembangkit, transmisi, dan distribusi tenaga listrik.',
      'Menjamin keandalan dan efisiensi pasokan listrik untuk klien industri dan komersial.',
    ],
  },
  {
    label: 'Sistem Kontrol',
    image: '/img/tabs/05.webp',
    duration: '2 hari',
    price: '$28 per jam',
    content: [
      'Pengembangan dan implementasi strategi kontrol untuk proses otomatisasi.',
      'Integrasi PLC, sistem SCADA, dan solusi monitoring real-time.',
    ],
  },
  {
    label: 'Pemeliharaan Listrik',
    image: '/img/tabs/05.webp',
    duration: '1,5 hari',
    price: '$25 per jam',
    content: [
      'Pemeliharaan rutin dan preventif peralatan serta infrastruktur listrik.',
      'Penanganan masalah dan perbaikan cepat untuk meminimalkan waktu henti dan menjaga standar keselamatan.',
    ],
  },
]

const breadcrumbs = [
  { text: 'Beranda', to: '/' },
  { text: 'Layanan', to: '/services' },
  { text: 'Rekayasa Elektro' },
]
</script>

<template>
  <HeaderPage
    title="Rekayasa Elektro"
    subtitle="Solusi Listrik Inovatif"
    :breadcrumbs="breadcrumbs"
    :imageUrl="imageUrl[0]"
  />

  <TabsSection
    subtitle="Layanan Rekayasa Elektro"
    title="Rekayasa Elektro"
    description="Layanan rekayasa listrik komprehensif yang disesuaikan dengan kebutuhan proyek Anda."
    :tabs="tabs"
  />

  <ProcessSection />

  <ServicesSectionPage />

  <ReviewsSection />

  <FaqSection />
</template>
