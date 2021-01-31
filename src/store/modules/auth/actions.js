import {
  VERIFIED,
  UPDATE_USER,
  USER,
  AUTH_TOKEN,
  AUTHENTICATED
} from './mutation-types'

import { USER_KEY, AUTH_TOKEN_KEY } from '@/constants'

import api from '@/api'
import config from '@/config/backend'
import axios from 'axios'

const $api = api(axios, config)

export default {

  async loginAccount ({ commit }, userData) {
    let usersType = [
      'administrator',
      'manager'
    ]

    return await $api.login(userData).then((res) => {
      if (res.code == 200) {
        let token = res.data.token
        let user = res.data
        delete user['token']
        if (token && user) {
          console.log('user data', user)

          if (usersType.indexOf(user.profil) >= 0) {
            commit(USER, user.data)
            commit(AUTH_TOKEN, token)
            commit(AUTHENTICATED, true)
            sessionStorage.setItem(USER_KEY, JSON.stringify(user))
          } else {
            return 'typeError'
          }
        }
      } else {
        return res
      }
    })
  },

  async register ({ commit }, userData) {
    return await $api.register(userData)
  },

  async forgetPwd ({ commit }, userData) {
    return await $api.forgetPassword(userData)
  },

  // async updateAdmin ({ commit }, data) {
  //   const user = await $api.putAdmin(data)
  //   commit(UPDATE_USER, user.data)
  // },

  verified ({ commit }) {
    commit(VERIFIED)
  },

  logout ({ commit }) {
    commit(USER, null)
    commit(AUTH_TOKEN, null)
    commit(AUTHENTICATED, false)
    sessionStorage.removeItem(AUTH_TOKEN_KEY)
    sessionStorage.removeItem(USER_KEY)
    // delete axios.defaults.headers.common["Access-Token"];
    delete axios.defaults.headers.common['Authorization']
  }
}
