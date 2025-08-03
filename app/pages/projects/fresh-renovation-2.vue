<script setup lang="ts">
import HeaderPage from '~/components/HeaderPage.vue'
import AboutProjectSection from '~/components/section/AboutProjectSection.vue'
import GalleryPresentation from '@/components/GalleryPresentation.vue'
import FeedbackSection from '~/components/section/FeedbackSection.vue'
import type { ProjectContactInfo, ProjectInfoTableItem, ProjectSection } from '@/types/Project'

const project = {
  title: 'Fresh Concept Construction Renovation',
  location: 'Claudie Green Suite 698 Avisstad',
  description: 'A modern renovation initiative focused on revitalizing building aesthetics and functional design.',
  imageWebp: '/img/projects/07.webp',
  imageJpg: '/img/projects/07.jpg',
  details: [
    'Customized design solutions for commercial space rejuvenation.',
    'Use of sustainable materials and eco-friendly systems.',
    'Timely project delivery with minimal operational disruption.',
  ],
}

const aboutSections: ProjectSection[] = [
  {
    header: 'Description',
    text: project.description,
  },
  {
    header: 'Building Better Development',
    text: 'Our team transforms commercial interiors with precision-focused renovation, blending aesthetics with functional upgrades.',
    checklist: [
      'Building the future with ideas',
      'Designing future with excellence',
      'Discovering possibility in concrete',
      'Engineering the better way',
    ],
  },
  {
    header: 'Project Details',
    text: 'This renovation project was conducted with strict adherence to safety protocols and client-specific goals.',
    checklist: project.details,
  },
  {
    header: 'Engineering With Style',
    text: 'Aliquet nec ullamcorper sit amet risus nullam eget felis. Ligula ullamcorper malesuada proin libero. Viverra mauris in aliquam sem. Sem viverra aliquet eget sit amet. Dignissim convallis aenean et tortor at. Velit scelerisque in dictum non consectetur a. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper.',
  },
]

const infoTable: ProjectInfoTableItem[] = [
  { property: 'Location', value: project.location },
  { property: 'Client', value: 'UrbanSpace Renovators' },
  { property: 'Completion Date', value: 'May 2023' },
  { property: 'Budget', value: '$980,000' },
  { property: 'Area', value: '7,200 sq ft' },
  { property: 'Type', value: 'Commercial Renovation' },
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
    title="Fresh Renovation Phase 2"
    subtitle="Reimagining Commercial Spaces"
    :breadcrumbs="breadcrumbs"
    imageWebp="/img/projects/07.webp"
    imagePng="/img/projects/07.jpg"
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
