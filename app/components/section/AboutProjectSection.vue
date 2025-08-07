<script setup lang="ts">
import FacebookIcon from '~/components/icon/FacebookIcon.vue'
import InstagramIcon from '~/components/icon/InstagramIcon.vue'
import TwitterIcon from '~/components/icon/TwitterIcon.vue'
import WhatsappIcon from '~/components/icon/WhatsappIcon.vue'
import LinkedinIcon from '~/components/icon/LinkedinIcon.vue'

const iconsMap = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  whatsapp: WhatsappIcon,
  linkedin: LinkedinIcon
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
      description: string,
      checklist?: { id: number; text: string }[]
    }[],
    required: true,
  },

  infoTable: {
    type: Array as () => { property: string; value: string }[],
    required: true,
  },
  
  detailsList: {
    type: Array as () => string[],
    required: false,
    default: () => [],
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

const processedAboutSections = computed(() => {
  return props.aboutSections.map(section => ({
    ...section,
    checklist: section.checklist ? section.checklist.map(item => item.text) : undefined
  }))
})
</script>

<template>
  <section
    class="about section-nopb py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
  >
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

      <div
        class="about_content flex flex-col md:flex-row gap-16 md:gap-20"
      >
        <!-- Main Article -->
        <article class="about_article flex-1 space-y-10">
          <!-- Image -->
          <div
            class="media rounded-xl overflow-hidden shadow-lg ring-1 ring-gray-200 dark:ring-gray-700 transition-transform hover:scale-[1.02] duration-300"
          >
            <picture>
              <source :srcset="imageWebp" type="image/webp" />
              <img
                :src="imageJpg"
                :alt="title"
                class="w-full object-cover aspect-[16/9]"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
          
          <!-- Project Details List -->
          <div v-if="detailsList.length" class="space-y-4">
            <h3 class="text-3xl font-semibold border-l-4 border-emerald-400 pl-4 mb-2">
              Key Highlights
            </h3>
            <ul class="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 text-lg">
              <li v-for="(detail, idx) in detailsList" :key="idx">
                {{ detail }}
              </li>
            </ul>
          </div>

          <!-- About Sections -->
          <template v-for="(section, idx) in processedAboutSections" :key="idx">
            <h3
              class="about_article-header text-3xl font-semibold border-l-4 border-emerald-400 pl-4 mb-4"
            >
              {{ section.header }}
            </h3>
            <p
              class="about_article-text text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
            >
              {{ section.description }}
            </p>

            <ul
              v-if="section.checklist && section.checklist.length"
              class="checklist list-disc list-inside space-y-3 text-green-600 dark:text-green-400"
            >
              <li
                v-for="(item, idy) in section.checklist"
                :key="idy"
                class="flex items-center gap-3 text-lg font-medium hover:text-green-500 transition-colors cursor-default select-none"
              >
                <svg
                  class="w-6 h-6 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
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
        <aside
          class="about_aside w-full md:w-96 flex-shrink-0 space-y-12 md:sticky md:top-24"
        >
          <!-- Information Table -->
          <div
            class="about_info about_aside-item bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700"
          >
            <h3
              class="about_info-title title text-2xl font-bold mb-8 border-b border-gray-300 dark:border-gray-700 pb-4"
            >
              Information About the Project
            </h3>
            <div class="overflow-x-auto rounded-md">
              <table
                class="about_info-table w-full text-left border-collapse"
                role="table"
                aria-label="Project Information Table"
              >
                <tbody>
                  <tr
                    v-for="(row, idx) in infoTable"
                    :key="idx"
                    class="about_info-table_row border-b border-gray-300 dark:border-gray-700 even:bg-gray-100 dark:even:bg-gray-900"
                  >
                    <td
                      class="property font-semibold py-3 pr-6 text-gray-600 dark:text-gray-400"
                      style="white-space: nowrap"
                    >
                      {{ row.property }}
                    </td>
                    <td
                      class="value py-3 text-gray-800 dark:text-gray-200 break-words"
                    >
                      {{ row.value }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a
              href="#"
              class="link link-arrow mt-8 inline-block text-emerald-500 hover:text-emerald-600 font-semibold transition-colors"
              aria-label="Order service link"
            >
              Order service
              <svg
                class="inline-block w-5 h-5 ml-1"
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
          <div
            class="about_contact about_aside-item primary-bg rounded-2xl p-8 shadow-lg ring-1 ring-emerald-600"
          >
            <h3
              class="about_contact-title title text-2xl font-bold mb-8 border-b border-emerald-600 pb-4"
            >
              Are You Going to Implement Project?
            </h3>
            <ul class="contact-info space-y-6">
              <li class="contact-info_group">
                <span class="name font-semibold block mb-1 text-lg">Address</span>
                <span class="content text-lg">{{ contactInfo.address }}</span>
              </li>
              <li class="contact-info_group">
                <span class="name font-semibold block mb-1 text-lg">Email</span>
                <span class="content flex flex-col gap-2 text-lg">
                  <a
                    v-for="(email, idx) in contactInfo.emails"
                    :key="idx"
                    :href="`mailto:${email}`"
                    class="link underline hover:text-emerald-300 transition-colors"
                  >
                    {{ email }}
                  </a>
                </span>
              </li>
              <li class="contact-info_group">
                <span class="name font-semibold block mb-1 text-lg">Phone</span>
                <span class="content flex flex-col gap-2 text-lg">
                  <a
                    v-for="(phone, idx) in contactInfo.phones"
                    :key="idx"
                    :href="`tel:${phone.replace(/\s+/g, '')}`"
                    class="link underline hover:text-emerald-300 transition-colors"
                  >
                    {{ phone }}
                  </a>
                </span>
              </li>
            </ul>
            <ul class="socials flex gap-6 mt-8 justify-start">
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
                  class="socials_item-link text-white hover:text-emerald-300 transition-colors"
                >
                  <component
                    :is="iconsMap[social.name]"
                    class="w-7 h-7"
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
.primary-bg {
  background-color: #10b981; /* Tailwind emerald-500 */
}
</style>
