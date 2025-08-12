import { imagetools } from 'vite-imagetools'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    ['@nuxtjs/i18n', {
      locales: [
        { code: 'en', iso: 'en', file: 'en.json' },
        { code: 'id', iso: 'id', file: 'id.json' }
      ],
      lazy: true,
      langDir: 'locales',
      strategy: 'prefix_except_default',
      defaultLocale: 'en',
    }]
  ],

  vite: {
    plugins: [
      imagetools(),
    ],
    build: {
      cssCodeSplit: false
    }
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
  
  nitro: {
    routeRules: {
      '/svg/**': {
        headers: {
          'cache-control': 'public, max-age=31536000, immutable'
        },
      },
    },
  },
  
  app: {
    head: {
      title: 'PT Ajaxteron Company',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Official website of PT Ajaxteron Company - leading solutions in business and technology.' },
        { name: 'author', content: 'PT Ajaxteron' },
        { name: 'robots', content: 'index, follow' },
        { name: 'keywords', content: 'ajaxteron company, ajaxteron, ajaxteron company indonesia, ajaxteron indonesia, ajaxteron company indonesia' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    }
  }
})
