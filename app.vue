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
  padding-left: 2rem;
  padding-right: 2rem;
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
}
a:focus,
button:focus,
input:focus,
textarea:focus {
  outline: none; /* Removes the default focus outline */
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.5); /* Creates a glow effect with a color that matches your design */
  transition: box-shadow 0.3s ease; /* Smooth transition for the focus effect */
}

@media (min-width: 768px) {
  body {
    padding-left: 20%;
    padding-right: 20%;
    padding-top: 12px;
  }
}
@media (min-width: 1024px) {
  body {
    padding-left: 25%;
    padding-right: 25%;
    padding-top: 16px;
  }
}
</style>
