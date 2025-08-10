<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'
import { useProjects } from '~/composables/useProjects'

import HeaderPage from '~/components/HeaderPage.vue'
import AboutProjectSection from '~/components/section/AboutProjectSection.vue'
import GalleryPresentation from '~/components/GalleryPresentation.vue'
import FeedbackSection from '~/components/section/FeedbackSection.vue'

const route = useRoute()
const { fetchBySlug, project, loading, getImageUrl } = useProjects()

const slug = computed(() => route.params.slug as string)

onMounted(async () => {
  await fetchBySlug(slug.value)
})

const breadcrumbs = computed(() => {
  return [
    { text: 'Home', to: '/' },
    { text: 'Projects', to: '/projects' },
    { text: project.value?.title || '' },
  ]
})

const infoTable = computed(() => {
  const info = project.value?.info
  if (!info) return []

  const { id, ...rest } = info

  return Object.entries(rest).map(([property, value]) => ({
    property,
    value,
  }))
})

const projectDetails = computed(() => {
  return project.value?.details?.map(d => d.text) || []
})

const contactInfo = computed(() => {
  const contact = project.value?.info_contact
  if (!contact) return {
    address: '',
    emails: [],
    phones: [],
    socials: [],
  }

  return {
    address: contact.address || '',
    emails: contact.emails?.map(e => e.text) || [],
    phones: contact.phones?.map(p => p.text) || [],
    socials: contact.socials || [],
  }
})
</script>

<template>
  <div v-if="!loading && project">
    <HeaderPage
      :title="project.title"
      :subtitle="project.subtitle"
      :breadcrumbs="breadcrumbs"
      :imageUrl="getImageUrl(project.image)"
    />

    <AboutProjectSection
      :subtitle="project.subtitle"
      :title="project.title"
      :description="project.description"
      :imageWebp="getImageUrl(project.image)"
      :imageJpg="getImageUrl(project.image)"
      :aboutSections="project.sections"
      :infoTable="infoTable"
      :detailsList="projectDetails"
      :contactInfo="contactInfo"
    />

    <GalleryPresentation />
    <FeedbackSection />
  </div>

  <div v-else-if="loading" class="text-center py-20 text-gray-500">
    Loading...
  </div>

  <div v-else class="text-center py-20 text-red-500">
    Project not found.
  </div>
</template>
