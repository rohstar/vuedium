<template>
<div>
  <h1>All Posts</h1>
  <div class="card" v-for="post in posts">
    <div class="card-block">
      <h4 class="card-title" style="text-align: left">{{post.name}}</h4>
      <p class="card-text" style="text-align: left">{{post.post}}</p>
    </div>
  </div>
</div>


</div>
</template>
<script>
import {
  db
} from '../db'
import authCheckerMixin from '../mixins/authCheck'
import {
  auth
} from '../db'

let postsRef = db.ref('/posts')

export default {
  data() {

    return {

      user: auth.currentUser

    }

  },
  firebase: {
    posts: postsRef
  },
  mixins: [authCheckerMixin],

}
</script>
<style>

</style>
