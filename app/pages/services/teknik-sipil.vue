<script setup lang="ts">
import imageUrl from '~/assets/img/tabs/01.webp?width=600;1200&format=webp&quality=70'

import HeaderPage from '@/components/HeaderPage.vue'
import TabsSection from '~/components/section/TabsSection.vue'
import ProcessSection from '~/components/section/ProcessSection.vue'
import ServicesSectionPage from '~/components/section/ServicesSectionPage.vue'
import ReviewsSection from '~/components/section/ReviewsSection.vue'
import FaqSection from '~/components/section/FaqSection.vue'

const tabs = [
  {
    label: 'Desain Struktur',
    image: '/img/tabs/01.webp',
    duration: '4 hari',
    price: '$32 per jam',
    content: [
      'Desain struktur yang aman dan efisien sesuai kebutuhan proyek Anda.',
      'Menggunakan perangkat lunak modern untuk analisis dan simulasi yang akurat.',
    ],
  },
  {
    label: 'Pengembangan Lokasi',
    image: '/img/tabs/02.webp',
    duration: '3 hari',
    price: '$30 per jam',
    content: [
      'Perencanaan dan persiapan lokasi konstruksi untuk memastikan pelaksanaan proyek berjalan lancar.',
      'Koordinasi kegiatan pengurukan, drainase, dan pemasangan utilitas.',
    ],
  },
  {
    label: 'Teknik Lingkungan',
    image: '/img/tabs/03.webp',
    duration: '2,5 hari',
    price: '$28 per jam',
    content: [
      'Penilaian dan mitigasi dampak lingkungan.',
      'Penerapan praktik rekayasa berkelanjutan dan kepatuhan terhadap peraturan.',
    ],
  },
]

const breadcrumbs = [
  { text: 'Beranda', to: '/' },
  { text: 'Layanan', to: '/services' },
  { text: 'Teknik Sipil' },
]
</script>

<template>
  <HeaderPage
    title="Teknik Sipil"
    subtitle="Solusi Sipil Inovatif dan Berkelanjutan"
    :breadcrumbs="breadcrumbs"
    :imageUrl="imageUrl[0]"
  />

  <TabsSection
    subtitle="Layanan Teknik Sipil"
    title="Teknik Sipil"
    description="Layanan teknik sipil yang komprehensif untuk memenuhi kebutuhan infrastruktur Anda."
    :tabs="tabs"
  />
  
  <ProcessSection />

  <ServicesSectionPage />

  <ReviewsSection />

  <FaqSection />
</template>
