// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: [
    '@nuxt/ui',
    'nuxt-mongoose',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-icon'
  ],
  mongoose: {
    uri: 'mongodb+srv://TChurch:EricAvis1989@galvestondistillingco.pjkvjym.mongodb.net/', // TODO Move to env
    modelsDir: 'models',
    devtools: true
  }
})