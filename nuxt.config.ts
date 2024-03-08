// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-icon", "@nuxt/image", "@nuxtjs/fontaine"],
  css: ["/assets/styles/hamburgers.css"],
  runtimeConfig: {
    admin: "",
    password: "",
  },
});
