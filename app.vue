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
    <Header />
    <LazyNuxtPage />
  </NuxtLayout>
</template>

<style is:global>
@import url("@/assets/fonts/font.css");

body {
  padding: 14px;
}
a {
  all: unset;
  cursor: pointer;
}
a:hover {
  text-shadow: 1px 1px 5px #ffffff7b, 1px 1px 5px #cccccc82;
}

@media (min-width: 640px) {
  body {
    padding: 25px;
  }
}
@media (min-width: 768px) {
  body {
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 30px;
  }
}
@media (min-width: 1024px) {
  body {
    padding-left: 18%;
    padding-right: 18%;
    padding-top: 50px;
  }
}
</style>
