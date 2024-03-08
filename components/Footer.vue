<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer>
    <div class="footer-inner">
      <p>© willyw.dev - {{ currentYear }}</p>
      <p class="motto">
        Creating impactful software solutions with a touch of creativity.
      </p>
      <p class="cta">
        Interested in collaborating?
        <a href="mailto:kontakt@willyw.dev" class="get-in-touch"
          >Get in touch.</a
        >
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped></style>
