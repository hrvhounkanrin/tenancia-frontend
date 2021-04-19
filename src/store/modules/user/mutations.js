import {
  ADMIN_LIST,
  UPDATE_ADMIN,
  REMOVE_ADMIN,
  ADD_ADMIN,
  PROFILES,
} from './mutation-types'

import Vue from 'vue'

export default {
  [ADD_ADMIN] (state, admin) {
    state.admin_list.unshift(admin)
  },

  [UPDATE_ADMIN] (state, admin) {
    const idx = state.admin_list.findIndex(el => el.id === admin.id)
    Vue.set(state.admin_list, idx, admin)
  },

  [REMOVE_ADMIN] (state, admin) {
    const idx = state.admin_list.findIndex(el => el.id === admin.id)
    state.admin_list.splice(idx, 1)
  },

  [ADMIN_LIST] (state, admins) {
    state.admin_list = admins
  },
  [PROFILES] (state, data) {
    console.log(data, "data")
    state.profiles = data
  }
}
