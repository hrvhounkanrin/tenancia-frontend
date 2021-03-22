import {
  VERIFIED,
  UPDATE_USER,
  USER,
  AUTH_TOKEN,
  AUTHENTICATED,
  GOOGLE_LOGIN_SUCCESS, GOOGLE_LOGIN_FAILURE
} from './mutation-types'

import { USER_KEY, AUTH_TOKEN_KEY } from '@/constants'

import User from '@/api/user'
// import config from '@/config/backend'
// import axios from 'axios'

// const $api = api(axios, config)

export default {


  async loginAccount ({ commit }, userData) {
    let usersType = [
      'administrator',
      'manager'
    ]

    let user = new User()


    return await user.login(userData).then((res) => {
      console.log('user data', res) 
      if (res.status == 200) {
        let token = res.data.token
        let user = res.data.user
        if (token && user) {
          console.log('user data', user) 

          if (usersType.indexOf(user.profil) >= 0) {
            commit(USER, user.data)
            commit(AUTH_TOKEN, token)
            commit(AUTHENTICATED, true)
            sessionStorage.setItem(USER_KEY, JSON.stringify(user))
            return {
              msg: '',
              status: 200
            }
          } else {
            return 'typeError'
          }
        }
      } else {
        console.log(res, 'is err')
        return res
      }
    }).catch(
      errors => {
        errors.data.forEach(err => {
          
        });
         console.log(err.response, 'is err')
      }
    )
  },

  async register ({ commit }, userData) {
    let user = new User()
     return await user.register(userData)
  },

  async forgetPwd ({ commit }, userData) {
    let user = new User()
    return await user.forgetPassword(userData)
  },
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
  },
  // from old code
  async googleExchangeToken({ dispatch, commit }, googleToken) {
    try {
      console.log('googleExchangeToken action:', googleToken)
      let user = new User()
      let backendResponse = await user.exchangeToken(googleToken)
      console.log('backendResponse', backendResponse)
      commit(GOOGLE_LOGIN_SUCCESS, backendResponse)
      return backendResponse
    } catch (errors) {
      commit(GOOGLE_LOGIN_FAILURE, errors)
      dispatch('alert/error', errors, { root: true })
      return errors
    }
  }
}
