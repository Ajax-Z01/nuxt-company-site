<script setup lang="ts">
import HeaderPage from '~/components/HeaderPage.vue'
import AboutProjectSection from '~/components/section/AboutProjectSection.vue'
import GalleryPresentation from '@/components/GalleryPresentation.vue'
import FeedbackSection from '~/components/section/FeedbackSection.vue'
import type { ProjectContactInfo, ProjectInfoTableItem, ProjectSection } from '@/types/Project'

const project = {
  title: 'Reconstruction of Old Factory Building',
  location: 'Schoen Ramp Suite 607 Borerton',
  description: 'A comprehensive reconstruction initiative to modernize an aging industrial facility and ensure operational excellence.',
  imageWebp: '/img/projects/06.webp',
  imageJpg: '/img/projects/06.jpg',
  details: [
    'Demolition and structural reinforcement of legacy sections.',
    'Implementation of modern safety and energy standards.',
    'Rebuilding tailored to contemporary industrial workflows.',
  ],
}

const aboutSections: ProjectSection[] = [
  {
    header: 'Description',
    text: project.description,
  },
  {
    header: 'Modernizing Legacy Infrastructure',
    text: 'Our approach focuses on revitalizing old structures while integrating modern technologies and sustainable practices.',
    checklist: [
      'Careful evaluation of existing structural integrity.',
      'Upgrading systems to current code compliance.',
      'Seamless integration with ongoing operations.',
    ],
  },
  {
    header: 'Project Details',
    text: 'This project represents a transformation of outdated infrastructure into a robust, future-ready facility.',
    checklist: project.details,
  },
  {
    header: 'Smart Engineering for Longevity',
    text: 'Focused on long-term durability and cost-efficient maintenance, our engineering approach balanced modern methods with proven techniques.',
  },
]

const infoTable: ProjectInfoTableItem[] = [
  { property: 'Location', value: project.location },
  { property: 'Client', value: 'BoreTech Manufacturing' },
  { property: 'Completion Date', value: 'August 2022' },
  { property: 'Budget', value: '$3.1 million' },
  { property: 'Area', value: '20,000 sq ft' },
  { property: 'Type', value: 'Industrial Renovation' },
]

const contactInfo: ProjectContactInfo = {
  address: '2047 Cyrus Viaduct East Jadynchester',
  emails: ['info@construct.com', 'support@construct.com'],
  phones: ['1 - 313 - 645 - 3395', '1 - 469 - 970 - 2609'],
  socials: [
    { name: 'facebook', link: '#', label: 'Facebook' },
    { name: 'instagram', link: '#', label: 'Instagram' },
    { name: 'twitter', link: '#', label: 'Twitter' },
    { name: 'whatsapp', link: '#', label: 'WhatsApp' },
  ],
}

const breadcrumbs = [
  { text: 'Home', to: '/' },
  { text: 'Projects', to: '/projects' },
  { text: project.title },
]
</script>

<template>
  <HeaderPage
    title="Old Factory Reconstruction"
    subtitle="Reviving Industrial Strength"
    :breadcrumbs="breadcrumbs"
    imageWebp="/img/projects/06.webp"
    imagePng="/img/projects/06.jpg"
  />
  <AboutProjectSection
    subtitle="Reconstruction Project"
    :title="project.title"
    description="Spotlight on our detailed project approach and execution."
    :imageWebp="project.imageWebp"
    :imageJpg="project.imageJpg"
    :aboutSections="aboutSections"
    :infoTable="infoTable"
    :contactInfo="contactInfo"
  />
  <GalleryPresentation />
  <FeedbackSection />
</template>