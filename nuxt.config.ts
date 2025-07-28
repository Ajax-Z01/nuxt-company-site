// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '@/assets/css/tailwind.css',
    'swiper/swiper-bundle.css'
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