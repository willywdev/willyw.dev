<script setup></script>

<template>
  <header>
    <h1><span class="colored">willy</span>w.dev</h1>
    <nav>
      <ul>
        <li>
          <NuxtLink to="https://github.com/willywdev" target="_blank"
            ><Icon name="fa6-brands:square-github" size="26"
          /></NuxtLink>
        </li>
        <li>
          <NuxtLink to="https://github.com/willywdev" target="_blank"
            ><Icon name="fa6-brands:linkedin" size="26"
          /></NuxtLink>
        </li>
        <li>
          <NuxtLink to="https://github.com/willywdev" target="_blank"
            ><Icon name="fa6-brands:square-x-twitter" size="26"
          /></NuxtLink>
        </li>
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
  padding: 1.333rem 2rem 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
}

h1 {
  font-family: "BeauSans";
  user-select: none;
}

.colored {
  color: var(--accent);
}

ul {
  display: flex;
  align-items: center;
  gap: 1rem;
  opacity: 0.9;
}

ul:hover {
  opacity: 1;
}

ul {
  transition: opacity 0.2s ease-in-out;
}

@media (max-width: 768px) {
  header {
    padding: 1rem 0;
    justify-content: center;
  }
  nav {
    display: none;
  }
  h1 {
    justify-content: center;
  }
}
</style>
