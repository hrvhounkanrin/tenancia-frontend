import Vuex from 'vuex'
import Vue from 'vue'

import user from './modules/user'
import banque from './modules/banque'
import general from './modules/general'
import properties from './modules/properties'
import auth from './modules/auth'
import shared from './modules/shared'
import contrats from './modules/contrats'
import quittances from './modules/quittances'
import mandats from './modules/mandats'
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
    contrats,
    quittances,
    mandats
  }
})
