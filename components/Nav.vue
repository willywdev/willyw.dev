<template>
  <nav aria-label="Main navigation">
    <NuxtLink to="/"><span aria-hidden="true">_</span>home</NuxtLink>
    <NuxtLink to="/downloads"
      ><span aria-hidden="true">_</span>downloads</NuxtLink
    >
    <NuxtLink to="/skills"><span aria-hidden="true">_</span>skills</NuxtLink>
    <NuxtLink to="https://github.com/willywdev" target="_blank"
      ><span aria-hidden="true">_</span>github</NuxtLink
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
