import Vue from 'vue'
import { store } from './store'
import BootstrapVue from 'bootstrap-vue'
import { ValidationProvider } from 'vee-validate'

import App from './app/app.vue'
import router from './app/app-routes'


Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.component('ValidationProvider', ValidationProvider);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
