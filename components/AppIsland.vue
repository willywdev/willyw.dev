<script setup>
const props = defineProps({
  bgColor: String,
  borderColor: String,
});

const classComputed = computed(() => {
  const bgColor = props.bgColor || "bg-zinc-800";
  const borderColor = props.borderColor || "border-zinc-700";
  return `${bgColor} ${borderColor} p-6 border shadow-xl rounded-xl tracking-wide`;
});
</script>

<template>
  <article :class="classComputed">
    <slot />
  </article>
</template>
