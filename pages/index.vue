<script></script>

<template>
  <Head>
    <title>willyw.dev \ home</title>
  </Head>
  <main>
    <h2>turning coffee into code</h2>
    <h3>software developer</h3>
    <NuxtImg src="/img/landing.webp" class="landing-img" />
  </main>
  <section></section>
</template>
<style>
main {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
h3 {
  margin-top: 16px;
}

.landing-img {
  margin-top: 64px;
  width: 100%;
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))
    drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
}

@media (min-width: 768px) {
  main {
    margin-top: 44px;
  }
}

@media (min-width: 1024px) {
  main {
    margin-top: 64px;
  }
}
</style>
