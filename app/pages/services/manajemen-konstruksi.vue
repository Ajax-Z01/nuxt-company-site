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
    label: 'Manajemen Proyek',
    image: '/img/tabs/01.webp',
    duration: '4 hari',
    price: '$35 per jam',
    content: [
      'Perencanaan, koordinasi, dan pengendalian proyek konstruksi secara menyeluruh dari awal hingga akhir.',
      'Menjamin penyelesaian tepat waktu, pengendalian anggaran, dan jaminan kualitas.',
    ],
  },
  {
    label: 'Pengawasan Lapangan',
    image: '/img/tabs/02.webp',
    duration: '3 hari',
    price: '$30 per jam',
    content: [
      'Manajemen di lokasi untuk mengawasi kegiatan konstruksi, kepatuhan keselamatan, dan pelacakan kemajuan.',
      'Memfasilitasi komunikasi antara pemangku kepentingan dan kontraktor.',
    ],
  },
  {
    label: 'Pengendalian Kualitas',
    image: '/img/tabs/03.webp',
    duration: '2 hari',
    price: '$28 per jam',
    content: [
      'Inspeksi dan pengujian material serta kualitas pengerjaan konstruksi agar memenuhi standar proyek.',
      'Pelaksanaan tindakan korektif dan dokumentasi.',
    ],
  },
]

const breadcrumbs = [
  { text: 'Beranda', to: '/' },
  { text: 'Layanan', to: '/services' },
  { text: 'Layanan Konstruksi' },
]
</script>

<template>
  <HeaderPage
    title="Layanan Konstruksi"
    subtitle="Membangun Keunggulan dari Dasar"
    :breadcrumbs="breadcrumbs"
    :imageUrl="imageUrl[0]"
  />

  <TabsSection
    subtitle="Penawaran Layanan Konstruksi"
    title="Layanan Konstruksi"
    description="Layanan konstruksi profesional yang menjamin kualitas, keselamatan, dan efisiensi."
    :tabs="tabs"
  />

  <ProcessSection />

  <ServicesSectionPage />

  <ReviewsSection />

  <FaqSection />
</template>
