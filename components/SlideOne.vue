<script setup>
import { watch } from "vue";
import { animate } from "motion";
import { store } from "./store.js";
import VueWriter from "vue-writer";

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
          scale: [0, 1],
          opacity: [0, 1],
        },
        {
          duration: 0.3333,
        }
      ).finished;
    }
  }
);
</script>

<template>
  <section>
    <div class="typewriter" v-show="store.headerAnimationFinished">
      <h2>
        <VueWriter
          :array="vueWriterArray"
          :typeSpeed="53.3333"
          :eraseSpeed="33.333" />
      </h2>
    </div>
  </section>
  <section class="second-section"></section>
</template>

<style scoped>
section {
  padding: 3rem 2rem;
  overflow: hidden;
  position: relative;
}
.typewriter {
  background: #111111;
  padding: 1rem;
  margin-left: -2rem;
  width: 100dvw;
  left: 0;
  box-shadow: 0px 20px 40px -20px rgb(5, 5, 5) inset,
    0px -10px 20px -10px rgb(5, 5, 5) inset;
}

h2 {
  text-align: center;
  display: inline;
  font-size: 3rem;
}
</style>
