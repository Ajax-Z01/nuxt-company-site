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

const teamMembers = [
  {
    name: 'Benjamin Miller',
    position: 'Chief Engineering Officer',
    bio: 'Morbi tempus iaculis urna id volutpat lacus laoreet non. Purus faucibus ornare suspendisse sed',
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
    name: 'Stephanie Ramirez',
    position: 'Marketing Manager',
    bio: 'Gravida cum sociis natoque penatibus et magnis dis. Eu volutpat odio facilisis mauris. Vitae',
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
    name: 'Jameson Smith',
    position: 'Sales Manager',
    bio: 'In hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Nunc aliquet bibendum enim facilisis',
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
    name: 'Miguel Rodriguez',
    position: 'Chief Financial Officer',
    bio: 'Mauris rhoncus aenean vel elit scelerisque mauris. Semper risus in hendrerit gravida rutrum quisque non tellus',
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
              {{ member.name }}
            </h4>
            <h5 class="text-emerald-400 text-sm md:text-base font-medium mb-3">
              {{ member.position }}
            </h5>
            <p class="text-gray-300 text-sm leading-relaxed mb-6">
              {{ member.bio }}
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
