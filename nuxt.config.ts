import { imagetools } from 'vite-imagetools'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
  ],
  vite: {
    plugins: [
      imagetools(),
    ],
  },
  css: [
    '@/assets/css/tailwind.css',
    'swiper/swiper-bundle.css',
    'prismjs/themes/prism-tomorrow.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      strapiBaseUrl: process.env.NUXT_PUBLIC_STRAPI_BASE_URL || 'http://localhost:1337'
    },
  },
})
