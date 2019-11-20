const state = {
  sidebarCollapsed: false,
  sidebarCollapsedMobile: false
}

const actions = {}

const mutations = {  
  SET_SIDEBAR_COLLAPSED (state, value) {
    state.sidebarCollapsed = value
  },
  SET_SIDEBAR_COLLAPSED_MOBILE (state, value) {
    state.sidebarCollapsedMobile = value
  }
}

export const main = {
    namespaced: true,
    state,
    actions,
    mutations
}