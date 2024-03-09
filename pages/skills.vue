<script setup>
import Spinner from "@/components/Spinner.vue";

const { data: skills, pending: isLoading, error } = useFetch("/api/skills");

const sortedSkills = computed(() => {
  return skills.value ? skills.value.sort() : [];
});
</script>

<template>
  <Head>
    <title>wilhelm werwein \ skills</title>
  </Head>
  <section>
    <h2>skills</h2>
    <div v-if="isLoading.value"><Spinner /></div>
    <div v-else class="icon-container">
      <Icon
        v-for="skill in sortedSkills"
        :key="skill.name"
        :name="skill.icon"
        size="52" />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
