<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
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

<style lang="scss" is:global>
@import "@/assets/styles/global.scss";
</style>
