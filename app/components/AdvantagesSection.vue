<script setup lang="ts">
const stats = [
  { value: '200+', label: 'Completed Projects Every Year' },
  { value: '4.253', label: 'Million Euros Turnover in 2020' },
  { value: '99%', label: 'Building Control Approval Rate' },
  { value: '320+', label: 'Active Projects in Engineering' },
]

const advantages = [
  {
    number: '01',
    title: 'Unique Projects',
    description:
      'Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin',
  },
  {
    number: '02',
    title: 'Value Convenience',
    description: 'Ullamcorper dignissim cras lobortis feugiat vivamus risus',
  },
  {
    number: '03',
    title: 'Implement New Ideas',
    description:
      'Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus',
  },
]
</script>

<template>
  <section class="py-20 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-12">
        <p class="text-sm font-semibold uppercase tracking-wider text-sky-500 flex items-center gap-2">
            <span class="block w-6 h-0.5 bg-yellow-500"></span>
            Sustainable Construction
        </p>
        <h2 class="mt-2 text-4xl font-extrabold text-gray-100 leading-tight">
            Why Choose <span class="text-emerald-600">Us</span>
        </h2>
      </div>
      <!-- Two Columns -->
      <div class="flex flex-col md:flex-row gap-16">
        <!-- Left: Stats -->
        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 md:p-10 w-full md:basis-1/2">
          <ul class="grid grid-cols-2 grid-rows-2 gap-y-12 gap-x-8 h-full">
            <li
            v-for="(stat, i) in stats"
            :key="i"
            class="flex flex-col items-center justify-center text-center"
            >
            <h3 class="text-5xl font-extrabold text-emerald-600 leading-tight">
                {{ stat.value }}
            </h3>
            <p class="mt-3 text-base font-medium text-gray-900 dark:text-gray-200 max-w-[10rem]">
                {{ stat.label }}
            </p>
            </li>
          </ul>
        </div>

        <!-- Right: Advantages -->
        <div class="flex-1">
          <p class="text-gray-700 dark:text-gray-300 mb-10 leading-relaxed max-w-prose">
            Elementum sagittis vitae et leo duis ut diam. In nibh mauris cursus mattis molestie a iaculis at.
          </p>
          <ul class="space-y-10">
            <li v-for="(adv, i) in advantages" :key="i" class="flex items-start gap-6">
              <span class="text-3xl font-extrabold text-gray-300 dark:text-gray-600 select-none">
                {{ adv.number }}
              </span>
              <div>
                <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {{ adv.title }}
                </h4>
                <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {{ adv.description }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
