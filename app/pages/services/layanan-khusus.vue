<script setup lang="ts">
import imageUrl from '~/assets/img/tabs/04.webp?width=600;1200&format=webp&quality=70'

import HeaderPage from '@/components/HeaderPage.vue'
import TabsSection from '~/components/section/TabsSection.vue'
import ProcessSection from '~/components/section/ProcessSection.vue'
import ServicesSectionPage from '~/components/section/ServicesSectionPage.vue'
import ReviewsSection from '~/components/section/ReviewsSection.vue'
import FaqSection from '~/components/section/FaqSection.vue'

const tabs = [
  {
    label: 'Konsultasi Ahli',
    image: '/img/tabs/04.webp',
    duration: '1 hari',
    price: '$22 per jam',
    content: [
      'Dapatkan saran ahli yang disesuaikan dengan kebutuhan proyek spesifik Anda dari para spesialis berpengalaman kami.',
      'Kami menganalisis kebutuhan proyek secara menyeluruh untuk memberikan rekomendasi terbaik.',
    ],
  },
  {
    label: 'Solusi yang Disesuaikan',
    image: '/img/tabs/04.webp',
    duration: '2 hari',
    price: '$25 per jam',
    content: [
      'Kami merancang dan mengimplementasikan solusi khusus untuk mengatasi tantangan unik Anda.',
      'Solusi kami fokus pada inovasi, efisiensi, dan skalabilitas.',
    ],
  },
  {
    label: 'Pendekatan Inovatif',
    image: '/img/tabs/04.webp',
    duration: '1,5 hari',
    price: '$28 per jam',
    content: [
      'Memanfaatkan teknologi mutakhir dan metode kreatif untuk mengoptimalkan proyek Anda.',
      'Kami terus mengeksplorasi metodologi baru agar proyek Anda tetap unggul di depan.',
    ],
  },
]

const breadcrumbs = [
  { text: 'Beranda', to: '/' },
  { text: 'Layanan', to: '/services' },
  { text: 'Layanan Khusus' },
]
</script>

<template>
  <HeaderPage
    title="Layanan Khusus"
    subtitle="Keahlian yang Disesuaikan untuk Tantangan Unik"
    :breadcrumbs="breadcrumbs"
    :imageUrl="imageUrl[0]"
  />

  <TabsSection
    subtitle="Penawaran Layanan Khusus"
    title="Layanan Khusus"
    description="Menyediakan layanan khusus yang disesuaikan untuk memenuhi kebutuhan dan tantangan proyek yang unik."
    :tabs="tabs"
  />

  <ProcessSection />

  <ServicesSectionPage />

  <ReviewsSection />

  <FaqSection />
</template>
