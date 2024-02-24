<script>
import { hexToRGBA } from "#imports";

export default {
  props: {
    projectBackground: String,
    projectIcon: String,
    projectTitle: String,
    projectDescription: String,
    projectRepo: String,
    projectLiveLink: String,
  },
  methods: {
    hexToRGBA,
  },
};
</script>

<template>
  <article>
    <div class="card-header" :style="{ backgroundColor: projectBackground }">
      <Icon :name="projectIcon" size="24" />
      <h4>{{ projectTitle }}</h4>
      <div class="spacer"></div>
      <div class="techStack"></div>
    </div>
    <div
      class="card-body"
      :style="{ backgroundColor: hexToRGBA(projectBackground) }">
      <p>{{ projectDescription }}</p>
      <div class="project-link-container">
        <nuxt-link :to="projectRepo" class="project-link"
          ><Icon name="octicon:repo-16" size="16" />
          <span>Repo</span></nuxt-link
        >
        <nuxt-link :to="projectLiveLink" class="project-link">
          <Icon name="mdi:play-box-outline" size="16" />
          <span>Live</span></nuxt-link
        >
      </div>
    </div>
  </article>
</template>

<style scoped>
article {
  border-radius: 14px;
  color: var(--dark-color);
}
.card-header {
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;
  background-color: inherit;
  border-radius: 14px 14px 0 0;
  padding: 8px 4px 8px 12px;
  -webkit-box-shadow: 0 6px 4px -4px black;
  -moz-box-shadow: 0 6px 4px -4px black;
  box-shadow: 0 6px 4px -4px black;
}
.card-body {
  width: 100%;
  border-radius: 0 0 14px 14px;
  padding: 8px 12px 8px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
}
.project-link-container {
  display: flex;
  gap: 0.5rem;
}
.project-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--dark-color);
  padding: 8px;
  border-radius: 8px;
  width: 2.5rem;
  height: 2.5rem;
  gap: 3px;
  color: var(--light-color);
}
.project-link span {
  display: block;
  text-align: center;
  line-height: 1;
}
.project-link * {
  opacity: 0.5;
}
.project-link:hover * {
  opacity: 1;
}
</style>
