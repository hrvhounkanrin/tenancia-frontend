import {
  ERROR_ADD, ERROR_REMOVE, MANDAT_LIST, ADD_MANDAT, UPDATE_MANDAT,
  SELECTED_MANDAT
} from './mutation-types'

export default {
  [MANDAT_LIST] (state, mandats) {
    state.mandats = mandats
  },
  [ADD_MANDAT] (state, mandat) {
    state.mandats.push(mandat)
  },
  [SELECTED_MANDAT] (state, mandat) {
    state.selectedMandat = mandat
  },
  [UPDATE_MANDAT] (state, mandat) {
    let index = state.mandats.findIndex(md => md.id === mandat.id)
    state.contrats.splice(index, 1, mandat)
  },
  [ERROR_ADD] (state, errorObj) {
    state.errors.push(errorObj)
  },
  [ERROR_REMOVE] (state, errorKey) {
    let index = state.errors.findIndex(err => err.key === errorKey)
    state.errors.splice(index, 1)
  }
}
