import Vuex from 'vuex'
import Vue from 'vue'

import user from './modules/user'
import banque from './modules/banque'
import auth from './modules/auth'
import shared from './modules/shared'

// import { main } from '@/app/shared/store/main-store'

Vue.use(Vuex)

// Create store
export default new Vuex.Store({
  modules: {
    shared,
    user,
    banque,
    auth
    // main
  }
})
