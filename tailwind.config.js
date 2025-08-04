import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './nuxt.config.{js,ts}',
  ],
  safelist: [
    'translate-y-0',
    'translate-y-10',
    'opacity-0',
    'opacity-100',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    typography,
    require('@tailwindcss/line-clamp'),
  ],
}
