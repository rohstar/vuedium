<style>

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

</style>

<template>

<div id="app">
  <topnav v-bind:logged="logged"></topnav>
  <div class="container">
    <router-view></router-view>
  </div>
</div>

</template>

<script>

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
    name: 'app',
    data(){
      return {
        logged: false
      }
    }

}

</script>
