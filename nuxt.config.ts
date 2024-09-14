// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  css: ['~/assets/main.css'],
  plugins: [],
  build: {
    transpile: ['gsap'],
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  }
})