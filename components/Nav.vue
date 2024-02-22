<template>
  <nav>
    <NuxtLink to="">home</NuxtLink>
    <NuxtLink to="">downloads</NuxtLink>
    <NuxtLink to="https://github.com/willywdev" target="_blank"
      >github</NuxtLink
    >
    <nuxt-link to="mailto:kontakt@willyw.dev">mail</nuxt-link>
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
a {
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  font-weight: 400;
}
</style>
