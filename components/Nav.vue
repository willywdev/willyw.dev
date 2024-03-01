<template>
  <nav aria-label="Main navigation">
    <nuxt-link to="/"><span aria-hidden="true">_</span>home</nuxt-link>
    <nuxt-link to="/downloads"
      ><span aria-hidden="true">_</span>downloads</nuxt-link
    >
    <nuxt-link to="/skills"><span aria-hidden="true">_</span>skills</nuxt-link>
    <nuxt-link to="https://github.com/willywdev" target="_blank"
      ><span aria-hidden="true">_</span>github</nuxt-link
    >
    <nuxt-link to="https://ko-fi.com/willywdev" target="_blank"
      ><img
        src="/img/Ko-fi_HEART.gif"
        class="ko-fi"
        alt="Buy me a coffee on Ko-fi"
    /></nuxt-link>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.2rem;
}
.ko-fi {
  width: 44px;
}
a:active {
  transform: translateY(1px);
}
</style>
