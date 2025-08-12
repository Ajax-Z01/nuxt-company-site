<script setup lang="ts">
import imageUrl from '~/assets/img/about/03.webp?width=600;1200&format=webp&quality=70';

import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import FadeInOnScroll from '~/components/transition/FadeInOnScroll.vue'
import { useI18n } from 'vue-i18n'

interface Skill {
  id: string
  labelKey: string
  value: number
  color: string
  isVisible: boolean
}

const { t } = useI18n()

const skills = ref<Skill[]>([
  { id: 'industry', labelKey: 'aboutSectionServiceRevert.skills.industry', value: 90, color: '#0DA574', isVisible: false },
  { id: 'engineering', labelKey: 'aboutSectionServiceRevert.skills.engineering', value: 96, color: '#FFC631', isVisible: false },
  { id: 'factory', labelKey: 'aboutSectionServiceRevert.skills.factory', value: 89, color: '#0DA574', isVisible: false },
  { id: 'construction', labelKey: 'aboutSectionServiceRevert.skills.construction', value: 99, color: '#FFC631', isVisible: false },
])

const skillRefs = ref<(HTMLElement | null)[]>([])

function setSkillRef(el: Element | ComponentPublicInstance | null, index: number) {
  if (el && el instanceof HTMLElement) {
    skillRefs.value[index] = el
  }
}

function getStrokeDashoffset(value: number) {
  return 100 - value
}

onMounted(() => {
  skillRefs.value.forEach((el, index) => {
    if (!el) return

    useIntersectionObserver(el, ([entry]) => {
      if (entry?.isIntersecting && skills.value[index]) {
        skills.value[index]!.isVisible = true
      }
    }, { threshold: 0.5 })
  })
})
</script>

<template>
  <section class="about revert section bg-gray-900 text-white py-20">
    <div class="container max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
      
      <!-- Media -->
      <div
        class="media md:w-1/2 rounded-lg overflow-hidden shadow-lg order-last md:order-first"
      >
        <FadeInOnScroll>
          <picture>
            <img
              :src="imageUrl[0]"
              alt="About media"
              class="w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </FadeInOnScroll>
      </div>

      <!-- Content -->
      <div class="main md:w-1/2 space-y-8 order-first md:order-last">
        <FadeInOnScroll>
          <div class="section_header max-w-lg mb-12 space-y-4">
            <p class="text-sm font-semibold uppercase tracking-wider text-sky-400 flex items-center gap-2 max-w-max">
              <span class="block w-6 h-0.5 bg-yellow-500 rounded"></span>
              {{ t('aboutSectionServiceRevert.skills.subtitle') }}
            </p>
            <h2 class="text-4xl md:text-5xl font-extrabold leading-tight">
              {{ t('aboutSectionServiceRevert.skills.title.part1') }}
              <span class="text-emerald-400">{{ t('aboutSectionServiceRevert.skills.title.highlight') }}</span>
            </h2>
            <p class="text-gray-400 text-base md:text-lg leading-relaxed">
              {{ t('aboutSectionServiceRevert.skills.description') }}
            </p>
          </div>
        </FadeInOnScroll>

        <ul class="skills flex flex-col gap-6">
          <li
            v-for="(skill, index) in skills"
            :key="skill.id"
            class="skills_item"
            :ref="el => setSkillRef(el, index)"
          >
            <FadeInOnScroll>
              <div
                class="flex items-center justify-between"
                :data-aos-delay="100 + index * 100"
                data-aos-duration="500"
              >
                <span class="label text-gray-300 font-semibold text-lg min-w-[120px]">
                  {{ t(skill.labelKey) }}
                </span>

                <div class="progressLine relative flex-1 h-6" style="max-width: 400px;">
                  <svg
                    viewBox="0 0 100 7.5"
                    preserveAspectRatio="none"
                    class="w-full h-full block"
                  >
                    <path
                      d="M 0,3.75 L 100,3.75"
                      stroke="#eee"
                      stroke-width="7.5"
                      fill-opacity="0"
                    />
                    <path
                      d="M 0,3.75 L 100,3.75"
                      :stroke="skill.color"
                      stroke-width="7.5"
                      fill-opacity="0"
                      :style="{
                        strokeDasharray: 100,
                        strokeDashoffset: skill.isVisible ? getStrokeDashoffset(skill.value) : 100,
                        transition: 'stroke-dashoffset 1s ease-out'
                      }"
                    />
                  </svg>
                  <div
                    class="progress-text absolute right-0 top-0 bottom-0 flex items-center pr-1 text-gray-600 font-semibold select-none"
                  >
                    {{ skill.value }}%
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills_item {
  min-height: 40px;
}
.label {
  min-width: 120px;
}
.progress-text {
  font-size: 0.875rem;
}
</style>
