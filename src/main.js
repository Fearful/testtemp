// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// Libraries
import router from './router' // Official Router
import Vuetify from 'vuetify' // UI Lib
import axios from 'axios'
import VueAxios from 'vue-axios' // Resource Library

// Application
import App from './App'

// Configurations
axios.defaults.baseURL = 'http://data.auto-nextgen.com'
axios.defaults.headers.get['Content-Type'] = 'application/json'
axios.defaults.headers.get['Accept'] = 'application/json'
axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE0OTAwMTY1MTl9.5JWZbcArm_4f_QLv-Xqr6H8pBMNfeNU_Mwd4NhwVeP4'

// Apply libraries to Vue
Vue.use(Vuetify)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
