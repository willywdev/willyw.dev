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

<style lang="scss" scoped></style>
