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
    label: 'Analisis Kimia',
    image: '/img/tabs/01.webp',
    duration: '3 hari',
    price: '$40 per jam',
    content: [
      'Layanan pengujian kimia dan pengendalian kualitas yang komprehensif untuk bahan Anda.',
      'Menggunakan peralatan laboratorium canggih untuk hasil yang akurat.',
    ],
  },
  {
    label: 'Pengujian Metalurgi',
    image: '/img/tabs/02.webp',
    duration: '2,5 hari',
    price: '$38 per jam',
    content: [
      'Analisis mendalam sifat dan perilaku logam di bawah berbagai kondisi.',
      'Layanan analisis kegagalan dan sertifikasi material.',
    ],
  },
  {
    label: 'Peningkatan Proses',
    image: '/img/tabs/03.webp',
    duration: '3,5 hari',
    price: '$42 per jam',
    content: [
      'Optimalisasi proses kimia dan metalurgi untuk efisiensi dan keselamatan.',
      'Implementasi praktik terbaik dan teknologi inovatif.',
    ],
  },
]

const breadcrumbs = [
  { text: 'Beranda', to: '/' },
  { text: 'Layanan', to: '/services' },
  { text: 'Kimia dan Metalurgi' },
]
</script>

<template>
  <HeaderPage
    title="Kimia dan Metalurgi"
    subtitle="Presisi dan Inovasi dalam Ilmu Material"
    :breadcrumbs="breadcrumbs"
    :imageUrl="imageUrl[0]"
  />

  <TabsSection
    subtitle="Layanan Kimia dan Metalurgi"
    title="Kimia dan Metalurgi"
    description="Layanan canggih dalam analisis kimia dan pengujian metalurgi yang disesuaikan untuk industri Anda."
    :tabs="tabs"
  />

  <ProcessSection />

  <ServicesSectionPage />

  <ReviewsSection />

  <FaqSection />
</template>
