<template>
  <div class="app-layout text-gray-700 dark:bg-black dark:text-white">
    <Head v-if="title" :title="title" />
    <slot />
  </div>
</template>

<style>
::selection {
  background: #7b82ff;
  color: white;
}

html,
body,
#app,
.app-layout {
  min-height: 100vh;
  font-family: "Nunito", sans-serif;
}
</style>

<script>
export default {
  props: ["title"],
};
</script>
