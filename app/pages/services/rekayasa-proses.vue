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
    label: 'Optimasi Proses',
    image: '/img/tabs/01.webp',
    duration: '2 hari',
    price: '$15 per jam',
    content: [
      'Kami menilai dan meningkatkan proses industri yang ada untuk meningkatkan efisiensi, mengurangi biaya, dan menjaga kualitas produk.',
      'Dengan menggunakan simulasi dan pemodelan, tim kami memberikan wawasan yang dapat diterapkan sesuai dengan operasi Anda.',
    ],
  },
  {
    label: 'Integrasi Teknologi',
    image: '/img/tabs/02.webp',
    duration: '1,5 hari',
    price: '$18 per jam',
    content: [
      'Kami membantu mengintegrasikan teknologi mutakhir ke dalam lini produksi Anda dengan gangguan minimal.',
      'Mulai dari sistem kontrol hingga sensor IoT, tim kami menangani seluruh siklus integrasi.',
    ],
  },
  {
    label: 'Manajemen Keamanan Proses',
    image: '/img/tabs/03.webp',
    duration: '3 hari',
    price: '$20 per jam',
    content: [
      'Audit komprehensif, analisis risiko, dan prosedur identifikasi bahaya untuk memastikan keselamatan.',
      'Kami menerapkan standar seperti HAZOP, SIL, dan regulasi OSHA dengan dokumentasi yang ketat.',
    ],
  },
]

const breadcrumbs = [
  { text: 'Beranda', to: '/' },
  { text: 'Layanan', to: '/services' },
  { text: 'Rekayasa Proses' },
]
</script>

<template>
  <HeaderPage
    title="Rekayasa Proses"
    subtitle="Keahlian dalam Solusi Teknik"
    :breadcrumbs="breadcrumbs"
    :imageUrl="imageUrl[0]"
  />

  <TabsSection
    subtitle="Layanan Rekayasa Proses"
    title="Rekayasa Proses"
    description="Jelajahi rangkaian lengkap kemampuan rekayasa proses kami, disesuaikan untuk memenuhi kebutuhan industri Anda."
    :tabs="tabs"
  />

  <ProcessSection />

  <ServicesSectionPage />

  <ReviewsSection />

  <FaqSection />
</template>
