// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-icon",
    "@nuxt/image",
    "nuxt-purgecss",
    "@nuxtjs/fontaine",
  ],
  build: {
    analyze: true,
  },
  css: [
    "/assets/styles/variables.css",
    "/assets/fonts/font.css",
    "/assets/styles/hamburgers.css",
  ],
});