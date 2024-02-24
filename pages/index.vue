<script>
import ProjectsVue from "@/components/Projects.vue";
import AboutMe from "@/components/AboutMe.vue";

export default {
  components: {
    ProjectsVue,
    AboutMe,
  },
};
</script>

<template>
  <Head>
    <title>willyw.dev \ home</title>
  </Head>
  <AboutMe />
  <ProjectsVue />
</template>

<style scoped></style>
