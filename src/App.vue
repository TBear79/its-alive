<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import './assets/css/global.css'
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
