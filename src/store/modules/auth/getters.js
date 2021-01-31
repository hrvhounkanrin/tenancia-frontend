export default {
  user: (state) => {
    return state.user
  },

  userId: (state) => {
    return state.user && state.user.id
  },

  authenticated: (state) => {
    return state.authenticated
  }
}
