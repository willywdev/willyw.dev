<script>
import CodeText from "./CodeText.vue";
</script>

<template>
  <nav aria-label="Main navigation">
    <nuxt-link to="/"><CodeText>HOME</CodeText></nuxt-link>
    <nuxt-link to="/downloads"><CodeText>DOWNLOADS</CodeText></nuxt-link>
    <nuxt-link to="/skills"><CodeText>SKILLS</CodeText></nuxt-link>
    <nuxt-link to="https://github.com/willywdev" target="_blank"
      ><CodeText>GITHUB</CodeText></nuxt-link
    >
    <nuxt-link to="https://ko-fi.com/willywdev" target="_blank"
      ><img
        src="/img/Ko-fi_HEART.gif"
        class="ko-fi"
        alt="Buy me a coffee on Ko-fi"
    /></nuxt-link>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  color: $dark-color;
}

.ko-fi {
  width: 40px;
  margin: 0;
  padding: 0;
}

img {
  width: 40px;
  margin: 0;
  padding: 0;
}
</style>
