<script>
import Card from "./Card.vue";
import Button from "./Button.vue";

export default {
  data() {
    return {
      projects: null,
    };
  },
  components: {
    Card,
    Button,
  },
  created() {
    this.fetchProjects();
  },
  methods: {
    async fetchProjects() {
      try {
        const { data } = useFetch("/api/projects", {
          lazy: true,
          server: true,
        });
        this.projects = data;
        console.log(this.projects);
      } catch (error) {
        console.error("There was an error fetching the data: ", error);
        this.projects = "Error fetching data";
      }
    },
  },
};
</script>

<template>
  <section>
    <h2>projects</h2>
    <article v-for="project in projects" :key="project.projectTitle">
      <Card
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
