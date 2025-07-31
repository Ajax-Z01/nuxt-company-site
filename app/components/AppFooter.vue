<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { PhoneIcon, MapPinIcon, ChevronRightIcon, PaperAirplaneIcon } from '@heroicons/vue/24/solid'

const currentYear = new Date().getFullYear()

const SocialIcon = defineComponent({
  props: { platform: String },
  setup(props) {
    return () => {
      switch (props.platform) {
        case 'facebook':
          return h(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 24 24',
              width: '24',
              height: '24',
              fill: 'currentColor',
              class: 'w-6 h-6',
            },
            [
              h('path', {
                d: 'M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.464h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.99 22 12z',
              }),
            ]
          )
        case 'instagram':
          return h(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              stroke: 'currentColor',
              'stroke-width': 2,
              viewBox: '0 0 24 24',
              width: '24',
              height: '24',
              class: 'w-6 h-6',
            },
            [
              h('rect', { x: 2, y: 2, width: 20, height: 20, rx: 5, ry: 5 }),
              h('path', { d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' }),
              h('line', { x1: 17.5, y1: 6.5, x2: 17.51, y2: 6.5 }),
            ]
          )
        case 'twitter':
          return h(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 50 50',
              width: '24',
              height: '24',
              fill: 'currentColor',
              class: 'w-6 h-6',
            },
            [
              h('path', {
                d: 'M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z',
              }),
            ]
          )
        case 'whatsapp':
          return h(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '-2 -2 24 24',
              width: '24',
              height: '24',
              fill: 'currentColor',
              class: 'w-6 h-6',
            },
            [
              h('path', {
                d: 'M9.516.012C4.206.262.017 4.652.033 9.929a9.8 9.8 0 0 0 1.085 4.465L.06 19.495a.387.387 0 0 0 .47.453l5.034-1.184a10 10 0 0 0 4.284 1.032c5.427.083 9.951-4.195 10.12-9.58C20.15 4.441 15.351-.265 9.516.011zm6.007 15.367a7.78 7.78 0 0 1-5.52 2.27 7.8 7.8 0 0 1-3.474-.808l-.701-.347-3.087.726.65-3.131-.346-.672A7.6 7.6 0 0 1 2.197 9.9c0-2.07.812-4.017 2.286-5.48a7.85 7.85 0 0 1 5.52-2.271c2.086 0 4.046.806 5.52 2.27a7.67 7.67 0 0 1 2.287 5.48c0 2.052-.825 4.03-2.287 5.481z',
              }),
              h('path', {
                d: 'm14.842 12.045-1.931-.55a.72.72 0 0 0-.713.186l-.472.478a.71.71 0 0 1-.765.16c-.913-.367-2.835-2.063-3.326-2.912a.69.69 0 0 1 .056-.774l.412-.53a.71.71 0 0 0 .089-.726L7.38 5.553a.723.723 0 0 0-1.125-.256c-.539.453-1.179 1.14-1.256 1.903-.137 1.343.443 3.036 2.637 5.07 2.535 2.349 4.566 2.66 5.887 2.341.75-.18 1.35-.903 1.727-1.494a.713.713 0 0 0-.408-1.072',
              }),
            ]
          )
        default:
          return null
      }
    }
  },
})
</script>

<template>
  <footer class="bg-[#0f172a] text-white py-16">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Main grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <!-- Brand -->
        <div>
          <a href="/" class="flex items-center gap-3 mb-4">
            <img src="/svg/logo.svg" alt="Axial Construct" class="h-10 w-auto" />
            <span class="text-2xl font-extrabold tracking-wide select-none">
              PT <span class="text-emerald-400">Ajaxtreon</span>
            </span>
          </a>
          <p class="text-gray-400 leading-relaxed max-w-sm">
            Libero volutpat sed cras ornare arcu dui vivamus. Ac tortor dignissim convallis aenean et tortor at risus viverra.
          </p>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-xl font-semibold mb-6">Contacts</h4>
          <div class="flex items-start gap-3 mb-4">
            <PhoneIcon class="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
            <div class="flex flex-col space-y-1 text-gray-400">
              <a href="tel:+13136453395" class="hover:text-emerald-400 transition">1 - 313 - 645 - 3395</a>
              <a href="tel:+14699702609" class="hover:text-emerald-400 transition">1 - 469 - 970 - 2609</a>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <MapPinIcon class="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
            <div class="flex flex-col text-gray-400">
              <span>2047 Cyrus Viaduct</span>
              <span>East Jadynchester</span>
            </div>
          </div>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-xl font-semibold mb-6">Company</h4>
          <ul class="space-y-3">
            <li>
              <a href="/about" class="flex items-center gap-2 hover:text-emerald-400 transition">
                <ChevronRightIcon class="w-5 h-5" /> About
              </a>
            </li>
            <li>
              <a href="/services" class="flex items-center gap-2 hover:text-emerald-400 transition">
                <ChevronRightIcon class="w-5 h-5" /> Services
              </a>
            </li>
            <li>
              <a href="/projects" class="flex items-center gap-2 hover:text-emerald-400 transition">
                <ChevronRightIcon class="w-5 h-5" /> Projects
              </a>
            </li>
            <li>
              <a href="/blog" class="flex items-center gap-2 hover:text-emerald-400 transition">
                <ChevronRightIcon class="w-5 h-5" /> Blog
              </a>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="text-xl font-semibold mb-4">Subscribe to Our News</h4>
          <p class="text-gray-400 mb-6 max-w-xs">
            Find out about the last days and the latest promotions of our Corporation.
          </p>
          <form class="max-w-md mx-auto flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email"
              required
              class="rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button
              type="submit"
              class="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-md px-6 py-2 flex items-center justify-center gap-2 transition"
            >
              <span>Subscribe</span>
              <PaperAirplaneIcon class="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      <!-- Bottom -->
      <div
        class="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6 text-sm text-gray-400 space-y-4 md:space-y-0"
      >
        <p>
          PT Ajaxtreon — All rights reserved © {{ currentYear }}
        </p>
        <ul class="flex gap-6">
          <li>
            <a href="#" aria-label="Facebook" class="hover:text-emerald-400 transition">
              <SocialIcon platform="facebook" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Instagram" class="hover:text-emerald-400 transition">
              <SocialIcon platform="instagram" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Twitter" class="hover:text-emerald-400 transition">
              <SocialIcon platform="twitter" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="WhatsApp" class="hover:text-emerald-400 transition">
              <SocialIcon platform="whatsapp" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
