import {
  ADMIN_LIST,
  UPDATE_ADMIN,
  ADD_ADMIN,
  REMOVE_ADMIN
} from './mutation-types'

import api from '@/api'
import config from '@/config/backend'
import axios from 'axios'

const $api = api(axios, config)

export default {
  async getPoliticy ({ commit }, data) {
    return await $api.getPoliticy(data)
  },

  async getAdminList ({ commit }, data) {
    const admin = await $api.getAdminList(data)
    commit(ADMIN_LIST, admin.data)
  },

  async addAdmin ({ commit }, data) {
    const admin = await $api.addAdmin(data)
    commit(ADD_ADMIN, admin.data)
  },

  async updateAdmin ({ commit }, data) {
    const admin = await $api.putAdmin(data)
    commit(UPDATE_ADMIN, admin.data)
  },

  async enableAdmin ({ commit }, data) {
    const admin = await $api.enabledAdmin(data)
    commit(UPDATE_ADMIN, admin.data)
  },

  async removeAdmin ({ commit }, data) {
    await $api.removeAdmin(data)
    commit(REMOVE_ADMIN, data)
  },

  // to be transformed in async func
  
}
