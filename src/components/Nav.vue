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
          <router-link v-if="logged" class="nav-link" to="/posts">Posts</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="logged" class="nav-link" to="/create">Create Post</router-link>
        </li>
      </ul>
    </div>
  </nav>
  </div>
</template>
<script>

  export default {
    props: ['logged'],
    data(){

      return {



      }

    },

  }

</script>
<style>

</style>
