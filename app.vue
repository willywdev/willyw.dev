<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <NuxtLayout>
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="apple-mobile-web-app-title" content="willyw.dev Portfolio" />
      <meta name="application-name" content="willyw.dev Portfolio" />
      <meta name="msapplication-TileColor" content="#bfc9f7" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <main>
      <Header />
      <NuxtPage />
    </main>
    <Footer />
  </NuxtLayout>
</template>

<style is:global>
html {
  scroll-behavior: smooth;
  background-color: var(--dark-color);
}
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
  margin: 0 auto;
}
a {
  all: unset;
  cursor: pointer;
}
a:hover,
a:active,
a:focus {
  color: var(--accent-color);
}
img {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}
section {
  margin-bottom: 24px;
  background: linear-gradient(180deg, #161616 50%, #1d213f 100%);
  padding: 2rem;
  margin: 0 1rem;
  border-radius: 15px;
  border: 1px solid #2b2a2a;
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))
    drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
}
a:focus,
button:focus,
input:focus,
textarea:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.5);
  transition: box-shadow 0.3s ease;
}

/* Breakpoints */
@media (max-width: 767px) {
}

@media (min-width: 768px) and (max-width: 1023px) {
}

@media (min-width: 1024px) {
}
</style>
