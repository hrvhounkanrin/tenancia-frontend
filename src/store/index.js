import Vuex from 'vuex'
import Vue from 'vue'

// import user from './modules/user'
import auth from './modules/auth'

import { main } from '@/app/shared/store/main-store'
import { alert } from '@/app/shared/store/alert-module'
// import { account } from '@/app/users'

Vue.use(Vuex)

// Create store
export default new Vuex.Store({
  modules: {
    // user,
    auth,
    main,
    // account,
    alert
  }
})
