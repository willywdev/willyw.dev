<script setup></script>

<template>
  <header>
    <h1><span class="colored">willy</span>w.dev</h1>
    <nav>
      <ul>
        <li><a href="/blog">Blog</a></li>
        <li><a href="https://github.com/willywdev">Github</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
@font-face {
  font-family: "BeauSans";
  src: url(/BT-BeauSans-Regular.ttf) format("truetype");
}
header {
  padding: 1.333rem 1.333rem 0 1.333rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-family: "BeauSans";
  font-smooth: always;
  user-select: none;
}

.colored {
  color: var(--accent);
}

ul {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: 2rem;
}
</style>
