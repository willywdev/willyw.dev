<script setup>
import SocialIcon from "./SocialIcon.vue";
import socials from "./assets/socials.json";
import { animate, inView } from "motion";
import { onMounted, onUnmounted } from "vue";

let mouseX = ref(0);
let mouseY = ref(0);

onMounted(() => {
  inView("header", () => {
    animate("header", {
      scale: [3.3333, 1],
      opacity: [0, 1],
      easing: "ease",
    });
    return () => {
      animate("header", {
        scale: [1, 3.3333],
        opacity: [1, 0],
        easing: "ease",
      });
    };
  });
  window.addEventListener("mousemove", mouseMove);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", mouseMove);
});

function mouseMove(event) {
  mouseX.value = event.clientX / 166.66666;
  mouseY.value = event.clientY / 166.66666;
}
</script>

<template>
  <header>
    <h1 :style="{ transform: `translate(${mouseX}px, ${mouseY}px)` }">
      <span class="colored underline">willy</span>w.dev
    </h1>
    <nav>
      <ul :style="{ transform: `translate(${mouseX}px, ${mouseY}px)` }">
        <li v-for="social in socials">
          <SocialIcon :link="social.url" :name="social.icon" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
@font-face {
  font-family: "BeauSans";
  src: url(/BT-BeauSans-Regular.ttf) format("truetype");
}
header {
  padding: 1.333rem 2rem 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-family: "BeauSans";
}

h1 {
  user-select: none;
}

.colored {
  color: var(--accent);
}

.underline {
  background-image: url(/images/underline.svg);
  background-repeat: no-repeat;
  background-size: 100% 0.5rem;
  background-position: 0 105%;
  transform: scaleX(-1);
}

ul {
  display: flex;
  align-items: center;
  gap: 1rem;
  opacity: 0.9;
}

ul:hover {
  opacity: 1;
}

ul {
  transition: opacity 0.2s ease-in-out;
}

@media (max-width: 768px) {
  header {
    padding: 1rem 0;
    justify-content: center;
  }
  nav {
    display: none;
  }
  h1 {
    justify-content: center;
  }
}
</style>
