import {
  ERROR_ADD, ERROR_REMOVE, CONTRAT_LIST, ADD_CONTRAT, UPDATE_CONTRAT,
  AGREE_CONTRAT, ACCESSOIRE_LIST, ADD_ACCESSOIRE, UPDATE_ACCESSOIRE,
  SELECTED_CONTRAT, TENANTS, SEARCHTENANTREQUEST, GETFREEAPPARTMENTREQUEST,
  GETFREEAPPARTMENT, CLIENTCONTRAT, UPDATECLIENTCONTRAT
} from './mutation-types'

export default {
  [CONTRAT_LIST] (state, contrats) {
    state.contrats = contrats
  },
  [CLIENTCONTRAT] (state, contrats) {
    state.clientContrats = contrats
  },
  [UPDATECLIENTCONTRAT] (state, contrat) {
    state.clientContrats = state.clientContrats.findIndex(co => co.id === contrat.id)
    state.clientContrats.splice(index, 1, contrat)
  },
  [TENANTS] (state, retrievedTenants) {
    state.tenants = retrievedTenants
  },
  [SEARCHTENANTREQUEST] (state, request) {
    state.searchTenantRequest = request
  },
  [GETFREEAPPARTMENTREQUEST] (state, request) {
    state.freeAppartmentRequest = request
  },
  [GETFREEAPPARTMENT] (state, data) {
    state.freeAppartment = data
  },
  [ADD_CONTRAT] (state, contrat) {
    state.contrats.push(contrat)
  },
  [UPDATE_CONTRAT] (state, contrat) {
    let index = state.contrats.findIndex(co => co.id === contrat.id)
    state.contrats.splice(index, 1, contrat)
  },
  [SELECTED_CONTRAT] (state, contrat) {
    state.contrats.splice(index, 1, contrat)
  },
  [AGREE_CONTRAT] (state, contrat) {
    state.selectedContrat = contrat
  },
  [ACCESSOIRE_LIST] (state, accessoires) {
    state.typeAccessoireLoyer = accessoires
  },
  [ADD_ACCESSOIRE] (state, accessoire) {
    state.typeAccessoireLoyer = state.typeAccessoireLoyer.push(accessoire)
  },
  [UPDATE_ACCESSOIRE] (state, accessoire) {
    let index = state.typeAccessoireLoyer.findIndex(acc => acc.id === accessoire.id)
    state.contrats.splice(index, 1, accessoire)
  },
  [ERROR_ADD] (state, errorObj) {
    state.errors.push(errorObj)
  },
  [ERROR_REMOVE] (state, errorKey) {
    let index = state.errors.findIndex(err => err.key === errorKey)
    state.errors.splice(index, 1)
  }
}
