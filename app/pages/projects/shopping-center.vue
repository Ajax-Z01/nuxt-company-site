<script setup lang="ts">
import HeaderPage from '~/components/HeaderPage.vue'
import AboutProjectSection from '@/components/AboutProjectSection.vue'
import GalleryPresentation from '@/components/GalleryPresentation.vue'
import FeedbackSection from '@/components/FeedbackSection.vue'
import type { ProjectContactInfo, ProjectInfoTableItem, ProjectSection } from '@/types/Project'

const project = {
  title: 'Jazzy Elite Construction Shopping Center',
  location: '100 Sunrise Ct Hamel, Minnesota',
  description: 'Development of a modern shopping center with state-of-the-art facilities and commercial infrastructure.',
  imageWebp: '/img/projects/01.webp',
  imageJpg: '/img/projects/01.jpg',
  details: [
    'Construction of multiple retail units and open plaza design.',
    'Advanced electrical and HVAC systems implementation.',
    'Designed to support high foot traffic and commercial logistics.',
  ],
}

const aboutSections: ProjectSection[] = [
  {
    header: 'Description',
    text: project.description,
  },
  {
    header: 'Commercial Excellence',
    text: 'This shopping center project was initiated to redefine retail experience in suburban Minnesota. Designed with the latest trends in commercial architecture, it provides an engaging space for both tenants and visitors.',
  },
  {
    header: 'Project Details',
    checklist: project.details,
    text: 'Key objectives of this project included optimizing space for commercial viability, ensuring long-term durability, and maintaining energy efficiency standards.',
  },
  {
    header: 'Design Philosophy',
    text: 'The layout focuses on natural light, ease of navigation, and aesthetic appeal. Open plaza elements invite community interaction while interior units ensure tenant flexibility.',
  },
]

const infoTable: ProjectInfoTableItem[] = [
  { property: 'Location', value: project.location },
  { property: 'Client', value: 'Jazzy Elite Group' },
  { property: 'Completion Date', value: 'January 2022' },
  { property: 'Budget', value: '$6.8 million' },
  { property: 'Area', value: '30,000 sq ft' },
  { property: 'Type', value: 'Commercial' },
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
    title="Shopping Center Project"
    subtitle="Modern Retail Development"
    :breadcrumbs="breadcrumbs"
    imageWebp="/img/projects/01.webp"
    imagePng="/img/projects/01.jpg"
  />
  <AboutProjectSection
    subtitle="Retail Development"
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
