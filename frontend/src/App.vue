<script setup lang="ts">
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Muli:wght@400&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  height: 100%;
  overflow-x: hidden;
}

body {
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  max-width: 6444px;
  margin: 0 auto;
  overflow-x: hidden;
  min-height: 100vh;
}

#app {
  width: 100vw;
  max-width: 6444px;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: visible;
  margin: 0 auto;
  padding: 0;
}
</style>
