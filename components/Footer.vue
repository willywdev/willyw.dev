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
  padding: 1rem 1rem 3rem 1rem;
  text-align: center;
  opacity: 0.9;
  background-color: #161616;
  border-radius: 15px 15px 0 0;
  border: 1px solid #2b2a2a;
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))
    drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
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
