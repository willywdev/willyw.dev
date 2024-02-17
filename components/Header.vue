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
    <a class="logo-container" href=".">
      <img src="/logo.svg" alt="Logo" />
      <h1>willyw.dev</h1>
    </a>
    <button :class="hamburgerClasses" type="button" @click="triggerMenu">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  </header>
  <transition>
    <div v-if="isMenuOpen">
      <nav>
        <NuxtLink to="">Home</NuxtLink>
        <NuxtLink to="">Downloads</NuxtLink>
        <NuxtLink to="https://github.com/willywdev" target="_blank"
          >Github</NuxtLink
        >
      </nav>
    </div>
  </transition>
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
nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.3rem;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.333s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
