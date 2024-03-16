// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/fontaine",
    "@nuxtjs/seo",
    "nuxt-aos",
  ],
  runtimeConfig: {
    admin: "",
    password: "",
  },
  tailwindcss: {
    cssPath: "~/assets/css/global.css",
    editorSupport: {
      autocompleteUtil: { as: "tailwindClasses" },
      generateConfig: true,
    },
  },
});
