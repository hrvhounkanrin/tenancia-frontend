import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import { ValidationProvider } from 'vee-validate'
import GAuth from 'vue-google-oauth2'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueSocialSharing from 'vue-social-sharing'

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
import VueMask from 'v-mask'

import VueCountryCode from 'vue-country-code'

// Styles: SCSS
import './assets/scss/main.scss'

Vue.use(VueCountryCode)

Vue.component('vue-phone-number-input', VuePhoneNumberInput)

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
Vue.use(VueMask)
Vue.use(GAuth, gauthOption)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBAkNKNluUXWFnVbxi-81lrdojzLx5MOyY',
    libraries: 'places'
  }
})
Vue.use(VueSocialSharing)
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
