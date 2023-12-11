import { reactive } from "vue";

// To pass data between sibling components, we can use a store.

export const store = reactive({
  headerAnimationFinished: false,
});
