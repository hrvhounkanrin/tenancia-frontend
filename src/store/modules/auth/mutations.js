import { VERIFIED, UPDATE_USER, USER, AUTH_TOKEN, AUTHENTICATED, GOOGLE_LOGIN_SUCCESS, GOOGLE_LOGIN_FAILURE } from './mutation-types'

import axios from 'axios'
import { USER_KEY, AUTH_TOKEN_KEY } from '@/constants'

export default {
  [VERIFIED] (state) {
    const authToken = sessionStorage.getItem(AUTH_TOKEN_KEY)

    state.authenticated = !!authToken

    if (state.authenticated) {
      state.user = JSON.parse(sessionStorage.getItem(USER_KEY))
      // axios.defaults.headers.common["Access-Token"] = authToken;
      axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`
    }
  },

  [USER] (state, user) {
    state.user = user
  },

  [UPDATE_USER] (state, user) {
    sessionStorage.setItem(USER_KEY, JSON.stringify(user))
    state.user = user
  },

  [AUTH_TOKEN] (state, token) {
    sessionStorage.setItem(AUTH_TOKEN_KEY, token)
  },

  [AUTHENTICATED] (state, authenticated) {
    state.authenticated = authenticated
  },

  [GOOGLE_LOGIN_SUCCESS] (state, res) {
    state.status = { loggingIn: true }
      state.errors = null
      state.connectedUser = user
      state.token = null
  },

  [GOOGLE_LOGIN_FAILURE] (state, res) {
    state.status = { 'errorOccured': true }
      state.errors = res
      state.connectedUser = null
  }
  
}
