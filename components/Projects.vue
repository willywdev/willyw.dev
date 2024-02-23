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
    <Card v-for="project in projects" :key="project.projectTitle">
      <Icon :name="project.projectIcon" />
      <h4>{{ project.projectTitle }}</h4>
      <p>{{ project.projectDescription }}</p>
      <nuxt-link :to="project.projectRepo">Repo</nuxt-link>
      <nuxt-link :to="project.projectLiveLink"
        ><Icon name="codicon:repo" />Demo</nuxt-link
      >
    </Card>
  </section>
</template>

<style scoped></style>
