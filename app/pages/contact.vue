<script setup lang="ts">
import imageUrl from '~/assets/img/plan.webp?width=600;1200&format=webp&quality=70'

import HeaderPage from '@/components/HeaderPage.vue'
import InfoSection from '~/components/section/InfoSection.vue'
import ContactSection from '~/components/section/ContactSectionService.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const breadcrumbs = [
  { text: t('breadcrumbs.home'), to: '/' },
  { text: t('breadcrumbs.contact') },
]
</script>

<template>
  <HeaderPage
    :title="t('contactPage.title')"
    :subtitle="t('contactPage.subtitle')"
    :breadcrumbs="breadcrumbs"
    :imageUrl="imageUrl[0]"
  />
  <InfoSection />
  <ContactSection />
</template>
