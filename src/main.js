import Vue from 'vue'
// import { store } from './store'
import BootstrapVue from 'bootstrap-vue'
import { ValidationProvider } from 'vee-validate'
import GAuth from 'vue-google-oauth2'
import api from '@/api'
import config from '@/config/backend'
import axios from 'axios'
import router from './router/router'
import store from './store'

import App from './app/app.vue'
// import router from './app/app-routes'
// import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';

import VueToast from 'vue-toast-notification';
import '@/globalComponents'

const gauthOption = {
  clientId: '515214403352-dd3itjg2aequg8387650rr1b8aefpovf.apps.googleusercontent.com',
  client_id: '515214403352-dd3itjg2aequg8387650rr1b8aefpovf.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}

Vue.use(VueToast);
Vue.use(GAuth, gauthOption)
Vue.use(BootstrapVue)
Vue.prototype.$config = config
Vue.prototype.$api = api(axios, config)

store.dispatch('auth/verified')
Vue.config.productionTip = false

Vue.use(VueSweetalert2);

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
