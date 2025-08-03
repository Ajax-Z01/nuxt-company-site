<script setup lang="ts">
const steps = [
  {
    title: 'Leave a request',
    description:
      'In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Cras adipiscing enim',
    completed: true,
  },
  {
    title: 'Cost calculation',
    description:
      'Habitant morbi tristique senectus et netus et malesuada fames',
    completed: true,
  },
  {
    title: 'Signing of a contract',
    description:
      'Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus',
    completed: true,
  },
  {
    title: 'Execution of works',
    description:
      'Ridiculus mus mauris vitae ultricies. Imperdiet proin fermentum leo vel orci porta',
    completed: true,
  },
]
</script>

<template>
  <section class="bg-white dark:bg-gray-950 py-16 text-gray-900 dark:text-white">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Header -->
      <div class="mb-12">
        <p class="text-sm font-semibold uppercase tracking-wider text-sky-500 dark:text-sky-300 flex items-center gap-2">
          <span class="block w-6 h-0.5 bg-yellow-400"></span>
          Better Process
        </p>
        <h2 class="mt-2 text-4xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight">
          The Process of Working <span class="text-emerald-600">with Us</span>
        </h2>
      </div>

      <!-- Steps -->
      <div class="relative">
        <!-- Vertical line on mobile -->
        <div class="absolute left-[21px] top-0 h-full w-0.5 bg-emerald-400 md:hidden"></div>

        <!-- Horizontal line on desktop -->
        <div class="hidden md:block absolute top-[18px] left-0 right-0 h-0.5 bg-emerald-400"></div>

        <ul
          class="flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-16 pt-8 relative z-10"
        >
          <li
            v-for="(step, index) in steps"
            :key="index"
            class="relative md:flex-1 md:min-w-[160px] text-left md:text-center pl-12 md:pl-0"
          >
            <!-- Marker -->
            <div
              class="absolute w-4 h-4 rounded-full z-10"
              :class="[
                step.completed ? 'bg-yellow-400' : 'bg-gray-400',
                'top-[32px] left-[14px] md:top-[-21px] md:left-1/2 md:-translate-x-1/2'
              ]"
            ></div>

            <!-- Ping animation -->
            <div
              v-if="step.completed"
              class="absolute w-4 h-4 rounded-full bg-yellow-400 opacity-30 animate-ping"
              :class="[
                'top-[32px] left-[14px] md:top-[-21px] md:left-1/2 md:-translate-x-1/2'
              ]"
            ></div>

            <!-- Content -->
            <div class="mt-6 md:mt-4">
              <h4 class="font-semibold text-lg mb-1">{{ step.title }}</h4>
              <p class="text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                {{ step.description }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
