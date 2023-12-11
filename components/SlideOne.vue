<script setup>
import { watch } from "vue";
import { animate } from "motion";
import { store } from "./store.js";

const blackBarFinished = ref(false);

watch(
  () => store.headerAnimationFinished,
  async (newValue) => {
    if (newValue) {
      await animate(
        ".black-bar",
        {
          width: ["0", "512px"],
        },
        {
          duration: 0.33333,
        }
      ).finished;
      blackBarFinished.value = true;
      animate(
        ".black-bar",
        {
          width: ["512px", "0"],
          transform: ["translateX(0)", "translateX(512px)"],
        },
        {
          duration: 0.33333,
          delay: 0.5,
        }
      );
      setTimeout(() => {
        document.querySelector(".black-bar").style.display = "none";
      }, 750);
    }
  }
);
</script>

<template>
  <section>
    <div v-show="store.headerAnimationFinished" class="black-bar"></div>
    <h2 v-show="blackBarFinished">Fullstack Developer</h2>
  </section>
</template>

<style scoped>
section {
  padding: 3rem 2rem;
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
}
</style>
