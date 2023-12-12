<script setup>
import { watch } from "vue";
import { animate } from "motion";
import { store } from "./store.js";
import VueWriter from "vue-writer";

const mouseX = inject("mouseX");
const mouseY = inject("mouseY");

const vueWriterArray = [
  "Web Magician",
  "JavaScript Wizard",
  "Frontend Guru",
  "Fullstack Ninja",
  "TypeScript Trailblazer",
  "React Ranger",
  "Vue Virtuoso",
];

watch(
  () => store.headerAnimationFinished,
  async (newValue) => {
    if (newValue) {
      await animate(
        ".typewriter",
        {
          y: [2000, 0],
          display: ["none", "block"],
          opacity: [0, 1],
        },
        {
          duration: 0.6,
        }
      ).finished;
    }
  }
);
</script>

<template>
  <section>
    <div
      class="typewriter"
      :style="{
        transform: `translate(${mouseX}px, ${mouseY}px)`,
      }">
      <h2 v-show="store.headerAnimationFinished">
        <VueWriter
          :array="vueWriterArray"
          :typeSpeed="53.3333"
          :eraseSpeed="33.333" />
      </h2>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 5rem 2rem;
  overflow: hidden;
  position: relative;
}
.black-bar {
  background: black;
  position: fixed;
  height: 5rem;
}
h2 {
  text-align: center;
  display: inline;
  font-size: 3rem;
  filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5));
}
</style>
