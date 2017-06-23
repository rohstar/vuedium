<template>
<div>
  <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Vuedium</a>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link v-if="'logged == true'" class="nav-link" to="/posts">Posts</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="'logged == true'" class="nav-link" to="/create">Create Post</router-link>
        </li>
        <li class="nav-item">
          <a v-if="'logged == true'" class="nav-link" v-on:click.prevent="logout">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
</template>
<script>

import {
  auth
} from '../db'

import {
  bus
} from '../main'

export default {
  data() {

    return {

    }

  },
  computed: {
    logged: function() {
      if (auth.currentUser != null) {
        console.log(auth.currentUser);
        return true;
      }
      return false;
    }
  },
  mounted: function(){
    bus.$on('logged-in', () => {
      console.log('NAV KNOWS.')
    })
  },
  methods: {
    logout: function() {
      let rout = this.$router;
      this.$forceUpdate();
      auth.signOut().then(function() {
        rout.push('/login')
      })
    }
  }

}
</script>
<style>

</style>
