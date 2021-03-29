import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import { ValidationProvider } from 'vee-validate'
import GAuth from 'vue-google-oauth2'
import api from '@/api'
import config from '@/config/backend'
import axios from 'axios'
import router from './router/router'
import store from './store'
import App from './app/app.vue'
import VueSweetalert2 from 'vue-sweetalert2';
//import VueToast from 'vue-toast-notification';
import '@/globalComponents'

//GOOGLE_CLIENT_ID='515214403352-dd3itjg2aequg8387650rr1b8aefpovf'
const gauthOption = {
  clientId: `${process.env.VUE_APP_GOOGLE_CLIENT_ID}.apps.googleusercontent.com`,
  scope: 'profile email',
  prompt: 'select_account'
}

//Vue.use(VueToast);
Vue.use(GAuth, gauthOption)
Vue.use(BootstrapVue)
Vue.prototype.$config = config
Vue.prototype.$api = api(axios, config)

store.dispatch('auth/verified')
Vue.config.productionTip = false

Vue.use(VueSweetalert2);

Vue.component('ValidationProvider', ValidationProvider)

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
