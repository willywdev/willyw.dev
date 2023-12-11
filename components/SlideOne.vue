<script setup>
import { watch } from "vue";
import { animate, stagger } from "motion";
import { store } from "./store.js";

watch(
  () => store.headerAnimationFinished,
  (newValue) => {
    if (newValue) {
      animate(
        "h2",
        {
          x: [-2000, 50, 0],
        },
        {
          delay: stagger(1),
          duration: 1.3333,
        }
      );
    }
  }
);
</script>

<template>
  <h2 v-show="store.headerAnimationFinished">Hello World!</h2>
</template>

<style scoped>
h2 {
  text-align: center;
}
</style>
