export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-icon"],
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
