<script setup>
import { watch } from "vue";
import { animate, spring } from "motion";
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
        },
        {
          duration: 0.3333,
        }
      ).finished;
      await animate(
        ".is-typed",
        {
          opacity: [0, 1],
        },
        {
          duration: 0.3333,
        }
      ).finished;
      await animate(
        ".line",
        {
          width: ["0px", "3px"],
          opacity: [0, 1],
          height: [0, "500px"],
          easing: spring(),
        },
        {
          duration: 1,
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
          :eraseSpeed="33.333"
          caret="underscore"
          class="textWriter" />
      </h2>
    </div>
  </section>
  <section class="second-section">
    <div class="line"></div>
  </section>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

section {
  padding: 3rem 2rem;
  overflow: hidden;
  position: relative;
  margin-bottom: -3rem;
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

.second-section {
  height: 100vh;
  width: 100dvw;
  position: relative;
  overflow: hidden;
}

.line {
  width: 0;
  height: 5px;
  background: #111111;
  position: absolute;
  top: 0;
}
</style>
