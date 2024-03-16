<script setup>
const props = defineProps({
  borderColor: String,
});

const classComputed = computed(() => {
  const borderColor = props.borderColor || "border-zinc-700";
  return `w-full h-full aspect-square ${borderColor} border shadow-xl rounded-xl tracking-wide flex flex-col items-center justify-center`;
});
</script>

<template>
  <article :class="classComputed">
    <slot />
  </article>
</template>
