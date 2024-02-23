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
header {
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
