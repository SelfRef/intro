// Imports
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import Component from 'vue-class-component'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import './../scss/style.scss'

// Components
import App from './vue/App.vue'
import Projects from './vue/pages/Projects.vue'

Axios.defaults.baseURL = 'https://api.github.com'

Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.use(VueAxios)
Vue.use(Axios)

const router = new VueRouter({
  routes: [
    {
      path: '/projects',
      component: Projects
    }
  ]
})

new Vue({
  el: '#app',
  router: router,
  render: r => r(App, {
  })
})