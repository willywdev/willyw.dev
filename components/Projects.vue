<script>
import ProjectCard from "./ProjectCard.vue";
import Button from "./Button.vue";
import fetchData from "@/utils/fetchData";

export default {
  data() {
    return {
      projects: null,
    };
  },
  components: {
    ProjectCard,
    Button,
  },
  async created() {
    this.projects = await fetchData("/api/projects");
  },
};
</script>

<template>
  <section>
    <h2>projects</h2>
    <article
      v-for="project in projects?.slice(0, 3)"
      :key="project.projectTitle">
      <ProjectCard
        :projectBackground="project.background"
        :projectIcon="project.projectIcon"
        :projectTitle="project.projectTitle"
        :projectDescription="project.projectDescription"
        :projectRepo="project.projectRepo"
        :projectLiveLink="project.projectLiveLink"
        :techStackIcons="project.techStackIcons" />
    </article>
    <Button>See more <Icon name="ion:arrow-redo" /></Button>
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
