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
  padding: 0.5rem 1rem;
  gap: 1rem;
  background-color: #222222;
  border: 1px solid rgba(#000, 0.9);
  border-radius: 15px;
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))
    drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
}

a {
  color: $teal;
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
