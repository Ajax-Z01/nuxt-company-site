<script setup lang="ts">
import FacebookIcon from '@/components/icons/FacebookIcon.vue'
import InstagramIcon from '@/components/icons/InstagramIcon.vue'
import TwitterIcon from '@/components/icons/TwitterIcon.vue'
import WhatsappIcon from '@/components/icons/WhatsappIcon.vue'

const iconsMap = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  whatsapp: WhatsappIcon,
}

const props = defineProps({
  subtitle: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },

  imageWebp: { type: String, required: true },
  imageJpg: { type: String, required: true },

  aboutSections: {
    type: Array as () => {
      header: string,
      text: string,
      checklist?: string[]
    }[],
    required: true,
  },

  infoTable: {
    type: Array as () => { property: string; value: string }[],
    required: true,
  },

  contactInfo: {
    type: Object as () => {
      address: string,
      emails: string[],
      phones: string[],
      socials: { name: keyof typeof iconsMap, link: string, label: string }[],
    },
    required: true,
  },
})
</script>

<template>
  <section class="about section-nopb py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
    <div class="container max-w-6xl mx-auto px-4">
      <!-- Header -->
      <div class="section_header mb-12 space-y-4 mx-auto" data-aos="fade-up">
        <p
          class="text-sm font-semibold uppercase tracking-wider text-sky-500 flex items-center gap-2"
        >
          <span class="block w-6 h-0.5 bg-yellow-500 rounded"></span>
          {{ subtitle }}
        </p>
        <h2 class="text-4xl font-extrabold leading-tight">
          Spotlight <span class="text-emerald-400">{{ title }}</span>
        </h2>
        <p class="text-gray-400 text-base md:text-lg leading-relaxed">
          {{ description }}
        </p>
      </div>

      <div class="about_content flex flex-col md:flex-row gap-12">
        <!-- Main Article -->
        <article class="about_article flex-1 space-y-8">
          <!-- Image -->
          <div class="media rounded-lg overflow-hidden shadow-lg">
            <picture>
              <source :srcset="imageWebp" type="image/webp" />
              <img
                :src="imageJpg"
                :alt="title"
                class="w-full object-cover"
                loading="lazy"
              />
            </picture>
          </div>

          <!-- About Sections -->
          <template v-for="(section, idx) in aboutSections" :key="idx">
            <h3 class="about_article-header text-2xl font-semibold">
              {{ section.header }}
            </h3>
            <p class="about_article-text text-gray-700 dark:text-gray-300 leading-relaxed">
              {{ section.text }}
            </p>
            <ul
              v-if="section.checklist && section.checklist.length"
              class="checklist list-disc list-inside space-y-2 text-green-600 dark:text-green-400"
            >
              <li
                v-for="(item, idy) in section.checklist"
                :key="idy"
                class="flex items-center gap-2"
              >
                <svg
                  class="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>{{ item }}</span>
              </li>
            </ul>
          </template>
        </article>

        <!-- Aside -->
        <aside class="about_aside w-full md:w-96 flex-shrink-0 space-y-10">
          <!-- Information Table -->
          <div class="about_info about_aside-item bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow">
            <h3 class="about_info-title title text-xl font-bold mb-6">
              Information About the Project
            </h3>
            <table class="about_info-table w-full text-left">
              <tbody>
                <tr
                  v-for="(row, idx) in infoTable"
                  :key="idx"
                  class="about_info-table_row border-b border-gray-300 dark:border-gray-700"
                >
                  <td class="property font-semibold py-2 pr-4 text-gray-600 dark:text-gray-400">
                    {{ row.property }}
                  </td>
                  <td class="value py-2 text-gray-800 dark:text-gray-200">
                    {{ row.value }}
                  </td>
                </tr>
              </tbody>
            </table>
            <a
              href="#"
              class="link link-arrow mt-6 inline-block text-emerald-600 hover:text-emerald-400 font-semibold"
            >
              Order service
              <svg
                class="inline-block w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <!-- Contact Info -->
          <div class="about_contact about_aside-item primary-bg rounded-lg p-6 shadow text-white">
            <h3 class="about_contact-title title text-xl font-bold mb-6">
              Are You Going to Implement Project?
            </h3>
            <ul class="contact-info space-y-4">
              <li class="contact-info_group">
                <span class="name font-semibold block mb-1">Address</span>
                <span class="content">{{ contactInfo.address }}</span>
              </li>
              <li class="contact-info_group">
                <span class="name font-semibold block mb-1">Email</span>
                <span class="content flex flex-col gap-1">
                  <a
                    v-for="(email, idx) in contactInfo.emails"
                    :key="idx"
                    :href="`mailto:${email}`"
                    class="link underline hover:text-emerald-300"
                  >
                    {{ email }}
                  </a>
                </span>
              </li>
              <li class="contact-info_group">
                <span class="name font-semibold block mb-1">Phone</span>
                <span class="content flex flex-col gap-1">
                  <a
                    v-for="(phone, idx) in contactInfo.phones"
                    :key="idx"
                    :href="`tel:${phone.replace(/\s+/g, '')}`"
                    class="link underline hover:text-emerald-300"
                  >
                    {{ phone }}
                  </a>
                </span>
              </li>
            </ul>
            <ul class="socials flex gap-4 mt-6">
              <li
                v-for="(social, idx) in contactInfo.socials"
                :key="idx"
                class="socials_item"
              >
                <a
                  :href="social.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="social.label"
                  class="socials_item-link text-white hover:text-emerald-300"
                >
                  <component
                    :is="iconsMap[social.name]"
                    class="w-6 h-6"
                    aria-hidden="true"
                  />
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about_article-header {
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}

.about_article-text {
  font-size: 1rem;
  line-height: 1.75;
}

.checklist li {
  list-style: none;
}

.primary-bg {
  background-color: #10b981; /* Tailwind emerald-500 */
}
</style>
