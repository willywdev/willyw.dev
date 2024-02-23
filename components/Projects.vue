<script>
import Card from "./Card.vue";
import projectsData from "@/assets/projects.json";

export default {
  data() {
    return {
      projects: projectsData,
    };
  },
  components: {
    Card,
  },
};
</script>

<template>
  <section>
    <h2>>_ projects</h2>
    <article v-for="project in projects" :key="project.projectTitle">
      <Card
        :projectBackground="project.background"
        :projectIcon="project.projectIcon"
        :projectTitle="project.projectTitle"
        :projectDescription="project.projectDescription"
        :projectRepo="project.projectRepo"
        :projectLiveLink="project.projectLiveLink" />
    </article>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}
</style>
