<style scoped>
body {
  margin: 2rem;
}

h4{
  text-align: left;
  margin-bottom: -15px;
}

.form-rounded {
  border-radius: 1rem;
}

</style>

<template>
<div class="container">
  <h1>Create New Post</h1><br />
  <h4>Enter Post Name: </h4><br />
  <input type="text" class="form-control" placeholder="" v-model="name"><br />
  <h4>Enter Post: </h4><br />
  <textarea class="form-control form-rounded" rows="20" v-model="post"></textarea>
  <button type="button" class="btn btn-success" style="margin-top: 10px" v-on:click="createPost">Submit</button>

</div>
</template>

<script>
//firebase import /posts
import db from '../db'
let postsRef = db.database().ref('/posts')

export default {

  data() {

    return {

      post: '',
      name: ''

    }

  },
  methods: {

    createPost() {

      if (this.post != '' && this.name != '') {

        postsRef.push({
          name: this.name,
          post: this.post,
        });




      }

    }

  }

}
</script>
