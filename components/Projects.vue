<script setup>
import ProjectCard from "./ProjectCard.vue";
import Button from "./Button.vue";
import Spinner from "./Spinner.vue";

const { data: projects, pending: isLoading, error } = useFetch("/api/projects");

const slicedProjects = computed(() => {
  return projects.value ? projects.value.slice(0, 3) : [];
});
</script>

<template>
  <section>
    <h2>projects</h2>
    <article v-if="isLoading.value"><Spinner /></article>
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

<style lang="scss" scoped></style>
