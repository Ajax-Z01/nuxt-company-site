// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
  ],
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
  image: {
    provider: 'static',
    staticFilenames: '[publicPath]/img/[name].[ext]',
  },
  runtimeConfig: {
    public: {
      strapiBaseUrl: process.env.NUXT_PUBLIC_STRAPI_BASE_URL || 'http://localhost:1337'
    },
  },
})