export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-icon",
    "@tresjs/nuxt",
    "@nuxtjs/robots",
    "nuxt-purgecss",
    "@artmizu/nuxt-prometheus",
  ],
  app: {
    head: {
      title: "Willy's Portfolio",
    },
  },
});