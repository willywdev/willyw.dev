<script>
import Nav from "./Nav.vue";

export default {
  components: {
    Nav,
  },
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
      return `mobile-nav hamburger hamburger--elastic   ${
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
    <div class="desktop-nav"><Nav /></div>
  </header>
  <transition>
    <div v-if="isMenuOpen"><Nav /></div>
  </transition>
</template>

<style scoped>
@import url("@/assets/styles/hamburgers.css");

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
.desktop-nav {
  display: none;
}
@media (min-width: 768px) {
  .desktop-nav {
    display: block;
  }
  .desktop-nav > nav {
    flex-direction: row;
    gap: 1.3rem;
  }
  .mobile-nav {
    display: none;
  }
}
</style>
