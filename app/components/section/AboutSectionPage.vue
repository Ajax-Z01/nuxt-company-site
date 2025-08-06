<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const leftRef = ref<HTMLElement | null>(null)
const rightRef = ref<HTMLElement | null>(null)

const leftVisible = ref(false)
const rightVisible = ref(false)

useIntersectionObserver(
  leftRef,
  (entries) => {
    const entry = entries[0]
    leftVisible.value = !!entry && entry.isIntersecting
  },
  { threshold: 0.1 }
)

useIntersectionObserver(
  rightRef,
  (entries) => {
    const entry = entries[0]
    rightVisible.value = !!entry && entry.isIntersecting
  },
  { threshold: 0.1 }
)
</script>

<template>
  <section class="about section py-20 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
    <div
      class="container max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12"
    >
      <!-- LEFT: Content -->
      <div
        ref="leftRef"
        :class="[
          'main lg:w-1/2 max-w-xl w-full space-y-6',
          leftVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-20px]'
        ]"
      >
        <!-- ... isi kiri tetap sama ... -->
        <div class="section_header space-y-4">
          <p class="text-sm font-semibold uppercase tracking-wider text-sky-500 flex items-center gap-2 max-w-max">
            <span class="block w-6 h-0.5 bg-yellow-500 rounded"></span>
            Who we are
          </p>
          <h2 class="text-4xl font-extrabold leading-tight max-w-lg">
            Bringing
            <span class="highlight text-emerald-400">Your Ideas</span> and
            Innovations to Life
          </h2>
          <p class="text text-gray-600 dark:text-gray-300 max-w-lg">
            Our civil and structural team is committed to providing
            sustainable, creative & efficient engineering solutions for our
            communities.
          </p>
        </div>
        <!-- Checklist -->
        <ul class="checklist space-y-5 mt-6 max-w-md">
          <li class="flex items-start gap-3" data-aos="fade-up" data-aos-delay="100">
            <svg
              class="w-5 h-5 mt-1 flex-shrink-0 text-emerald-500"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Making lives easier</span>
          </li>
          <li class="flex items-start gap-3" data-aos="fade-up" data-aos-delay="150">
            <svg
              class="w-5 h-5 mt-1 flex-shrink-0 text-emerald-500"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Get every solution right here</span>
          </li>
          <li class="flex items-start gap-3" data-aos="fade-up" data-aos-delay="200">
            <svg
              class="w-5 h-5 mt-1 flex-shrink-0 text-emerald-500"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Innovation and creativity</span>
          </li>
          <li class="flex items-start gap-3" data-aos="fade-up" data-aos-delay="250">
            <svg
              class="w-5 h-5 mt-1 flex-shrink-0 text-emerald-500"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Fine engineering only with us</span>
          </li>
        </ul>

        <!-- Button -->
        <div class="wrapper mt-8" data-aos="fade-up" data-aos-delay="300">
          <NuxtLink
            to="/contact"
            class="btn bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
          >
            Consult now
          </NuxtLink>
        </div>
      </div>

      <!-- RIGHT: Image -->
      <div
        ref="rightRef"
        :class="[
          'media lg:w-1/2 max-w-lg w-full',
          rightVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-[20px]'
        ]"
      >
        <picture>
          <source srcset="/img/about/01.webp" type="image/webp" />
          <img
            src="/img/about/01.webp"
            alt="About Us"
            class="rounded-xl shadow-lg object-cover w-full h-auto"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-left {
  animation: fade-in-left 0.8s ease forwards;
}
.animate-fade-in-right {
  animation: fade-in-right 0.8s ease forwards;
}
</style>
