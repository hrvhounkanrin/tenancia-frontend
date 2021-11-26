
import {
  ADMIN_LIST,
  UPDATE_ADMIN,
  ADD_ADMIN,
  REMOVE_ADMIN,
  PROFILES
} from './mutation-types'

import api from '@/api'
import User from '@/api/user'
import config from '@/config/backend'
import axios from 'axios'

const $api = () => api(axios, config)

export default {
  async getPoliticy({ commit }, data) {
    await $api().getPoliticy(data)
  },

  async getAdminList({ commit }, data) {
    const admin = await $api().getAdminList(data)
    commit(ADMIN_LIST, admin.data)
  },

  async addAdmin({ commit }, data) {
    const admin = await $api().addAdmin(data)
    commit(ADD_ADMIN, admin.data)
  },

  async updateAdmin({ commit }, data) {
    const admin = await $api().putAdmin(data)
    commit(UPDATE_ADMIN, admin.data)
  },

  async enableAdmin({ commit }, data) {
    const admin = await $api().enabledAdmin(data)
    commit(UPDATE_ADMIN, admin.data)
  },

  async removeAdmin({ commit }, data) {
    await $api().removeAdmin(data)
    commit(REMOVE_ADMIN, data)
  },

  /**
 * Return connected user profiles. Should be between(tenant, lessor, estate agent)
 * @returns {} Returns global object containing Tenant, Lessor and RealEstate project if exist.
 */
  async myProfiles({ commit }) {
    let user = new User()
    let res = await user.getProfiles()
    commit(PROFILES, res.data.payload)
  },

  /**
   * Create any pr
   * @returns {} Commit any profil.
   */

  async createUserProfil({ commit }, data) {
    let user = new User()
    let newProfile = await user.createProfile(data)
    commit(PROFILES, newProfile.data.payload)
  },

  /**
   * Update any profil$$
   * @returns {} Commit any profil.
   */

  async updateUserProfil({ commit }, data) {
    let user = new User()
    let newProfile = await user.updateProfile(data)
    console.log('newProfile', newProfile)
    commit(PROFILES, newProfile.data.payload)
  },

  /**
 * Update user AVATAR
 * @returns {} Commit any profil.
 */

  async updateUserAvatar({ commit }, avatar) {
    let user = new User()
    let newAvatar = await user.setUserAvatar(avatar)
    return newAvatar.data
  },


  async changeUserPass({ commit }, pass) {
    let user = new User()
    let newAvatar = await user.changeUserPass(pass)
    return newAvatar.data
  },

  

}
