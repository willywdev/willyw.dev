<script>
import "@/assets/styles/hamburgers.css";

export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    triggerMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
  computed: {
    hamburgerClasses() {
      return `hamburger hamburger--elastic   ${
        !this.isMenuOpen ? "" : "is-active"
      }`;
    },
  },
};
</script>
<template>
  <header>
    <NuxtLink class="logo-container" to="/">
      <NuxtImg src="/logo.svg" alt="Logo" />
      <h1>willyw.dev</h1>
    </NuxtLink>
    <button :class="hamburgerClasses" type="button" @click="triggerMenu">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  </header>
  <div v-if="isMenuOpen"><nav></nav></div>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo-container {
  all: unset;
  cursor: pointer;
  display: flex;
  gap: 5px;
  align-items: center;
}
img {
  width: 50px;
  height: auto;
}
</style>
