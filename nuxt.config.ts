// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-icon", "@nuxt/image", "@nuxtjs/fontaine"],
  css: [
    "sanitize.css",
    "sanitize.css/system-ui.css",
    "/assets/styles/hamburgers.css",
    "/assets/styles/global.scss",
  ],
  runtimeConfig: {
    admin: "",
    password: "",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./assets/styles/variables.scss";',
        },
      },
    },
  },
});
