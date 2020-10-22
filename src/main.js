import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import Vuetify from 'vuetify/lib'

import Home from './components/Home'
import Description from './components/Description'

Vue.config.productionTip = false

Vue.use(VueRouter)
// Vue.use(Vuetify)

const routes =[
  {name: "home", path: '/', component: Home},
  {name: "description",path: '/description/:name', component: Description}
]

const router = new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
