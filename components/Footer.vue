<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<template>
  <footer>
    <div class="footer-inner">
      <p>© willyw.dev {{ currentYear }}</p>
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
<style>
footer {
  padding: 18px;
  text-align: center;
  margin-bottom: 5px;
  opacity: 0.9;
}
.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.motto,
.cta {
  font-size: 0.9rem;
  margin: 5px 0;
}
.get-in-touch {
  color: var(--accent-color);
}
</style>
