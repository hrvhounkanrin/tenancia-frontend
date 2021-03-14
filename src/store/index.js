import Vuex from 'vuex'
import Vue from 'vue'

// import user from './modules/user'
import auth from './modules/auth'

import { main } from '@/app/shared/store/main-store'


Vue.use(Vuex)

// Create store
export default new Vuex.Store({
  modules: {
    // user,
    auth,
    main
  }
})
