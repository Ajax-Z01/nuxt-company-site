<script setup lang="ts">
import HeaderPage from '~/components/HeaderPage.vue'
import AboutProjectSection from '@/components/AboutProjectSection.vue'
import GalleryPresentation from '@/components/GalleryPresentation.vue'
import FeedbackSection from '@/components/FeedbackSection.vue'
import type { ProjectContactInfo, ProjectInfoTableItem, ProjectSection } from '@/types/Project'

const project = {
  title: 'Fresh Concept Construction Renovation',
  location: 'Daphne Way New Reaganmouth',
  description: 'Renovation project focused on transforming spaces with fresh, modern concepts for residential and commercial use.',
  imageWebp: '/img/projects/02.webp',
  imageJpg: '/img/projects/02.jpg',
  details: [
    'Interior redesign with a focus on natural lighting and open space.',
    'Structural improvements and modern finishes.',
    'Energy-efficient upgrades integrated into the renovation process.',
  ],
}

const aboutSections: ProjectSection[] = [
  {
    header: 'Description',
    text: project.description,
  },
  {
    header: 'Building Better Development',
    text: 'Our team specializes in creating modern, functional spaces that enhance both aesthetics and usability.',
    checklist: [
      'Strategic redesign blending aesthetics with utility.',
      'Client-focused iteration process ensuring vision alignment.',
      'On-site supervision and agile adaptation to changes.',
    ],
  },
  {
    header: 'Project Details',
    text: 'This renovation was carried out with careful planning to minimize disruption and maximize improvement across aesthetics and functionality.',
    checklist: project.details,
  },
  {
    header: 'Engineering With Style',
    text: 'From lighting schemes to material selection, every aspect was designed to bring a fresh, timeless feel while maintaining structural integrity and efficiency.',
  },
]

const infoTable: ProjectInfoTableItem[] = [
  { property: 'Location', value: project.location },
  { property: 'Client', value: 'ModernBuild Co.' },
  { property: 'Completion Date', value: 'October 2022' },
  { property: 'Budget', value: '$1.1 million' },
  { property: 'Area', value: '8,500 sq ft' },
  { property: 'Type', value: 'Renovation' },
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
    title="Fresh Concept Renovation"
    subtitle="Modern Renovation Execution"
    :breadcrumbs="breadcrumbs"
    imageWebp="/img/projects/02.webp"
    imagePng="/img/projects/02.jpg"
  />
  <AboutProjectSection
    subtitle="Renovation Project"
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
