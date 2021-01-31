import { userService } from './users-service'
import { router } from '@/router'

const user = JSON.parse(localStorage.getItem('user'))
const state = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null }

const actions = {
  login ({ dispatch, commit }, { username, password }) {
    commit('loginRequest', { username })
    userService.login(username, password)
      .then(
        user => {
          commit('loginSuccess', user)
          router.push('/')
        },
        error => {
          commit('loginFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  logout ({ commit }) {
    userService.logout()
    commit('logout')
  },
  register ({ dispatch, commit }, user) {
    // commit('registerRequest', user)

    userService.register(user)
      .then(function (response) {
        user = response.data
        commit('registerSuccess', user)
        router.push('/login')
        setTimeout(() => {
          // display success message after route change completes
          dispatch('alert/success', 'Registration successful', { root: true })
        })
      })
      .catch(error => {
        let errors = error.response.data
        commit('registerFailure', errors)
        dispatch('alert/error', errors, { root: true })
      })
  }
}

const mutations = {
  loginRequest (state, user) {
    state.status = { loggingIn: true }
    state.user = user
  },
  loginSuccess (state, user) {
    state.status = { loggedIn: true }
    state.user = user
  },
  loginFailure (state) {
    state.status = {}
    state.user = null
  },
  logout (state) {
    state.status = {}
    state.user = null
  },
  registerRequest (state, user) {
    state.status = { registering: true }
  },
  registerSuccess (state, user) {
    state.status = {}
  },
  registerFailure (state, errors) {
    state.status = {}
    // console.log('registerFailure: ', state.errors)
  }
}

export const account = {
  namespaced: true,
  state,
  actions,
  mutations
}
