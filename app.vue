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
  background: linear-gradient(
    to left,
    hsl(320, 3.7%, 15.88%) 0%,
    hsl(318.59, 3.76%, 15.89%) 9.5%,
    hsl(309.93, 4.15%, 15.97%) 19%,
    hsl(294.45, 5.68%, 16.26%) 28.4%,
    hsl(283.8, 9.39%, 17%) 37.8%,
    hsl(278.65, 14.38%, 18.12%) 46.8%,
    hsl(276.38, 20.06%, 19.6%) 55.5%,
    hsl(275.5, 25.86%, 21.43%) 63.7%,
    hsl(275.28, 31.38%, 23.57%) 71.4%,
    hsl(275.36, 36.37%, 25.98%) 78.3%,
    hsl(275.57, 40.77%, 28.64%) 84.5%,
    hsl(275.81, 44.56%, 31.54%) 89.8%,
    hsl(276.06, 47.79%, 34.64%) 94.1%,
    hsl(276.29, 50.53%, 37.94%) 97.3%,
    hsl(276.49, 52.84%, 41.43%) 99.3%,
    hsl(276.67, 54.78%, 45.1%) 100%
  );
  background-color: #1e1e1e;
}
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  width: 100vw;
  padding: 12px;
}
main {
  width: 100%;
}
a {
  all: unset;
  cursor: pointer;
}
hr {
  color: #ede7e7;
  margin-top: 12px;
  margin-bottom: 12px;
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
