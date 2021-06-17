<<<<<<< HEAD
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import { ValidationProvider } from 'vee-validate'
import GAuth from 'vue-google-oauth2'
import VueToast from 'vue-toast-notification'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import VueSimpleSuggest from 'vue-simple-suggest'
import 'vue-simple-suggest/dist/styles.css' // Optional CSS
 

import api from '@/api'
import config from '@/config/backend'
import router from './router/router'
import store from './store'
import App from '@/views/App.vue'
import '@/globalComponents'


import Default from '@/components/shared/baseLayout.vue';
import Pages from '@/components/shared/pagesLayout.vue';
import Apps from '@/components/shared/appLayout.vue';
import Layouts from '@/components/shared/layoutsExamples.vue';
import PageTitle from '@/components/shared/PageTitle'


Vue.component('vue-phone-number-input', VuePhoneNumberInput);
Vue.component('autocomplete-input', VueSimpleSuggest);


Vue.component('PageTitle', PageTitle);
Vue.component('default-layout', Default);
Vue.component('pages-layout', Pages);
Vue.component('apps-layout', Apps);
Vue.component('examples-layout', Layouts)
const gauthOption = {
  clientId: `${process.env.VUE_APP_GOOGLE_CLIENT_ID}.apps.googleusercontent.com`,
  scope: 'profile email',
  prompt: 'select_account'
}

Vue.use(VueToast)
Vue.use(VueSweetalert2)
Vue.use(GAuth, gauthOption)
Vue.use(BootstrapVue)
Vue.prototype.$config = config
Vue.prototype.$api = api(axios, config)

store.dispatch('auth/verified')
Vue.config.productionTip = false

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
=======
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import { ValidationProvider } from 'vee-validate'
import GAuth from 'vue-google-oauth2'
import VueToast from 'vue-toast-notification'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'
import VueSimpleSuggest from 'vue-simple-suggest'
import 'vue-simple-suggest/dist/styles.css' // Optional CSS
import * as VueGoogleMaps from 'vue2-google-maps'
 
// import VueGeolocation from 'vue-browser-geolocation'
import api from '@/api'
import config from '@/config/backend'
import router from './router/router'
import store from './store'
import App from '@/views/App.vue'
import '@/globalComponents'

import Default from '@/components/shared/baseLayout.vue'
import Pages from '@/components/shared/pagesLayout.vue'
import Apps from '@/components/shared/appLayout.vue'
import Layouts from '@/components/shared/layoutsExamples.vue'
import PageTitle from '@/components/shared/PageTitle'

Vue.component('vue-phone-number-input', VuePhoneNumberInput)
Vue.component('autocomplete-input', VueSimpleSuggest)

Vue.component('PageTitle', PageTitle)
Vue.component('default-layout', Default)
Vue.component('pages-layout', Pages)
Vue.component('apps-layout', Apps)
Vue.component('examples-layout', Layouts)
const gauthOption = {
  clientId: `${process.env.VUE_APP_GOOGLE_CLIENT_ID}.apps.googleusercontent.com`,
  scope: 'profile email',
  prompt: 'select_account'
}

Vue.use(VueToast)
Vue.use(VueSweetalert2)
Vue.use(GAuth, gauthOption)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDposFJRZLAsBi08nLA0NnBI2k_0q_rTBk',
    libraries: 'places'
  }
})

// Vue.use(VueGeolocation)
Vue.use(BootstrapVue)
Vue.prototype.$config = config
Vue.prototype.$api = api(axios, config)

store.dispatch('auth/verified')
Vue.config.productionTip = false

Vue.component('ValidationProvider', ValidationProvider)

new Vue({
  store,
  router,
  watch: {
    '$route' (to, from) {
      if (from.name === 'Login') { windows.location.reload() }
    }
  },
  render: (h) => h(App)
}).$mount('#app')
>>>>>>> ea0f95438d39187276bb192d231601cf6c2332d8
