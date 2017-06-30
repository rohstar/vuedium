<style>

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.et-wrapper{
  background-color: #0ba710 !important;
}

</style>

<template>

<div id="app">
  <div>
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#"><span v-if="showNavItems"></span>Vuedium</a>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link v-if="showNavItems" class="nav-link" to="/posts">Posts</router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="showNavItems" class="nav-link" to="/create">Create Post</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-if="showNavItems" @click.prevent="logout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <div class="container">
    <router-view></router-view>
  </div>
</div>

</template>

<script>

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {auth} from './db'
import {bus} from './main'

export default {
    name: 'app',
    data(){
      return {
        showNavItems: false,
        user: auth.currentUser
      }
    },
    created: function(){
      this.$on('loggedIn', function() {

        this.showNavItems = true;

      })
    },
    methods:{
      logout: function() {

        let thisRef = this;
        auth.signOut().then(function() {
          thisRef.$router.push('/login')
          thisRef.showNavItems = false;
        })

      },


    }

}

</script>
