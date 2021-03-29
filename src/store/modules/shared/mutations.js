import { SET_SIDEBAR_COLLAPSED_MOBILE, SET_SIDEBAR_COLLAPSED} from './mutation-types'

export default {
 
  [SET_SIDEBAR_COLLAPSED_MOBILE] (state, value) {
    state.sidebarCollapsedMobile = value
  },
  [SET_SIDEBAR_COLLAPSED] (state, value) {
    state.sidebarCollapsed = value
  }
}
