import Vue from 'vue'
// import { store } from './store'
import BootstrapVue from 'bootstrap-vue'
import { ValidationProvider } from 'vee-validate'

import api from '@/api'
import config from '@/config/backend'
import axios from 'axios'
import router from './router/router'
import store from './store'

import App from './app/app.vue'
// import router from './app/app-routes'
// import router from './router'

import '@/globalComponents'

Vue.use(BootstrapVue)
Vue.prototype.$config = config
Vue.prototype.$api = api(axios, config)

store.dispatch('auth/verified')
Vue.config.productionTip = false

Vue.component('ValidationProvider', ValidationProvider)
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
new Vue({
  store,
  router,
  watch: {
    '$route' (to, from) {
      if (from.name == 'Login') { windows.location.reload() }
    }
  },
  render: (h) => h(App)
}).$mount('#app')
