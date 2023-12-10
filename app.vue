<script setup>
import Header from "./components/Header.vue";
import { SpeedInsights } from "@vercel/speed-insights/nuxt";

useSeoMeta({
  description: "[description]",
  ogTitle: "[og:title]",
  ogDescription: "[og:description]",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "[twitter:title]",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});
</script>

<template>
  <SpeedInsights />
  <Header />
</template>

<style global>
:root {
  --accent: #00cc66;
  --accent-hover: #00ff99;
  --background: #252422;
  --font-color: #fafafa;
}

@font-face {
  font-family: "Geist";
  src: url(/GeistVariableVF.ttf) format("truetype-variations");
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: "Geist", Arial, Helvetica, sans-serif;
  line-height: 1.5;
  background: var(--background);
  overflow-x: hidden;
}

body {
  color: var(--font-color);
  background-image: url(/images/background.svg);
  height: 500dvh;
  width: 100%;
  background-size: cover;
  background-position: center;
}

a {
  color: var(--font-color);
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}

a:hover {
  color: var(--accent);
}

ul {
  list-style: none;
}
</style>
