<<<<<<< HEAD
import {
  ADMIN_LIST,
  UPDATE_ADMIN,
  ADD_ADMIN,
  REMOVE_ADMIN,
  CREATE_LESSOR,
  UPDATE_LESSOR,
  CREATE_TENANT,
  UPDATE_TENANT,
  CREATE_REAL_ESTATE,
  UPDATE_REAL_ESTATE
} from "./mutation-types";

import api from "@/api";
import User from "@/api/user";
import config from "@/config/backend";
import axios from "axios";

const $api = api(axios, config);

export default {
  async getPoliticy({ commit }, data) {
    return await $api.getPoliticy(data);
  },

  async getAdminList({ commit }, data) {
    const admin = await $api.getAdminList(data);
    commit(ADMIN_LIST, admin.data);
  },

  async addAdmin({ commit }, data) {
    const admin = await $api.addAdmin(data);
    commit(ADD_ADMIN, admin.data);
  },

  async updateAdmin({ commit }, data) {
    const admin = await $api.putAdmin(data);
    commit(UPDATE_ADMIN, admin.data);
  },

  async enableAdmin({ commit }, data) {
    const admin = await $api.enabledAdmin(data);
    commit(UPDATE_ADMIN, admin.data);
  },

  async removeAdmin({ commit }, data) {
    await $api.removeAdmin(data);
    commit(REMOVE_ADMIN, data);
  },

  /**
   * Return connected user profiles. Should be between(tenant, lessor, estate agent)
   * @returns {} Returns global object containing Tenant, Lessor and RealEstate project if exist.
   */
  async myProfiles({ commit }) {
    let user = new User();
    let res = await user.getProfiles();

    if (res.data.payload.lessor) {
      localStorage.setItem("lessor", JSON.stringify(res.data.payload.lessor));
    }

    if (res.data.payload.tenant) {
      localStorage.setItem("tenant", JSON.stringify(res.data.payload.tenant));
    }

    if (res.data.payload.realEstate) {
      localStorage.setItem(
        "realEstate",
        JSON.stringify(res.data.payload.realEstate)
      );
    }
    return res;
  },

  /**
   * Create tenant profil
   * @returns {} Returns tenant profil.
   */
  async createTenant({ commit }, data) {
    let user = new User();
    let tenantProfile = await user.createTenant(data);

    commit(CREATE_TENANT, tenantProfile);
    return tenantProfile;
  },
  /**
   * Update existing tenant profile
   * @returns {} Returns tenant profil.
   */
  async updateTenant({ commit }, data) {
    let user = new User();
    let tenantProfile = await user.updateTenant(data);
    commit(UPDATE_TENANT, tenantProfile);

    return tenantProfile;
  },

  /**
   * Create tenant profil
   * @returns {} Returns lessor profil.
   */
  async createLessor({ commit }, data) {
    let user = new User();
    let lessorProfile = await user.createLessor(data);
    commit(CREATE_LESSOR, lessorProfile);

    return lessorProfile;
  },
  /**
   * Update existing lessor profile
   * @returns {} Returns lessor profil.
   */
  async updateLessor({ commit }, data) {
    let user = new User();
    let lessorProfile = await user.updateLessor(data);
    commit(UPDATE_LESSOR, lessorProfile);
    return lessorProfile;
  },
  /**
   * Create realEstate profil
   * @returns {} Returns real estate profil.
   */
  async createRealEstate({ commit }, data) {
    let user = new User();
    let RealEstateProfile = await user.createRealEstate(data);
    commit(CREATE_REAL_ESTATE, RealEstateProfile);

    return RealEstateProfile;
  },
  /**
   * Update existing lessor profile
   * @returns {} Returns real estate profil.
   */
  async updateRealEstate({ commit }, data) {
    let user = new User();
    let RealEstateProfile = await user.updateRealEstate(data);
    commit(UPDATE_REAL_ESTATE, RealEstateProfile);
    return RealEstateProfile;
  }
};
=======
import {
  ADMIN_LIST,
  UPDATE_ADMIN,
  ADD_ADMIN,
  REMOVE_ADMIN
} from './mutation-types'

import api from '@/api'
import User from '@/api/user'
import config from '@/config/backend'
import axios from 'axios'

const $api = api(axios, config)

export default {
  async getPoliticy ({ commit }, data) {
    await $api.getPoliticy(data)
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

    return res
  },

  /**
   * Create tenant profil
   * @returns {} Returns tenant profil.
   */
  async createTenant ({ commit }, data) {
    let user = new User()
    let tenantProfile = await user.createTenant(data)
    return tenantProfile
  },
  /**
   * Update existing tenant profile
   * @returns {} Returns tenant profil.
   */
  async updateTenant ({ commit }, data) {
    let user = new User()
    let tenantProfile = await user.updateTenant(data)
    return tenantProfile
  },

  /**
   * Create tenant profil
   * @returns {} Returns lessor profil.
   */
  async createLessor ({ commit }, data) {
    let user = new User()
    let lessorProfile = await user.createLessor(data)
    return lessorProfile
  },
  /**
   * Update existing lessor profile
   * @returns {} Returns lessor profil.
   */
  async updateLessor ({ commit }, data) {
    let user = new User()
    let lessorProfile = await user.updateLessor(data)
    return lessorProfile
  },
  /**
   * Create realEstate profil
   * @returns {} Returns real estate profil.
   */
  async createRealEstate ({ commit }, data) {
    let user = new User()
    let lessorProfile = await user.createRealEstate(data)
    return lessorProfile
  },
  /**
 * Update existing lessor profile
 * @returns {} Returns real estate profil.
 */
  async updateRealEstate ({ commit }, data) {
    let user = new User()
    let lessorProfile = await user.updateRealEstate(data)
    return lessorProfile
  }
}
>>>>>>> ea0f95438d39187276bb192d231601cf6c2332d8
