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
      <div class="icon-container">
        <Icon :name="projectIcon" size="24" />
      </div>
      <h4>{{ projectTitle }}</h4>
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
}
.card-header {
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;
  background-color: inherit;
  border-radius: 14px 14px 0 0;
  padding: 8px 4px 8px 12px;
}

.card-body {
  width: 100%;
  border-radius: 0 0 14px 14px;
  padding: 8px 12px 8px 12px;
  display: flex;
  justify-content: space-between;
  gap: 3rem;
}

.icon-container {
  background-color: var(--translucent-dark);
  border-radius: 5px;
  padding: 5px;
  border: 1px solid var(--dark-color);
  gap: 1rem;
  color: var(--light-color);
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
