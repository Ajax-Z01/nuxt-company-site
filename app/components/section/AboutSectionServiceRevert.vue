<script setup lang="ts">
import { onMounted } from 'vue'

interface Skill {
  id: string
  label: string
  value: number
  color: string
}

const skills: Skill[] = [
  { id: 'industry', label: 'Industry', value: 90, color: '#0DA574' },
  { id: 'engineering', label: 'Engineering', value: 96, color: '#FFC631' },
  { id: 'factory', label: 'Factory', value: 89, color: '#0DA574' },
  { id: 'construction', label: 'Construction', value: 99, color: '#FFC631' },
]

// Function to set stroke dashoffset based on value
function getStrokeDashoffset(value: number) {
  // full length is 100, offset decreases as value increases
  return 100 - value
}

onMounted(() => {
  // If you want to trigger AOS refresh or any JS-based progress animation, do here
  // Assuming you use AOS already initialized globally
})
</script>

<template>
  <section class="about revert section bg-gray-900 text-white py-20">
    <div class="container max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
      
      <!-- Media (posisi dibalik, jadi di kiri) -->
      <div
        class="media md:w-1/2 rounded-lg overflow-hidden shadow-lg order-last md:order-first"
        data-aos="zoom-in"
        data-aos-duration="700"
      >
        <picture>
          <source srcset="/img/about/03.webp" type="image/webp" />
          <img
            src="/img/about/03.webp"
            alt="About media"
            class="w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>

      <!-- Content -->
      <div class="main md:w-1/2 space-y-8 order-first md:order-last">
        <div class="section_header max-w-lg mb-12 space-y-4" data-aos="fade-up">
          <p class="text-sm font-semibold uppercase tracking-wider text-sky-400 flex items-center gap-2 max-w-max">
            <span class="block w-6 h-0.5 bg-yellow-500 rounded"></span>
            We build only quality things
          </p>
          <h2 class="text-4xl md:text-5xl font-extrabold leading-tight">
            Trusted Quality for Over <span class="text-emerald-400">20 Years</span>
          </h2>
          <p class="text-gray-400 text-base md:text-lg leading-relaxed">
            Convallis a cras semper auctor neque vitae. Lectus proin nibh nisl
            condimentum fermentum odio eu. Augue neque gravida in fermentum et
            sollicitudin
          </p>
        </div>

        <ul class="skills flex flex-col gap-6">
          <li
            v-for="skill in skills"
            :key="skill.id"
            class="skills_item flex items-center justify-between"
            data-aos="zoom-in"
            data-aos-duration="400"
          >
            <span class="label text-gray-300 font-semibold text-lg min-w-[120px]">
              {{ skill.label }}
            </span>

            <div class="progressLine relative flex-1 h-6" style="max-width: 400px;">
              <svg
                viewBox="0 0 100 7.5"
                preserveAspectRatio="none"
                class="w-full h-full block"
              >
                <!-- Background track -->
                <path
                  d="M 0,3.75 L 100,3.75"
                  stroke="#eee"
                  stroke-width="7.5"
                  fill-opacity="0"
                ></path>
                <!-- Filled progress -->
                <path
                  :d="'M 0,3.75 L 100,3.75'"
                  :stroke="skill.color"
                  stroke-width="7.5"
                  fill-opacity="0"
                  :style="{
                    strokeDasharray: '100, 100',
                    strokeDashoffset: getStrokeDashoffset(skill.value)
                  }"
                ></path>
              </svg>
              <div
                class="progress-text absolute right-0 top-0 bottom-0 flex items-center pr-1 text-gray-600 font-semibold select-none"
              >
                {{ skill.value }}%
              </div>
            </div>
          </li>
        </ul>
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
  color: white;
}
.highlight {
  color: #0da574;
}
.skills_item .label {
  min-width: 6rem;
}
.progress-text {
  font-size: 0.875rem;
}
</style>
