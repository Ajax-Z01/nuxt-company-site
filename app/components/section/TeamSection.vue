<script setup lang="ts">
import team01 from '~/assets/img/team/01.webp?width=600;1200&format=webp&quality=70';
import team02 from '~/assets/img/team/02.webp?width=600;1200&format=webp&quality=70';
import team03 from '~/assets/img/team/03.webp?width=600;1200&format=webp&quality=70';
import team04 from '~/assets/img/team/04.webp?width=600;1200&format=webp&quality=70';

import FacebookIcon from '~/components/icon/FacebookIcon.vue'
import InstagramIcon from '~/components/icon/InstagramIcon.vue'
import TwitterIcon from '~/components/icon/TwitterIcon.vue'
import WhatsappIcon from '~/components/icon/WhatsappIcon.vue'
import FadeInOnScroll from '~/components/transition/FadeInOnScroll.vue'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const teamMembers = [
  {
    nameKey: 'team.members.benjamin.name',
    positionKey: 'team.members.benjamin.position',
    bioKey: 'team.members.benjamin.bio',
    imageWebp: team01[0],
    alt: 'Benjamin Miller',
    socials: [
      { label: 'Facebook', component: FacebookIcon, url: '#' },
      { label: 'Instagram', component: InstagramIcon, url: '#' },
      { label: 'Twitter', component: TwitterIcon, url: '#' },
      { label: 'WhatsApp', component: WhatsappIcon, url: '#' },
    ],
  },
  {
    nameKey: 'team.members.stephanie.name',
    positionKey: 'team.members.stephanie.position',
    bioKey: 'team.members.stephanie.bio',
    imageWebp: team02[0],
    alt: 'Stephanie Ramirez',
    socials: [
      { label: 'Facebook', component: FacebookIcon, url: '#' },
      { label: 'Instagram', component: InstagramIcon, url: '#' },
      { label: 'Twitter', component: TwitterIcon, url: '#' },
      { label: 'WhatsApp', component: WhatsappIcon, url: '#' },
    ],
  },
  {
    nameKey: 'team.members.jameson.name',
    positionKey: 'team.members.jameson.position',
    bioKey: 'team.members.jameson.bio',
    imageWebp: team03[0],
    alt: 'Jameson Smith',
    socials: [
      { label: 'Facebook', component: FacebookIcon, url: '#' },
      { label: 'Instagram', component: InstagramIcon, url: '#' },
      { label: 'Twitter', component: TwitterIcon, url: '#' },
      { label: 'WhatsApp', component: WhatsappIcon, url: '#' },
    ],
  },
  {
    nameKey: 'team.members.miguel.name',
    positionKey: 'team.members.miguel.position',
    bioKey: 'team.members.miguel.bio',
    imageWebp: team04[0],
    alt: 'Miguel Rodriguez',
    socials: [
      { label: 'Facebook', component: FacebookIcon, url: '#' },
      { label: 'Instagram', component: InstagramIcon, url: '#' },
      { label: 'Twitter', component: TwitterIcon, url: '#' },
      { label: 'WhatsApp', component: WhatsappIcon, url: '#' },
    ],
  },
]
</script>

<template>
  <section class="team section py-24 bg-gray-900 text-gray-100">
    <div class="container max-w-7xl mx-auto px-4">
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <FadeInOnScroll
          v-for="(member, index) in teamMembers"
          :key="index"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <li
            class="flex flex-col bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            data-aos="fade-up"
            :data-aos-delay="index * 50"
          >
          <!-- Avatar -->
          <div class="w-full aspect-square overflow-hidden">
            <picture>
              <img
                :src="member.imageWebp"
                :alt="member.alt"
                class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>

          <!-- Content -->
          <div class="flex flex-col flex-grow p-6">
            <h4 class="text-lg md:text-xl font-semibold mb-1 text-white">
              {{ t(member.nameKey) }}
            </h4>
            <h5 class="text-emerald-400 text-sm md:text-base font-medium mb-3">
              {{ t(member.positionKey) }}
            </h5>
            <p class="text-gray-300 text-sm leading-relaxed mb-6">
              {{ t(member.bioKey) }}
            </p>

            <!-- Socials -->
            <ul class="flex gap-4 mt-auto">
              <li
                v-for="(social, i) in member.socials"
                :key="i"
                class="hover:scale-110 transition-transform"
              >
                <a
                  :href="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="social.label"
                  class="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                >
                <component :is="social.component" class="w-5 h-5" aria-hidden="true" />
                </a>
              </li>
            </ul>
            </div>
          </li>
        </FadeInOnScroll>
      </ul>
    </div>
  </section>
</template>
