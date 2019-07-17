<template>
  <div id="app">
    <!-- <Login></Login> -->
    <!-- <Heads></Heads> -->
    <router-view/>
  </div>
</template>

<script>
import Login from './components/login.vue'
import Heads from './components/head.vue'
export default {
  name: 'App', components: {
Login,Heads
  }
}
</script>

<style>
@import url('./../static/css/reset.css');
html,body{
  height: 100%;
}
#app {
  height: 100%;
  font-family: 'Avenir', MicrosoftYaHei,Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
</style>
