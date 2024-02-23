<template>
  <nav>
    <NuxtLink to="">_home</NuxtLink>
    <NuxtLink to="">_downloads</NuxtLink>
    <NuxtLink to="https://github.com/willywdev" target="_blank"
      >_github</NuxtLink
    >
    <nuxt-link to="mailto:kontakt@willyw.dev">_mail</nuxt-link>
    <nuxt-link to="https://ko-fi.com/willywdev" target="_blank"
      ><img src="/img/Ko-fi_HEART.gif" class="ko-fi"
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
</style>
