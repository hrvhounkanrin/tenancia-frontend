import {
  ERROR_ADD, ERROR_REMOVE, MANDAT_LIST, ADD_MANDAT, UPDATE_MANDAT,
  SELECTED_MANDAT
} from './mutation-types'
import Mandat from '@/api/mandat'

export default {

  async getMandats ({ commit }, data) {
    commit(ERROR_REMOVE, 'getMandats')
    let mandatApi = new Mandat()
    console.log(mandatApi)
    return mandatApi.getMandats(data)
      .then(res => {
        if (res.status === 200) {
          let mandats = res.data.payload
          commit(MANDAT_LIST, mandats)
          console.log('getMandats:', mandats)
        }
      })
      .catch(errors => {
        commit(ERROR_ADD, { key: 'getMandats', message: errors.message })
        return errors
      })
  },

  async getOneMandat ({ commit }, data) {
    commit(ERROR_REMOVE, 'getOneMandat')
    let mandatApi = new Mandat()
    return mandatApi.getMandats(data)
      .then(res => {
        if (res.status === 200) {
          let mandats = res.data.payload
          commit(SELECTED_MANDAT, mandats[0])
          return true
        }
        return false
      })
      .catch(errors => {
        commit(ERROR_ADD, { key: 'getContrats', message: errors.message })
        return errors
      })
  },

  async createMandat ({ commit }, data) {
    commit(ERROR_REMOVE, 'createMandat')
    let mandatApi = new Mandat()
    return mandatApi.createMandat(data)
      .then(res => {
        if (res.status === 200) {
          let mandats = res.data.payload
          commit(ADD_MANDAT, mandats)
          commit(ERROR_REMOVE, 'createMandat')
          return true
        }
        return false
      })
      .catch(errors => {
        commit(ERROR_ADD, { key: 'createMandat', message: errors.message })
        return errors
      })
  },
  async updateMandat ({ commit }, data) {
    let mandatApi = new Mandat()
    return mandatApi.updateMandat(data)
      .then(res => {
        if (res.status === 200) {
          let mandat = res.data.payload
          commit(UPDATE_MANDAT, mandat)
          commit(ERROR_REMOVE, 'updateMandat')
          return true
        }
      })
      .catch(errors => {
        commit(ERROR_ADD, { key: 'updateMandat', message: errors.message })
        return errors
      })
  },
}
