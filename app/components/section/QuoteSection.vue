<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import FadeInOnScroll from '~/components/transition/FadeInOnScroll.vue'

const gearOuter = ref<SVGSVGElement | null>(null)
const gearInner = ref<SVGSVGElement | null>(null)

onMounted(() => {
  let angleOuter = 0
  let angleInner = 0

  let speed = 1         // current speed (deg per frame)
  let targetSpeed = 1   // desired speed
  let minSpeed = 0
  let maxSpeed = 1
  let easing = 0.05       // smooth interpolation factor (0-1)

  const animate = () => {
    speed += (targetSpeed - speed) * easing

    angleOuter += speed
    angleInner += speed * 1

    if (gearOuter.value)
      gearOuter.value.style.transform = `rotate(${angleOuter}deg)`
    if (gearInner.value)
      gearInner.value.style.transform = `rotate(${angleInner}deg)`

    requestAnimationFrame(animate)
  }

  const cycle = () => {
    targetSpeed = minSpeed
    setTimeout(() => {
      targetSpeed = 0.05
      setTimeout(() => {
        targetSpeed = maxSpeed
        setTimeout(cycle, 4000)
      }, 2000)
    }, 1500)
  }

  animate()
  setTimeout(cycle, 4000) // mulai siklus pertama setelah 4s
})
</script>

<template>
  <section
    class="relative py-20 bg-primary-light dark:bg-primary-dark text-white overflow-hidden"
  >
    <div class="container max-w-7xl mx-auto px-4">
      <div class="relative z-10 space-y-10">
        <!-- Subtitle -->
        <FadeInOnScroll>
          <div class="flex items-center gap-3">
            <span class="block w-10 h-0.5 bg-yellow-400"></span>
            <span class="text-white text-sm uppercase tracking-wider font-bold">
              Who we are
            </span>
          </div>
        </FadeInOnScroll>

        <!-- Title + Gear Background -->
        <div class="relative flex items-start">
          <!-- Layered Gears -->
          <div class="absolute -left-[150px] -top-[200px]">
            <!-- Gear Outer -->
            <svg
              ref="gearOuter"
              class="w-72 h-72 gear-outer animate-spin-pulse"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 15.5C13.93 15.5 15.5 13.93 15.5 12C15.5 10.07 13.93 8.5 12 8.5C10.07 8.5 8.5 10.07 8.5 12C8.5 13.93 10.07 15.5 12 15.5Z" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.43 12.98C19.46 12.66 19.5 12.34 19.5 12C19.5 11.66 19.46 11.34 19.43 11.02L21.54 9.37C21.71 9.24 21.76 9 21.65 8.8L19.65 5.2C19.54 5 19.31 4.93 19.11 5L16.56 6C16.05 5.62 15.5 5.31 14.91 5.08L14.5 2.39C14.47 2.17 14.29 2 14.06 2H9.94C9.71 2 9.53 2.17 9.5 2.39L9.09 5.08C8.5 5.31 7.95 5.62 7.44 6L4.89 5C4.69 4.93 4.46 5 4.35 5.2L2.35 8.8C2.24 9 2.29 9.24 2.46 9.37L4.57 11.02C4.54 11.34 4.5 11.66 4.5 12C4.5 12.34 4.54 12.66 4.57 12.98L2.46 14.63C2.29 14.76 2.24 15 2.35 15.2L4.35 18.8C4.46 19 4.69 19.07 4.89 19L7.44 18C7.95 18.38 8.5 18.69 9.09 18.92L9.5 21.61C9.53 21.83 9.71 22 9.94 22H14.06C14.29 22 14.47 21.83 14.5 21.61L14.91 18.92C15.5 18.69 16.05 18.38 16.56 18L19.11 19C19.31 19.07 19.54 19 19.65 18.8L21.65 15.2C21.76 15 21.71 14.76 21.54 14.63L19.43 12.98Z"
              />
            </svg>

            <!-- Gear Inner (centered inside outer) -->
            <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <svg
                ref="gearInner"
                class="w-44 h-44 gear-inner animate-spin-pulse-slow"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 15.5C13.93 15.5 15.5 13.93 15.5 12C15.5 10.07 13.93 8.5 12 8.5C10.07 8.5 8.5 10.07 8.5 12C8.5 13.93 10.07 15.5 12 15.5Z" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.43 12.98C19.46 12.66 19.5 12.34 19.5 12C19.5 11.66 19.46 11.34 19.43 11.02L21.54 9.37C21.71 9.24 21.76 9 21.65 8.8L19.65 5.2C19.54 5 19.31 4.93 19.11 5L16.56 6C16.05 5.62 15.5 5.31 14.91 5.08L14.5 2.39C14.47 2.17 14.29 2 14.06 2H9.94C9.71 2 9.53 2.17 9.5 2.39L9.09 5.08C8.5 5.31 7.95 5.62 7.44 6L4.89 5C4.69 4.93 4.46 5 4.35 5.2L2.35 8.8C2.24 9 2.29 9.24 2.46 9.37L4.57 11.02C4.54 11.34 4.5 11.66 4.5 12C4.5 12.34 4.54 12.66 4.57 12.98L2.46 14.63C2.29 14.76 2.24 15 2.35 15.2L4.35 18.8C4.46 19 4.69 19.07 4.89 19L7.44 18C7.95 18.38 8.5 18.69 9.09 18.92L9.5 21.61C9.53 21.83 9.71 22 9.94 22H14.06C14.29 22 14.47 21.83 14.5 21.61L14.91 18.92C15.5 18.69 16.05 18.38 16.56 18L19.11 19C19.31 19.07 19.54 19 19.65 18.8L21.65 15.2C21.76 15 21.71 14.76 21.54 14.63L19.43 12.98Z"
                />
              </svg>
            </div>
          </div>

          <!-- Title -->
          <FadeInOnScroll>
            <h3
              class="relative font-sans font-bold text-3xl sm:text-4xl md:text-5xl leading-snug text-white text-left"
            >
              True wealth grows from the soil of knowledge, is built with the strength of innovation, and nurtured by the hands of experience.
            </h3>
          </FadeInOnScroll>
        </div>

        <!-- Author -->
        <FadeInOnScroll>
          <span
            class="block text-yellow-400 text-lg font-semibold tracking-wide text-left"
          >
            — Benjamin Miller
          </span>
        </FadeInOnScroll>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes spin-pulse {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.gear-outer,
.gear-inner {
  transform-origin: center;
  filter: blur(0.5px);
}

.bg-primary-light {
  background-color: #047857;
}
.bg-primary-dark {
  background-color: #065f46;
}

/* Gear colors - amber warm tones */
.gear-outer {
  color: #facc15; /* amber-400 */
  opacity: 0.15;
}
.gear-inner {
  color: #fde68a; /* amber-300 */
  opacity: 0.08;
}
</style>
