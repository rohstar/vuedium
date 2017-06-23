<style scoped>
body {
  margin: 2rem;
}

.form-rounded {
  border-radius: 1rem;
}
</style>

<template>
<div class="container">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <h2>Please Login</h2>
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <div class="form-group has-danger">
          <label class="sr-only" for="email">E-Mail Address</label>
          <div class="input-group mb-2 mr-sm-2 mb-sm-0">
            <input type="email" name="email" class="form-control" id="username" placeholder="bugs@bunny.com" required v-model="email">
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <div class="form-group">
          <label class="sr-only" for="password">Password</label>
          <div class="input-group mb-2 mr-sm-2 mb-sm-0">
            <input type="password" name="password" class="form-control" id="password" placeholder="Password" required v-model="password">
          </div>
        </div>
      </div>
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="form-control-feedback">
          <span class="text-danger align-middle">
                          {{error}}
                          </span>
        </div>
      </div>
    </div>

    <div class="row" style="padding-top: 1rem">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <button class="btn btn-success" v-on:click="login">Login</button>
      </div>
    </div>
    <div class="row" style="padding-top: 1rem">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <button type="button" class="btn btn-secondary btn-sm" v-on:click="signUpRedirect">Create Account</button>
      </div>
    </div>
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
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },

  created: function(){
    console.log(this.user);
    if (auth.currentUser) {
      this.$router.push('/posts')
    }

  },

  computed: {
    user: function() {
      return auth.currentUser;
    }
  },

  methods: {
    signUpRedirect: function() {
      this.$router.push('/signup')
    },
    login: function() {
      //since we can't access this within the catch, we create a reference.
      if (this.email == '' || this.password == '') {
        this.error = "Username or Password empty..."
      } else {
        const dat = this;
        auth.signInWithEmailAndPassword(this.email, this.password).catch(function(err) {
          dat._data.error = err.message;
        });
      }

      //if no errors, take to posts.
      if(auth.currentUser){
        bus.$emit('logged-in', auth.currentUser);
        this.$router.push('/posts');
      }

    }
  }
}
</script>
