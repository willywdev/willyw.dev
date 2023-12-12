<script setup>
import Header from "./components/Header.vue";
import SlideOne from "./components/SlideOne.vue";
import { SpeedInsights } from "@vercel/speed-insights/nuxt";

let mouseX = ref(0);
let mouseY = ref(0);

onMounted(() => {
  window.addEventListener("mousemove", mouseMove);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", mouseMove);
});

function mouseMove(event) {
  mouseX.value = event.clientX / 166.66666;
  mouseY.value = event.clientY / 166.66666;
}

provide("mouseX", mouseX);
provide("mouseY", mouseY);

useSeoMeta({
  description: "Software Developer | JavaScript | Fullstack",
  ogTitle: "willyw.dev",
  ogDescription: "Software Developer | JavaScript | Fullstack",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "[twitter:title]",
  twitterDescription: "Software Developer | JavaScript | Fullstack",
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
      href: "/favicon.ico",
    },
  ],
});
</script>

<template>
  <SpeedInsights />
  <main>
    <Header />
    <SlideOne />
  </main>
</template>

<style global>
:root {
  --accent: #00ffca;
  --accent-hover: #6bffc1;
  --background: #252422;
  --font-color: #fafafa;
}

@font-face {
  font-family: "BeauSans";
  src: url(/BT-BeauSans-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "HubotSans";
  src: url(/Hubot-Sans.woff2) format("woff2");
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: "BeauSans", Arial, Helvetica, sans-serif;
  line-height: 1.5;
  background: var(--background);
  overflow-x: hidden;
}

body {
  color: var(--font-color);
  background-image: url(/images/background.svg);
  height: 100dvh;
  width: 100%;
  background-size: cover;
  background-position: center;
}

a {
  color: var(--font-color);
  text-decoration: none;
  transition: color 0.5s ease-in-out;
}

a:hover {
  color: var(--accent);
}

ul {
  list-style: none;
}

h2 {
  font-family: "HubotSans";
}

@media (min-width: 1024px) {
  main {
    width: 44.44444%;
    margin: 0 auto;
  }
}
</style>
