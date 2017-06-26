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
  <form class="form-horizontal" role="form" method="POST" action="/login">
              <div class="row">
                  <div class="col-md-3"></div>
                  <div class="col-md-6">
                      <h2>Get postin' with Vue-dium!</h2>
                      <hr>
                  </div>
              </div>
              <div class="row">
                  <div class="col-md-3"></div>
                  <div class="col-md-6">
                      <div class="form-group has-danger">
                          <label class="sr-only" for="email">Username</label>
                          <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                              <input type="text" name="text" class="form-control" id="username"
                                     placeholder="Username" v-model="username">
                          </div>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-md-3"></div>
                  <div class="col-md-6">
                      <div class="form-group has-danger">
                          <label class="sr-only" for="email">E-Mail Address</label>
                          <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                              <input type="email" name="email" class="form-control" id="email"
                                     placeholder="Email Address" v-model="email">
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
                              <input type="password" name="password" class="form-control" id="password"
                                     placeholder="Password" required v-model="password">
                          </div>
                      </div>
                  </div>
                  <div class="col-md-3">
                      <div class="form-control-feedback">
                          <span class="text-danger align-middle">
                          {{error}}
                          </span>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-md-3"></div>
                  <div class="col-md-6">
                      <div class="form-group">
                          <label class="sr-only" for="password">Confirm Password</label>
                          <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                              <input type="password" name="password" class="form-control" id="password"
                                     placeholder="Confirm Password" required v-model="confirmPassword">
                          </div>
                      </div>
                  </div>
                  <div class="col-md-3">
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
                      <button type="submit" class="btn btn-success" v-on:click.prevent="createAccount">Create Account</button>
                  </div>
              </div>
              <div class="row" style="padding-top: 1rem">
                  <div class="col-md-3"></div>
                  <div class="col-md-6">
                      <button type="button" class="btn btn-secondary btn-sm" v-on:click="loginRedirect">Have an account? Login</button>
                  </div>
              </div>
          </form>
</div>
</template>
<script>

import {auth} from '../db'

export default {
  name: 'signup',
  data(){
    return {
      username: '',
      password: '',
      email: '',
      confirmPassword: '',
      error: '',
      wantsToSignUp: false
    }
  },
  created: function(){
    if (auth.currentUser) {
      this.$router.push('/posts')
    }
  },
  methods: {
    loginRedirect: function(){
      this.$router.push('/login')
    },
    createAccount: function(){

      if(this.email != '' && this.password != '' && this.confirmPassword != ''){
        if(this.password == this.confirmPassword){

          const dat = this;

          auth.createUserWithEmailAndPassword(this.email, this.password).catch(function(error, authData) {
              dat._data.error = err.message;
              console.log(authData);
          });

          if(auth.currentUser){

            this.user = auth.currentUser;

            //use bus to emit the user
            bus.$emit('logged-in', this.user);
            this.$router.push('/posts');

          }

        }
      }
    }
  }

}

</script>
