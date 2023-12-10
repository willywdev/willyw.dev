export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-icon", "@tresjs/nuxt"],
  app: {
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
    head: {
      title: "Willy's Portfolio",
    },
  },
});
