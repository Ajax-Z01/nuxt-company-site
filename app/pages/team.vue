<script setup lang="ts">
import imageUrl from '~/assets/img/plan.webp?width=600;1200&format=webp&quality=70'

import HeaderPage from '@/components/HeaderPage.vue'
import TeamSection from '@/components/section/TeamSection.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const breadcrumbs = [
  { text: t('breadcrumbs.home'), to: '/' },
  { text: t('breadcrumbs.team') },
]
</script>

<template>
  <HeaderPage
    :title="t('teamPage.title')"
    :subtitle="t('teamPage.subtitle')"
    :breadcrumbs="breadcrumbs"
    :imageUrl="imageUrl[0]"
  />
  
  <TeamSection />
</template>
