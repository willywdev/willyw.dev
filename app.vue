<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<template>
  <NuxtLayout>
    <main>
      <Header />
      <LazyNuxtPage />
    </main>
  </NuxtLayout>
</template>

<style is:global>
html {
  scroll-behavior: smooth;
  background-color: var(--dark-color);
}
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
}
a {
  all: unset;
  cursor: pointer;
}
a:hover,
a:active,
a:focus {
  color: var(--accent-color);
}
img {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}
section {
  margin-bottom: 24px;
}
@media (min-width: 768px) {
  body {
    padding-left: 20%;
    padding-right: 20%;
    padding-top: 12px;
  }
}
@media (min-width: 1024px) {
  body {
    padding-left: 25%;
    padding-right: 25%;
    padding-top: 16px;
  }
}
</style>
