<style scoped>
body {
  margin: 2rem;
}

.form-rounded {
  border-radius: 1rem;
}
</style>

<template>
  <component v-bind:is="currentView"></component>
</template>
<script>

import Login from './Login.vue'
import Signup from './Signup.vue'

export default {
  components:{
    'login': Login,
    'signup': Signup
  },

  data(){
    return {
      'currentView': 'login'
    }
  }

}

</script>
