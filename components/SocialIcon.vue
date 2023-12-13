<script setup>
const { link, name } = defineProps(["link", "name"]);
let iconSize = ref("32");

onMounted(() => {
  if (window.innerWidth < 768) {
    iconSize.value = "26";
  }
});
</script>

<template>
  <NuxtLink :to="link" target="_blank"
    ><Icon :name="name" :size="iconSize"
  /></NuxtLink>
</template>
