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
  async getPoliticy ({ commit }, data) {
    await $api().getPoliticy(data)
  },

  async getAdminList ({ commit }, data) {
    const admin = await $api().getAdminList(data)
    commit(ADMIN_LIST, admin.data)
  },

  async addAdmin ({ commit }, data) {
    const admin = await $api().addAdmin(data)
    commit(ADD_ADMIN, admin.data)
  },

  async updateAdmin ({ commit }, data) {
    const admin = await $api().putAdmin(data)
    commit(UPDATE_ADMIN, admin.data)
  },

  async enableAdmin ({ commit }, data) {
    const admin = await $api().enabledAdmin(data)
    commit(UPDATE_ADMIN, admin.data)
  },

  async removeAdmin ({ commit }, data) {
    await $api().removeAdmin(data)
    commit(REMOVE_ADMIN, data)
  },

  /**
 * Return connected user profiles. Should be between(tenant, lessor, estate agent)
 * @returns {} Returns global object containing Tenant, Lessor and RealEstate project if exist.
 */
  async myProfiles ({ commit }) {
    let user = new User()
    let res = await user.getProfiles()
    if (res.data.payload.lessor) {
      localStorage.setItem('lessor', JSON.stringify(res.data.payload.lessor))
    }

    if (res.data.payload.tenant) {
      localStorage.setItem('tenant', JSON.stringify(res.data.payload.tenant))
    }

    if (res.data.payload.realEstate) {
      localStorage.setItem('realEstate', JSON.stringify(res.data.payload.realEstate))
    }

    commit(PROFILES, res.data.payload)

  },

    /**
   * Create any profil
   * @returns {} Commit any profil.
   */

  
     async createUserProfil ({ commit }, data) {
      let user = new User()
      let newProfile = await user.createProfile(data);
      commit(PROFILES, newProfile.data.payload)

    },

        /**
   * Update any profil
   * @returns {} Commit any profil.
   */

  
    async updateUserProfil ({ commit }, data) {
    let user = new User()
    let newProfile = await user.updateProfile(data);
    commit(PROFILES, newProfile)

  },


//   /**
//    * Create tenant profil
//    * @returns {} Returns tenant profil.
//    */

  
//   async createTenant ({ commit }, data) {
//     let user = new User()
//     let tenantProfile = await user.createTenant(data)
//     return tenantProfile
//   },
//   /**
//    * Update existing tenant profile
//    * @returns {} Returns tenant profil.
//    */
//   async updateTenant ({ commit }, data) {
//     let user = new User()
//     let tenantProfile = await user.updateTenant(data)
//     return tenantProfile
//   },

//   /**
//    * Create tenant profil
//    * @returns {} Returns lessor profil.
//    */
//   async createLessor ({ commit }, data) {
//     let user = new User()
//     let lessorProfile = await user.createLessor(data)
//     return lessorProfile
//   },
//   /**
//    * Update existing lessor profile
//    * @returns {} Returns lessor profil.
//    */
//   async updateLessor ({ commit }, data) {
//     let user = new User()
//     let lessorProfile = await user.updateLessor(data)
//     return lessorProfile
//   },
//   /**
//    * Create realEstate profil
//    * @returns {} Returns real estate profil.
//    */
//   async createRealEstate ({ commit }, data) {
//     let user = new User()
//     let lessorProfile = await user.createRealEstate(data)
//     return lessorProfile
//   },
//   /**
//  * Update existing lessor profile
//  * @returns {} Returns real estate profil.
//  */
//   async updateRealEstate ({ commit }, data) {
//     let user = new User()
//     let lessorProfile = await user.updateRealEstate(data)
//     return lessorProfile
//   }
}
