<script setup lang="ts">
import HeaderPage from '~/components/HeaderPage.vue'
import AboutProjectSection from '~/components/section/AboutProjectSection.vue'
import GalleryPresentation from '@/components/GalleryPresentation.vue'
import FeedbackSection from '~/components/section/FeedbackSection.vue'
import type { ProjectContactInfo, ProjectInfoTableItem, ProjectSection } from '@/types/Project'

const project = {
  title: 'Food Factory Design and Construction',
  location: 'Karli Turnpike Apt. 993 Port Valentine',
  description: 'Complete design and construction services for modern food factories.',
  imageWebp: '/img/projects/05.webp',
  imageJpg: '/img/projects/05.jpg',
  details: [
    'Planning and layout design to optimize workflow and safety.',
    'Installation of food-grade equipment compliant with hygiene standards.',
    'Project management from concept to completion.',
  ],
}

const aboutSections: ProjectSection[] = [
  {
    header: 'Description',
    text: project.description,
  },
  {
    header: 'Building Better Development',
    text: 'Our team focuses on creating efficient, hygienic, and scalable food production facilities.',
    checklist: [
      'Collaborative planning with client stakeholders.',
      'Integration of hygienic materials and finishes.',
      'Optimized layout design to support operational efficiency.',
    ],
  },
  {
    header: 'Project Details',
    text: 'Designed with precision and executed with efficiency, this food factory project sets a new benchmark for sanitary industrial spaces.',
    checklist: project.details,
  },
  {
    header: 'Engineering With Style',
    text: 'Our team focused not only on functionality but also on form, ensuring that the factory met strict industry standards while maintaining a clean and modern aesthetic.',
  },
]

const infoTable: ProjectInfoTableItem[] = [
  { property: 'Location', value: project.location },
  { property: 'Client', value: 'FoodTech Industries' },
  { property: 'Completion Date', value: 'March 2023' },
  { property: 'Budget', value: '$2.5 million' },
  { property: 'Area', value: '15,000 sq ft' },
  { property: 'Type', value: 'Industrial' },
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
    title="Food Factory Project"
    subtitle="Innovative Design and Construction"
    :breadcrumbs="breadcrumbs"
    imageWebp="/img/projects/05.webp"
    imagePng="/img/projects/05.jpg"
  />
  <AboutProjectSection
    subtitle="Construction Project"
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
