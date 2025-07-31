<script setup lang="ts">
// Tidak ada logic khusus
</script>

<template>
  <section
    class="about section py-20 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
  >
    <div
      class="container max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12"
    >
      <!-- LEFT: Content -->
      <div class="main lg:w-1/2 max-w-xl w-full space-y-6">
        <!-- Header -->
        <div class="section_header space-y-4">
          <p
            class="text-sm font-semibold uppercase tracking-wider text-sky-500 flex items-center gap-2 max-w-max"
            data-aos="fade-down"
          >
            <span class="block w-6 h-0.5 bg-yellow-500 rounded"></span>
            Who we are
          </p>

          <h2
            class="text-4xl font-extrabold leading-tight max-w-lg"
            data-aos="fade-right"
          >
            Bringing
            <span class="highlight text-emerald-600">Your Ideas</span> and
            Innovations to Life
          </h2>
          <p
            class="text text-gray-600 dark:text-gray-300 max-w-lg"
            data-aos="fade-up"
            data-aos-delay="50"
          >
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
        class="media lg:w-1/2 max-w-lg w-full"
        data-aos="zoom-in"
        data-aos-duration="700"
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
