<script setup lang="ts">
import imageUrl from '~/assets/img/plan.webp?width=600;1200&format=webp&quality=70'

import HeaderPage from '@/components/HeaderPage.vue'
import ServicesSectionPage from '~/components/section/ServicesSectionPage.vue'
import StatsSection from '~/components/section/StatsSection.vue'
import AboutSectionService from '~/components/section/AboutSectionService.vue'
import AboutSectionServiceRevert from '~/components/section/AboutSectionServiceRevert.vue'
import ContactSectionService from '~/components/section/ContactSectionService.vue'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const breadcrumbs = [
  { text: t('breadcrumbs.home'), to: '/' },
  { text: t('breadcrumbs.services') },
]
</script>

<template>
  <HeaderPage
    :title="t('servicesPage.title')"
    :subtitle="t('servicesPage.subtitle')"
    :breadcrumbs="breadcrumbs"
    :imageUrl="imageUrl[0]"
  />
  <ServicesSectionPage />
  <StatsSection />
  <AboutSectionService />
  <AboutSectionServiceRevert />
  <ContactSectionService />
</template>
