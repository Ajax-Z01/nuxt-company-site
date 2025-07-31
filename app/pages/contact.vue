<script setup lang="ts">
import { reactive } from 'vue'
import HeaderPage from '@/components/HeaderPage.vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  alert(`Thank you, ${form.name}! Your message has been received.`)
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<template>
  <!-- Hero Header -->
  <HeaderPage
    title="Contact Us"
    subtitle="Get in Touch"
    current="Contact"
    imageWebp="/img/plan.webp"
    imagePng="/img/plan.png"
  />

  <!-- Contact Form -->
  <section class="max-w-3xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-4">Send Us a Message</h1>
    <form class="space-y-4 max-w-md mx-auto" @submit.prevent="submitForm">
      <div>
        <label class="block mb-1 font-semibold" for="name">Name</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label class="block mb-1 font-semibold" for="email">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label class="block mb-1 font-semibold" for="message">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          rows="4"
          required
          class="w-full border border-gray-300 rounded px-3 py-2"
        ></textarea>
      </div>

      <button
        type="submit"
        class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
      >
        Send Message
      </button>
    </form>
  </section>
</template>
