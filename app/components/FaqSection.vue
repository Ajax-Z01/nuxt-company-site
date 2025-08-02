<script setup lang="ts">
import { ref } from 'vue'

interface FaqItem {
  id: number
  question: string
  answer: string
}

const faqs = ref<FaqItem[]>([
  {
    id: 1,
    question: 'Where is Company Located?',
    answer:
      'Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Non quam lacus suspendisse faucibus interdum posuere lorem. Ut diam quam nulla porttitor.',
  },
  {
    id: 2,
    question: 'What is a Structural Engineer?',
    answer:
      'Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Non quam lacus suspendisse faucibus interdum posuere lorem. Ut diam quam nulla porttitor massa id neque aliquam vestibulum. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien',
  },
  {
    id: 3,
    question: 'What are the Service Provided by Company?',
    answer:
      'Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Non quam lacus suspendisse faucibus interdum posuere lorem. Ut diam quam nulla porttitor massa id neque aliquam vestibulum. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Ut diam quam nulla porttitor massa id neque aliquam vestibulum. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien',
  },
  {
    id: 4,
    question: 'How Long Does It Take to Build a House?',
    answer:
      'Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Non quam lacus suspendisse faucibus interdum posuere lorem. Ut diam quam nulla porttitor massa id neque aliquam vestibulum. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Ut diam quam nulla porttitor massa',
  },
])

const openIndex = ref<number | null>(0)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section class="faq section py-16 bg-gray-900 text-gray-100 min-h-[600px]">
    <div class="container max-w-7xl mx-auto px-4 h-full">
      <div
        class="flex flex-col md:flex-row md:gap-20 h-full"
        data-aos="fade-up"
      >
        <!-- KIRI: vertical center -->
        <div
          class="md:w-1/2 max-w-lg mx-auto md:mx-0 my-12"
        >
          <div class="section_header space-y-4">
            <p
              class="text-sm font-semibold uppercase tracking-wider text-sky-400 flex items-center gap-2"
            >
              <span
                class="block w-6 h-0.5 bg-yellow-400 rounded"
              ></span>
              Dealing with your worries
            </p>
            <h2 class="text-4xl font-extrabold leading-tight text-white">
              If Your Question Is Not Here
              <span class="text-emerald-400">Contact Us</span>
            </h2>
            <p class="text-gray-300 text-base md:text-lg leading-relaxed">
              Porttitor rhoncus dolor purus non enim praesent elementum
              facilisis. Nisi scelerisque eu ultrices vitae auctor eu augue ut
              lectus
            </p>
            <div class="mt-6">
              <NuxtLink
                to="/contact"
                class="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 px-6 rounded-md transition"
                >Contact Us</NuxtLink
              >
            </div>
          </div>
        </div>

        <!-- KANAN: vertical center -->
        <div
          class="md:w-1/2 w-full border border-gray-700 rounded-xl shadow-sm divide-y divide-gray-700 flex flex-col justify-center"
        >
          <div
            v-for="(item, i) in faqs"
            :key="item.id"
            class="faq_accordion-item"
          >
            <button
              @click="toggle(i)"
              class="trigger flex justify-between items-center w-full px-6 py-5 text-left font-semibold text-lg text-gray-200 hover:bg-gray-800 transition rounded-t-xl"
              :aria-expanded="openIndex === i ? 'true' : 'false'"
              :aria-controls="'faq-content-' + item.id"
              :id="'faq-trigger-' + item.id"
            >
              <span class="question">{{ item.question }}</span>
              <svg
                :class="{
                  'transform rotate-45 text-emerald-400': openIndex === i,
                  'text-gray-500': openIndex !== i,
                }"
                class="w-6 h-6 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m8-8H4"
                ></path>
              </svg>
            </button>
            <transition name="fade" mode="out-in">
              <div
                v-show="openIndex === i"
                :id="'faq-content-' + item.id"
                class="content px-6 pb-6 text-gray-300 leading-relaxed"
                role="region"
                :aria-labelledby="'faq-trigger-' + item.id"
              >
                <p>{{ item.answer }}</p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: max-height 0.4s ease, opacity 0.3s ease, padding 0.3s ease;
  overflow: hidden;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  max-height: 500px;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

</style>