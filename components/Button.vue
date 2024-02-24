<script>
export default {
  props: {
    buttonEventHandler: Function,
  },
};
</script>
<template>
  <button><slot /></button>
</template>
<style scoped>
button {
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  border: 2px solid transparent;
  background-color: var(--accent-color);
  font-family: "Jetbrains Mono";
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: max-content;
  outline: none;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

button:hover {
  background-color: transparent;
  border: 2px solid var(--accent-color);
  color: var(--light-color);
}

button:focus {
  outline: 2px solid var(--accent-color-2);
  outline-offset: 2px;
}

button:active {
  transform: translateY(1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
