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
    techStackIcons: Array,
  },
  methods: {
    hexToRGBA,
  },
};
</script>

<template>
  <article>
    <div class="card-header" :style="{ backgroundColor: projectBackground }">
      <div class="projectTitleWithIcon">
        <Icon :name="projectIcon" size="24" />
        <h4>{{ projectTitle }}</h4>
      </div>
      <div class="techStack">
        <ul>
          <li v-for="tech in techStackIcons" :key="tech">
            <Icon :name="tech" size="26" />
          </li>
        </ul>
      </div>
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
  justify-content: space-between;
  width: 100%;
  background-color: inherit;
  border-radius: 14px 14px 0 0;
  padding: 8px 4px 8px 12px;
  -webkit-box-shadow: 0 6px 4px -4px black;
  -moz-box-shadow: 0 6px 4px -4px black;
  box-shadow: 0 6px 4px -4px black;
}
.projectTitleWithIcon {
  display: flex;
  align-items: center;
  gap: 8px;
}
ul {
  list-style-type: none;
  display: flex;
  gap: 3px;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.15);
  padding: 5px;
  border-radius: 5px;
  margin-right: 1rem;
  outline: 1px solid rgba(0, 0, 0, 0.35);
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

ul {
  display: flex;
  gap: 6px;
}
</style>
