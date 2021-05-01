<template>
  <div id="app">
    <img class="logo" alt="NZPMC logo" src="./assets/logo-cropped.png" width="400">
    <HelloWorld msg="Welcome to New Zealand Physics and Mathematics Competition 2021!"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
.logo{
  margin-top: 0px;
}
#app {
  font-family: Helvetica, Helvetica , Helvetica;
  font-weight: 200;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #cfeade;
  margin-top: 0px;
  margin-bottom: 0%;
  background:  #0fb5a2;
}

</style>
