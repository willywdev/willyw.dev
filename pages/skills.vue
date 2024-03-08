<script>
import Spinner from "@/components/Spinner.vue";

export default {
  data() {
    return {
      skills: null,
      isLoading: true,
    };
  },
  components: {
    Spinner,
  },
  methods: {
    async fetchSkills() {
      try {
        this.skills = await $fetch("/api/skills");
        this.isLoading = false;
      } catch (error) {
        console.error(error);
        this.skills = [];
        this.isLoading = true;
      }
    },
  },
  mounted() {
    this.fetchSkills();
  },
};
</script>

<template>
  <Head>
    <title>willyw.dev \ skills</title>
  </Head>
  <section>
    <h2>skills</h2>
    <div v-if="isLoading"><Spinner /></div>
    <div v-else class="icon-container">
      <Icon
        v-for="skill in skills?.sort()"
        :key="skill.name"
        :name="skill.icon"
        size="52" />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
