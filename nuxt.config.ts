export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-icon", "@tresjs/nuxt", "@nuxtjs/robots"],
  app: {
    head: {
      title: "Willy's Portfolio",
    },
  },
});
