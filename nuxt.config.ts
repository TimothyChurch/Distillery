// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/ui',
    'nuxt-mongoose',
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],
  mongoose: {
    uri: 'mongodb+srv://TChurch:EricAvis1989@galvestondistillingco.pjkvjym.mongodb.net/', // TODO Move to env
    modelsDir: 'models',
    devtools: true
  }
})