import Vue from 'vue'
import Vuex from 'vuex'

import { main } from '@/app/shared/store/main-store'
import { alert } from '@/app/shared/store/alert-module'
import { account } from '@/app/users'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    main: main,
    account: account,
    alert: alert
  }
})


// console.log('Store: ', store)