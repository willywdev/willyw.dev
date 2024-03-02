<script>
import fetchData from "@/utils/fetchData";

export default {
  data() {
    return {
      skills: null,
    };
  },
  async created() {
    this.skills = await fetchData("api/skills");
  },
};
</script>

<template>
  <Head>
    <title>willyw.dev \ skills</title>
  </Head>
  <section>
    <h2>skills</h2>
    <div class="icon-container">
      <Icon
        v-for="skill in skills?.sort()"
        :key="skill.name"
        :name="skill.icon"
        size="52" />
    </div>
  </section>
</template>

<style scoped>
.icon-container {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
}
</style>
