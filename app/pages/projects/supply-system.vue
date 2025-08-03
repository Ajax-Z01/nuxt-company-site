<script setup lang="ts">
import HeaderPage from '~/components/HeaderPage.vue'
import AboutProjectSection from '~/components/section/AboutProjectSection.vue'
import GalleryPresentation from '@/components/GalleryPresentation.vue'
import FeedbackSection from '~/components/section/FeedbackSection.vue'
import type { ProjectContactInfo, ProjectInfoTableItem, ProjectSection } from '@/types/Project'

const project = {
  title: 'Installation and Creation of a Supply System',
  location: 'Ernest Mount Bartonstad',
  description: 'Comprehensive installation and development of a modern supply system tailored for industrial efficiency and reliability.',
  imageWebp: '/img/projects/03.webp',
  imageJpg: '/img/projects/03.jpg',
  details: [
    'Design and installation of integrated supply lines.',
    'Implementation of automation and monitoring systems.',
    'Ensuring compliance with safety and environmental standards.',
  ],
}

const aboutSections: ProjectSection[] = [
  {
    header: 'Description',
    text: project.description,
  },
  {
    header: 'System Integration',
    text: 'The supply system integrates multiple stages of materials handling, ensuring smooth operation and minimal downtime.',
  },
  {
    header: 'Project Details',
    checklist: project.details,
    text: 'Focus was placed on precision installation, quality assurance, and scalability for future expansions.',
  },
  {
    header: 'Technology and Safety',
    text: 'Utilizing state-of-the-art automation combined with rigorous safety protocols to protect personnel and assets.',
  },
]

const infoTable: ProjectInfoTableItem[] = [
  { property: 'Location', value: project.location },
  { property: 'Client', value: 'Bartonstad Industrial Corp.' },
  { property: 'Completion Date', value: 'July 2023' },
  { property: 'Budget', value: '$4.2 million' },
  { property: 'Area', value: '22,000 sq ft' },
  { property: 'Type', value: 'Industrial Supply System' },
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
    title="Supply System Project"
    subtitle="Efficient Industrial Supply Solutions"
    :breadcrumbs="breadcrumbs"
    imageWebp="/img/projects/03.webp"
    imagePng="/img/projects/03.jpg"
  />
  <AboutProjectSection
    subtitle="Supply System Installation"
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
