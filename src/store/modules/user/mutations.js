import {
  ADMIN_LIST,
  UPDATE_ADMIN,
  REMOVE_ADMIN,
  ADD_ADMIN,
  PROFILES,
  CREATE_LESSOR,UPDATE_LESSOR,
  CREATE_TENANT,UPDATE_TENANT,
  CREATE_REAL_ESTATE,UPDATE_REAL_ESTATE
} from './mutation-types'

import Vue from 'vue'

export default {
  [ADD_ADMIN] (state, admin) {
    state.admin_list.unshift(admin)
  },

  [UPDATE_ADMIN] (state, admin) {
    const idx = state.admin_list.findIndex(el => el.id === admin.id)
    //Vue.set(state.admin_list, idx, admin)
  },

  [REMOVE_ADMIN] (state, admin) {
    const idx = state.admin_list.findIndex(el => el.id === admin.id)
    state.admin_list.splice(idx, 1)
  },

  [ADMIN_LIST] (state, admins) {
    state.admin_list = admins
  },
  [PROFILES] (state, data) {
    console.log('PROFILES MUTATION:',data)
    
    state.profiles = data
  },
  [CREATE_LESSOR] (state, lessor) {
    state.profiles.lessor = lessor
  },
  [UPDATE_LESSOR] (state, lessor) {
    state.profiles.lessor = lessor
  },
  [CREATE_TENANT] (state, tenant) {
    state.profiles.tenant = tenant
  },
  [UPDATE_TENANT] (state, tenant) {
    state.profiles.tenant = tenant
  },
  [CREATE_REAL_ESTATE] (state, realEstate) {
    state.profiles.realEstate = realEstate
  },
  [UPDATE_REAL_ESTATE] (state, realEstate) {
    state.profiles.realEstate = realEstate
  },
}
