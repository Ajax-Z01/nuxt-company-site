<script setup lang="ts">
import { PhoneIcon, MapPinIcon, ChevronRightIcon, PaperAirplaneIcon } from '@heroicons/vue/24/solid'
import FacebookIcon from '~/components/icon/FacebookIcon.vue'
import InstagramIcon from '~/components/icon/InstagramIcon.vue'
import TwitterIcon from '~/components/icon/TwitterIcon.vue'
import WhatsappIcon from '~/components/icon/WhatsappIcon.vue'
import { useI18n } from 'vue-i18n'
import { useLocalePath } from '#i18n'

const currentYear = new Date().getFullYear()
const { t } = useI18n()
const localePath = useLocalePath()

function safeT(key: string, params?: Record<string, unknown>): string {
  const value = params ? t(key, params) : t(key)
  return typeof value === 'string' ? value : key
}
</script>

<template>
  <footer class="bg-[#0f172a] text-white py-16">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Main grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <!-- Brand -->
        <div>
          <NuxtLink :to="localePath('/')" class="flex items-center gap-3 mb-4">
            <img src="/svg/logo.svg" :alt="safeT('footer.logoAlt')" class="h-10 w-auto" />
            <span class="text-2xl font-extrabold tracking-wide select-none">
              PT <span class="text-emerald-400">{{ safeT('footer.companyName') }}</span>
            </span>
          </NuxtLink>
          <p class="text-gray-400 leading-relaxed max-w-sm">
            {{ safeT('footer.description') }}
          </p>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-xl font-semibold mb-6">{{ safeT('footer.contacts.title') }}</h4>
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
              <span>{{ safeT('footer.contacts.address.line1') }}</span>
              <span>{{ safeT('footer.contacts.address.line2') }}</span>
            </div>
          </div>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-xl font-semibold mb-6">{{ safeT('footer.companyLinks.title') }}</h4>
          <ul class="space-y-3">
            <li>
              <NuxtLink :to="localePath('/about')" class="flex items-center gap-2 hover:text-emerald-400 transition">
                <ChevronRightIcon class="w-5 h-5" /> {{ safeT('footer.companyLinks.about') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/services')" class="flex items-center gap-2 hover:text-emerald-400 transition">
                <ChevronRightIcon class="w-5 h-5" /> {{ safeT('footer.companyLinks.services') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/projects')" class="flex items-center gap-2 hover:text-emerald-400 transition">
                <ChevronRightIcon class="w-5 h-5" /> {{ safeT('footer.companyLinks.projects') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/blog')" class="flex items-center gap-2 hover:text-emerald-400 transition">
                <ChevronRightIcon class="w-5 h-5" /> {{ safeT('footer.companyLinks.blog') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="text-xl font-semibold mb-4">{{ safeT('footer.newsletter.title') }}</h4>
          <p class="text-gray-400 mb-6 max-w-xs">
            {{ safeT('footer.newsletter.description') }}
          </p>
          <form class="max-w-md mx-auto flex flex-col gap-3">
            <input
              type="email"
              :placeholder="safeT('footer.newsletter.placeholder')"
              required
              class="rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button
              type="submit"
              class="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-md px-6 py-2 flex items-center justify-center gap-2 transition"
            >
              <span>{{ safeT('footer.newsletter.button') }}</span>
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
          {{ safeT('footer.copyright', { year: currentYear }) }}
        </p>
        <ClientOnly>
          <ul class="flex gap-6">
            <li>
              <a href="#" aria-label="Facebook" class="hover:text-emerald-400 transition">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram" class="hover:text-emerald-400 transition">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Twitter" class="hover:text-emerald-400 transition">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href="#" aria-label="WhatsApp" class="hover:text-emerald-400 transition">
                <WhatsappIcon />
              </a>
            </li>
          </ul>
        </ClientOnly>
      </div>
    </div>
  </footer>
</template>
