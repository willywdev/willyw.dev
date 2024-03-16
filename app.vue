<script setup>
import AppIsland from "./components/AppIsland.vue";
</script>

<template>
  <main class="flex flex-col items-center w-screen h-screen p-28">
    <section class="grid grid-flow-col gap-4">
      <app-island>
        <h1 class="mb-2 text-4xl tracking-wide text-center">Wilhelm Werwein</h1>
        <p class="text-2xl tracking-wide">
          Processing coffee and ideas into code
        </p>
      </app-island>
      <app-island bg-color="bg-[#414f8a]" border-color="border-[#5d6db0]">
        <img
          src="/macavatar.webp"
          alt="avatar"
          class="w-32 h-32 rounded-full" />
      </app-island>
    </section>
  </main>
</template>
