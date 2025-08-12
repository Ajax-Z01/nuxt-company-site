<script setup lang="ts">
import FacebookIcon from '~/components/icon/FacebookIcon.vue'
import InstagramIcon from '~/components/icon/InstagramIcon.vue'
import TwitterIcon from '~/components/icon/TwitterIcon.vue'
import WhatsappIcon from '~/components/icon/WhatsappIcon.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="contact section py-20 bg-white">
    <div class="container max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-stretch">
      <!-- Contact Form -->
      <div class="contact_form md:w-3/4">
        <div
          class="contact_form-header section_header mb-12 space-y-4"
          data-aos="fade-up"
        >
          <p
            class="text-sm font-semibold uppercase tracking-wider text-sky-400 flex items-center gap-2 max-w-max"
          >
            <span class="block w-6 h-0.5 bg-yellow-500 rounded"></span>
            {{ t('contactSection.contactUs') }}
          </p>
          <h2 class="title text-4xl font-extrabold leading-tight max-w-xl">
            {{ t('contactSection.title.part1') }}
            <span class="highlight text-emerald-500">{{ t('contactSection.title.highlight') }}</span>
          </h2>
          <p class="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
            {{ t('contactSection.description') }}
          </p>
        </div>
        <form
          action="form.php"
          method="POST"
          name="feedbackForm"
          data-type="feedback"
          class="contact_form-form contact-form flex flex-wrap justify-between gap-6"
        >
          <input
            type="text"
            id="feedbackName"
            name="feedbackName"
            :placeholder="t('contactSection.form.fullName')"
            required
            class="contact-form_field w-full md:w-[48%] p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-1 transition-shadow"
          />
          <input
            type="tel"
            id="feedbackTel"
            name="feedbackTel"
            :placeholder="t('contactSection.form.phone')"
            required
            class="contact-form_field w-full md:w-[48%] p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-1 transition-shadow"
          />
          <input
            type="email"
            id="feedbackEmail"
            name="feedbackEmail"
            :placeholder="t('contactSection.form.email')"
            required
            class="contact-form_field w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-1 transition-shadow"
          />
          <textarea
            id="feedbackMessage"
            name="feedbackMessage"
            :placeholder="t('contactSection.form.message')"
            required
            rows="6"
            class="contact-form_field w-full p-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-1 transition-shadow"
          ></textarea>
          <button
            type="submit"
            class="contact-form_btn btn bg-emerald-500 text-white font-semibold py-4 px-10 rounded-md hover:bg-emerald-600 shadow-md hover:shadow-lg transition w-full md:w-auto"
          >
            {{ t('contactSection.form.sendMessage') }}
          </button>
        </form>
      </div>

      <!-- Contact Info -->
      <div
        class="contact_info md:w-1/4 flex flex-col gap-12"
        data-aos="fade-left"
      >
        <div class="flex-grow">
          <h3
            class="contact_info-header text-3xl font-extrabold mb-8 max-w-xs text-gray-900"
          >
            {{ t('contactSection.projectQuestion') }}
          </h3>
          <ul class="contact-info space-y-10 max-w-xs">
            <li class="contact-info_group">
              <span
                class="name block text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3"
              >
                {{ t('contactSection.address.label') }}
              </span>
              <span
                class="content block text-lg font-bold leading-relaxed text-gray-900"
              >
                {{ t('contactSection.address.content') }}
              </span>
            </li>
            <li class="contact-info_group">
              <span
                class="name block text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3"
              >
                {{ t('contactSection.email.label') }}
              </span>
              <span
                class="content flex flex-col space-y-1 text-lg font-bold text-gray-900"
              >
                <a href="mailto:info@construct.com" class="link hover:underline">
                  info@construct.com
                </a>
                <a href="mailto:support@construct.com" class="link hover:underline">
                  support@construct.com
                </a>
              </span>
            </li>
            <li class="contact-info_group">
              <span
                class="name block text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3"
              >
                {{ t('contactSection.phone.label') }}
              </span>
              <span
                class="content flex flex-col space-y-1 text-lg font-bold text-gray-900"
              >
                <a href="tel:+13136453395" class="link hover:underline">
                  1 - 313 - 645 - 3395
                </a>
                <a href="tel:+14699702609" class="link hover:underline">
                  1 - 469 - 970 - 2609
                </a>
              </span>
            </li>
          </ul>
        </div>

        <div class="mb-4">
          <ul class="socials flex space-x-8" role="list">
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                class="text-gray-600 hover:text-emerald-500 transition"
              >
                <FacebookIcon class="w-8 h-8 md:w-10 md:h-10" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                class="text-gray-600 hover:text-emerald-500 transition"
              >
                <InstagramIcon class="w-8 h-8 md:w-10 md:h-10" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                class="text-gray-600 hover:text-emerald-500 transition"
              >
                <TwitterIcon class="w-8 h-8 md:w-10 md:h-10" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                class="text-gray-600 hover:text-emerald-500 transition"
              >
                <WhatsappIcon class="w-8 h-8 md:w-10 md:h-10" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.subtitle {
  font-size: 0.875rem;
  letter-spacing: 0.1em;
}

.title {
  color: #111827; /* Tailwind slate-900 */
}

.highlight {
  color: #0DA574; /* Emerald green */
}

.link {
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.contact-form_field {
  transition: box-shadow 0.2s ease;
}

.contact-form_btn {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}
</style>
