// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-icon", "@nuxt/image", "@nuxtjs/fontaine"],
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  css: [
    "/assets/styles/variables.css",
    "/assets/fonts/font.css",
    "/assets/styles/hamburgers.css",
  ],
  runtimeConfig: {
    admin: "",
    password: "",
  },
});
