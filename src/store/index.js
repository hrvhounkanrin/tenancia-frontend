import Vuex from 'vuex'
import Vue from 'vue'

import user from './modules/user'
import banque from './modules/banque'
import general from './modules/general'
import properties from './modules/properties'
import auth from './modules/auth'
import shared from './modules/shared'
import contrats from './modules/contrats'

// import { main } from '@/app/shared/store/main-store'

Vue.use(Vuex)

// Create store
export default new Vuex.Store({
  modules: {
    shared,
    user,
    banque,
    auth,
    general,
    properties,
    contrats
  }
})
