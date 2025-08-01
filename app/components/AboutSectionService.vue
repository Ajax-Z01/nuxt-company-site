<script setup lang="ts">
// Jika ingin data dinamis, bisa dipisah ke sini
const achievements = [
  {
    label: 'Successfully Completed Projects',
    iconPath:
      'M36.4062 6.5625L21.4062 0.3125C20.9375 0.15625 20.4688 0.078125 20 0.078125C19.4531 0.078125 18.9844 0.15625 18.5156 0.3125L3.51562 6.5625C2.10938 7.1875 1.25 8.51562 1.25 10C1.25 25.5469 10.1562 36.25 18.5156 39.7656C19.4531 40.1562 20.4688 40.1562 21.4062 39.7656C28.125 36.9531 38.75 27.3438 38.75 10C38.75 8.51562 37.8125 7.1875 36.4062 6.5625ZM20.4688 37.4219C20.1562 37.5781 19.7656 37.5781 19.4531 37.4219C11.875 34.375 3.75 23.75 3.75 10C3.75 9.53125 3.98438 9.0625 4.45312 8.90625L19.4531 2.65625C19.7656 2.5 20.1562 2.5 20.4688 2.65625L35.4688 8.90625C35.9375 9.0625 36.25 9.53125 36.1719 10C36.25 23.75 28.125 34.375 20.4688 37.4219ZM31.0938 12.0312C30.7031 11.7188 30.1562 11.7188 29.7656 12.0312L17.0312 24.6875L11.6406 19.2969C11.25 18.9062 10.625 18.9062 10.3125 19.2969L9.60938 19.9219C9.21875 20.3125 9.21875 20.8594 9.60938 21.25L16.3281 28.0469C16.7188 28.3594 17.2656 28.3594 17.6562 28.0469L31.7188 14.0625C32.1094 13.6719 32.1094 13.125 31.7188 12.7344L31.0938 12.0312Z',
  },
  {
    label: 'Simplicity In Design With Practically In Mind',
    iconPath:
      'M39.4688 28.8281L29.8594 19.2188L33.7656 15.3125L39.0781 10C40.5625 8.51562 40.5625 6.17188 39.0781 4.6875L35.5625 1.17188C34.8594 0.390625 33.9219 0 32.9062 0C31.9688 0 31.0312 0.390625 30.25 1.17188L24.9375 6.48438L21.0312 10.3906L11.4219 0.78125C10.9531 0.3125 10.3281 0 9.70312 0C9.07812 0 8.45312 0.3125 7.98438 0.78125L0.953125 7.73438C-0.0625 8.75 -0.0625 10.3125 0.953125 11.25L10.5625 20.8594L1.73438 29.6875L0.25 38.125C0.015625 39.2969 1.10938 40.2344 2.125 40L10.5625 38.5156L19.3906 29.6875L29 39.2969C29.3906 39.7656 30.0156 40 30.7188 40C31.3438 40 31.9688 39.7656 32.4375 39.2969L39.4688 32.2656C40.4844 31.3281 40.4844 29.7656 39.4688 28.8281ZM32.0469 2.89062C32.3594 2.57812 33.4531 2.57812 33.8438 2.89062L37.3594 6.40625C37.8281 6.95312 37.8281 7.73438 37.3594 8.20312L33.7656 11.7969L28.4531 6.48438L32.0469 2.89062ZM2.67188 9.53125L9.70312 2.57812L14.0781 6.875L11.0312 10C10.7969 10.2344 10.7969 10.625 11.0312 10.8594L11.8906 11.7188C12.125 11.9531 12.5156 11.9531 12.75 11.7188L15.875 8.67188L19.3125 12.1094L12.2812 19.1406L2.67188 9.53125ZM9.3125 36.25L2.90625 37.3438L4 30.9375L26.6562 8.28125L31.9688 13.5938L9.3125 36.25ZM30.7188 37.5781L21.1094 27.9688L28.1406 20.9375L31.5781 24.375L28.5312 27.5C28.2969 27.7344 28.2969 28.125 28.5312 28.3594L29.3906 29.2188C29.625 29.4531 30.0156 29.4531 30.25 29.2188L33.375 26.1719L37.75 30.5469L30.7188 37.5781Z',
  },
  {
    label: 'High Level of Construction Control Approval',
    iconPath:
      'M37.75 27.5V25C37.75 17.1094 32.4375 10.4688 25.25 8.35938V7.5C25.25 6.17188 24.0781 5 22.75 5H17.75C16.3438 5 15.25 6.17188 15.25 7.5V8.35938C7.98438 10.4688 2.75 17.1094 2.75 25V27.5C1.34375 27.5 0.25 28.6719 0.25 30V32.5C0.25 33.9062 1.34375 35 2.75 35H37.75C39.0781 35 40.25 33.9062 40.25 32.5V30C40.25 28.6719 39.0781 27.5 37.75 27.5ZM5.25 25C5.25 18.9062 9 13.6719 14.3125 11.4062L16.3438 19.5312C16.4219 19.8438 16.6562 20 17.0469 20C17.3594 20 17.6719 19.6875 17.75 19.2969V7.5H22.75V19.2969C22.75 19.6875 23.0625 20 23.375 20C23.7656 20 24 19.8438 24.0781 19.5312L26.1094 11.4062C31.4219 13.6719 35.25 18.9062 35.25 25V27.5H5.25V25ZM37.75 32.5H2.75V30H37.75V32.5Z',
  },
]
</script>

<template>
  <section class="about section-nopb bg-gray-900 text-white py-20">
    <div class="container max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
      <!-- Content -->
      <div class="main md:w-1/2 space-y-8">
        <div class="section_header max-w-lg mb-12 space-y-4" data-aos="fade-up">
          <p class="text-sm font-semibold uppercase tracking-wider text-sky-400 flex items-center gap-2 max-w-max">
            <span class="block w-6 h-0.5 bg-yellow-500 rounded"></span>
            The choice is your time is ours
          </p>
          <h2 class="text-4xl md:text-5xl font-extrabold leading-tight">
            Solving Problems With the Help <span class="text-emerald-400">of Experts</span>
          </h2>
          <p class="text-gray-400 text-base md:text-lg leading-relaxed">
            Nibh praesent tristique magna sit amet purus gravida quis. Bibendum arcu vitae elementum curabitur vitae nulla facilisi. Quam vulputate dignissim suspendisse in
          </p>
        </div>


        <ul class="achievements flex flex-col space-y-6">
          <li
            v-for="(item, index) in achievements"
            :key="index"
            class="achievements_item flex items-center gap-4"
            data-aos="fade-up"
            :data-aos-delay="100 + index * 50"
          >
            <svg
              class="advantages-icon w-10 h-10 flex-shrink-0 text-emerald-400"
              viewBox="0 0 40 40"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path :d="item.iconPath" />
            </svg>
            <span class="label text-gray-300 font-semibold text-lg">
              {{ item.label }}
            </span>
          </li>
        </ul>
      </div>

      <!-- Media -->
      <div
        class="media md:w-1/2 rounded-lg overflow-hidden shadow-lg"
        data-aos="zoom-in"
        data-aos-duration="700"
      >
        <picture>
          <source srcset="/img/about/02.webp" type="image/webp" />
          <img
            src="/img/about/02.webp"
            alt="About media"
            class="w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </picture>
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
.achievements_item .advantages-icon {
  min-width: 2.5rem;
}
</style>
