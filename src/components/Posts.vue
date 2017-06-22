<template>
<div>
  <h1>All Posts</h1>
  <!-- <div class="card" v-for="post in posts">
    <div class="card-block">
      <h4 class="card-title" style="text-align: left">{{post.name}}</h4>
      <p class="card-text" style="text-align: left">{{post.post}}</p>
    </div>
  </div> -->
  {{posts}}
</div>


</div>
</template>
<script>
import db from '../db'


export default {
  props: ['logged'],
  data() {

    return {


    }

  },
  computed: {
    posts: function() {
      var posts =  db.database().ref('/posts')
      return posts
    }
  },

}
</script>
<style>

</style>
