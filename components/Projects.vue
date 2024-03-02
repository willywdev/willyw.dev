<script>
import ProjectCard from "./ProjectCard.vue";
import Button from "./Button.vue";
import Spinner from "./Spinner.vue";

export default {
  data() {
    return {
      projects: [],
      isLoading: true,
    };
  },
  components: {
    ProjectCard,
    Button,
    Spinner,
  },
  computed: {
    slicedProjects() {
      return this.projects ? this.projects.slice(0, 3) : [];
    },
  },
  methods: {
    async fetchProjects() {
      try {
        this.projects = await $fetch("/api/projects");
        this.isLoading = false;
      } catch (error) {
        console.error(error);
        this.projects = [];
        this.isLoading = true;
      }
    },
  },
  mounted() {
    this.fetchProjects();
  },
};
</script>

<template>
  <section>
    <h2>projects</h2>
    <div v-if="isLoading"><Spinner /></div>
    <div v-else v-for="project in slicedProjects" :key="project.projectTitle">
      <ProjectCard
        :projectBackground="project.background"
        :projectIcon="project.projectIcon"
        :projectTitle="project.projectTitle"
        :projectDescription="project.projectDescription"
        :projectRepo="project.projectRepo"
        :projectLiveLink="project.projectLiveLink"
        :techStackIcons="project.techStackIcons" />
    </div>
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
