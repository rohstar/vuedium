// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Session from 'vue-session'
import BootstrapVue from 'bootstrap-vue'
import Routes from './routes'
import Nav from './components/Nav.vue'
import VueFire from 'vuefire';

Vue.use(Router);
Vue.use(Session);
Vue.use(BootstrapVue);
Vue.use(VueFire);

Vue.component('topnav', Nav);

const router = new Router({
  routes: Routes,
  mode: 'history'
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
