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

<style lang="scss" scoped></style>
