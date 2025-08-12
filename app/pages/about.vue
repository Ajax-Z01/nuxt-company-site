<script setup lang="ts">
import imageUrl from '~/assets/img/plan.webp?width=600;1200&format=webp&quality=70'

import HeaderPage from '~/components/HeaderPage.vue'
import AboutSectionPage from '~/components/section/AboutSectionPage.vue'
import QuoteSection from '~/components/section/QuoteSection.vue'
import ServicesSectionAbout from '~/components/section/ServicesSectionAbout.vue'
import GalleryPresentation from '~/components/GalleryPresentation.vue'
import FeaturesSection from '~/components/section/FeaturesSection.vue'
import ReviewsSection from '~/components/section/ReviewsSection.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const breadcrumbs = [
  { text: t('breadcrumbs.home'), to: '/' },
  { text: t('breadcrumbs.about') },
]
</script>

<template>
  <HeaderPage
    :title="t('aboutPage.title')"
    :subtitle="t('aboutPage.subtitle')"
    :breadcrumbs="breadcrumbs"
    :imageUrl="imageUrl[0]"
  />
  <AboutSectionPage />
  <QuoteSection />
  <ServicesSectionAbout />
  <GalleryPresentation />
  <FeaturesSection />
  <ReviewsSection />
</template>
