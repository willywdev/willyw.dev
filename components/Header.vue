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

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #161616;
  border: 1px solid #2b2a2a;
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))
    drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
  padding: 1rem;
  border-radius: 0 0 15px 15px;
}
.logo-container:focus,
.hamburger:focus {
  outline: 2px solid var(--accent-color);
}
.logo-container {
  all: unset;
  cursor: pointer;
  display: flex;
  gap: 12px;
  align-items: center;
}
img {
  width: 100px;
  height: auto;
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
.mobile-nav {
  margin-top: 2rem;
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
