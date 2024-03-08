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
      <img src="/img/macavatar.webp" alt="Logo" />
    </a>
    <button
      :class="hamburgerClasses"
      type="button"
      @click="triggerMenu"
      aria-label="Toggle navigation menu">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
    <div class="desktop-nav"><Nav /></div>
  </header>
  <transition>
    <div v-if="isMenuOpen" class="mobile-nav"><Nav /></div>
  </transition>
</template>

<style lang="scss" scoped></style>
