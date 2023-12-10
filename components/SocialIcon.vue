<script setup>
const { link, name } = defineProps(["link", "name"]);
</script>

<template>
  <NuxtLink :to="link" target="_blank"
    ><Icon :name="name" size="26"
  /></NuxtLink>
</template>
