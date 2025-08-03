<script setup lang="ts">
defineProps<{
  subtitle: string
  title: string
  description: string
  tabs: {
    label: string
    image: string
    duration: string
    price: string
    content: string[]
  }[]
}>()

const activeTab = ref(0)
</script>

<template>
  <section class="tabs section bg-gray-900 text-gray-100 py-20">
    <div class="container max-w-7xl mx-auto px-4">
      <!-- Header -->
      <div class="section_header mb-12 space-y-4 mx-auto" data-aos="fade-up">
        <p class="text-sm font-semibold uppercase tracking-wider text-sky-500 flex items-center gap-2">
          <span class="block w-6 h-0.5 bg-yellow-500 rounded"></span>
          {{ subtitle }}
        </p>
        <h2 class="text-4xl font-extrabold leading-tight">
          Spotlight <span class="text-emerald-400">{{ title }}</span>
        </h2>
        <p class="text-gray-400 text-base md:text-lg leading-relaxed">
          {{ description }}
        </p>
      </div>

      <!-- Tabs Nav -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="activeTab = index"
          class="px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300"
          :class="{
            'bg-emerald-500 text-white shadow-md': activeTab === index,
            'bg-gray-800 text-emerald-300 hover:bg-emerald-500 hover:text-white hover:shadow':
              activeTab !== index,
          }"
          type="button"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Tabs Content -->
      <Transition name="fade" mode="out-in">
        <div
          v-if="tabs[activeTab]"
          :key="activeTab"
          class="grid md:grid-cols-2 gap-10 items-start"
          data-aos="fade-up"
        >
          <!-- Image -->
          <div class="overflow-hidden rounded-2xl shadow-2xl">
            <img
              :src="tabs[activeTab]?.image"
              :alt="tabs[activeTab]?.label"
              class="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <!-- Info + Description -->
          <div class="space-y-8">
            <!-- Info Card -->
            <div class="bg-gray-800 rounded-xl p-6 shadow-lg w-full max-w-sm">
              <table class="w-full text-sm">
                <tbody>
                  <tr class="border-b border-gray-700">
                    <td class="py-2 font-semibold text-gray-300">Duration</td>
                    <td class="py-2 text-gray-100">{{ tabs[activeTab]?.duration }}</td>
                  </tr>
                  <tr>
                    <td class="py-2 font-semibold text-gray-300">Price</td>
                    <td class="py-2 text-gray-100">{{ tabs[activeTab]?.price }}</td>
                  </tr>
                </tbody>
              </table>
              <NuxtLink
                to="/contact"
                class="mt-6 inline-block w-full bg-emerald-500 hover:bg-emerald-600 text-white text-center font-semibold py-2.5 px-4 rounded-md transition"
              >
                Get Service
              </NuxtLink>
            </div>

            <!-- Description Texts -->
            <div class="space-y-4">
              <p
                v-for="(text, i) in tabs[activeTab]?.content"
                :key="i"
                class="text-gray-300 leading-relaxed text-base"
              >
                {{ text }}
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
