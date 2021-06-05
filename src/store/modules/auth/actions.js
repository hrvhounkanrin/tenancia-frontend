import {
  VERIFIED,
  USER,
  AUTH_TOKEN,
  AUTHENTICATED,
  GOOGLE_LOGIN_FAILURE,
  LOCAL_LOGIN_FAILURE,
  LOCAL_LOGIN_SUCCESS,
  TOKEN_EXPIRE_AT
} from './mutation-types'

import { USER_KEY, AUTH_TOKEN_KEY, TOKEN_EXPIRE_AT_KEY } from '@/constants'
import User from '@/api/user'

/**
   * @todo Changer la gestion des erreurs axios, revoir et harmoniser les retours d'erreurs du backend aussi
  */
const loginAccount = async ({ commit }, userData) => {
  let user = new User()
  await user
    .login(userData)
    .then(res => {
      if (res.status === 200) {
        let userData = res.data
        commit(USER, userData.user)
        commit(AUTH_TOKEN, userData.token)
        commit(TOKEN_EXPIRE_AT, userData.expire_in)
        commit(AUTHENTICATED, true)
        commit(LOCAL_LOGIN_SUCCESS)
        sessionStorage.setItem(USER_KEY, JSON.stringify(userData.user))
      }
      return res
    })
    .catch(errors => {
      commit(LOCAL_LOGIN_FAILURE, 'Une erreur est survenue lors de la connexion. Vérifiez vos identifiants de connexion.')
      return errors
    })
}
/**
   * @todo Changer la gestion des erreurs axios, revoir et harmoniser les retours d'erreurs du backend aussi
  */
const register = async ({ commit }, userData) => {
  let user = new User()
  let registeredUser = await user.register(userData)
  return registeredUser
}

const activedUserAccount = async ({ commit }, userData) => {
  let user = new User()
  await user
    .activeAccount(userData)
    .then(res => {
      console.log('user data', res)
      if (res.status === 200) {
        connectUser(res.data)
        return res.data
      } else {
        console.log(res, 'is err')
        return res
      }
    })
    .catch(errors => {
      // errors.data.forEach(err => {})
      console.log(errors, 'is err')
    })
}

const forgetPwd = async ({ commit }, userData) => {
  let user = new User()
  await user.forgetPassword(userData)
}
const verified = ({ commit }) => {
  commit(VERIFIED)
}

const logout = ({ commit }) => {
  commit(USER, null)
  commit(AUTH_TOKEN, null)
  commit(AUTHENTICATED, false)
  sessionStorage.removeItem(AUTH_TOKEN_KEY)
  sessionStorage.removeItem(USER_KEY)
  sessionStorage.removeItem(TOKEN_EXPIRE_AT_KEY)
  return true
}
const googleExchangeToken = async ({ dispatch, commit }, googleToken) => {
  try {
    let user = new User()
    let backendResponse = await user.exchangeToken(googleToken)
    console.log('backendResponse', backendResponse.data)
    let userData = backendResponse.data.payload
    commit(USER, userData.user)
    commit(AUTH_TOKEN, userData.token)
    commit(AUTHENTICATED, true)
    sessionStorage.setItem(USER_KEY, JSON.stringify(userData.user))
    return backendResponse.data.payload
  } catch (errors) {
    commit(GOOGLE_LOGIN_FAILURE, errors)
    console.log('googleExchangeToken occured', errors)
    return errors
  }
}
const connectUser = ({ commit }, userData) => {
  console.log('connectUser:', userData)
  let token = userData.token
  let user = userData.user
  if (token && user) {
    console.log('user data', user)
    commit(USER, user.data)
    commit(AUTH_TOKEN, token)
    commit(AUTHENTICATED, true)
    sessionStorage.setItem(USER_KEY, JSON.stringify(user))
    return {
      msg: '',
      status: 200
    }
  }
}

export default { loginAccount, register, activedUserAccount, forgetPwd, verified, logout, googleExchangeToken }
