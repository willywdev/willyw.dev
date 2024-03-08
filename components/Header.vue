<script setup>
import Nav from "./Nav.vue";

const isMenuOpen = ref(false);

function triggerMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

const hamburgerClasses = computed(() => {
  return `mobile-nav hamburger hamburger--elastic   ${
    !isMenuOpen.value ? "" : "is-active"
  }`;
});
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

<style lang="scss" scoped>
.desktop-nav {
  display: none;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.333s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media (min-width: 768px) {
  .desktop-nav {
    display: block;
  }

  .mobile-nav {
    display: none;
  }
}
</style>
