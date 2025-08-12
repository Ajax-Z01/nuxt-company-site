<script setup lang="ts">
import imageUrl from '~/assets/img/plan.webp?width=600;1200&format=webp&quality=70'
import HeaderPage from '~/components/HeaderPage.vue'
import ProjectsSection from '~/components/section/ProjectsSection.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const breadcrumbs = [
  { text: t('breadcrumbs.home'), to: '/' },
  { text: t('breadcrumbs.projects') },
]
</script>

<template>
  <HeaderPage
    :title="t('projectsPage.title')"
    :subtitle="t('projectsPage.subtitle')"
    :breadcrumbs="breadcrumbs"
    :imageUrl="imageUrl[0]"
  />
  <ProjectsSection />
</template>
