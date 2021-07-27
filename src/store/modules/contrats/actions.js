import {
  ERROR_ADD, ERROR_REMOVE, CONTRAT_LIST, ADD_CONTRAT, UPDATE_CONTRAT,
  AGREE_CONTRAT, ACCESSOIRE_LIST, ADD_ACCESSOIRE, UPDATE_ACCESSOIRE,
  SELECTED_CONTRAT
} from './mutation-types'

import Contrat from '@/api/contrat'
import AcccessoireLoyer from '@/api/accessoireLoyer'

export default {

  async getContrats ({ commit }, data) {
    commit(ERROR_REMOVE, 'getContrats')
    let contrat = new Contrat()
    return contrat.getContrats(data)
      .then(res => {
        if (res.status === 200) {
          let contrats = res.data.payload
          commit(CONTRAT_LIST, contrats)
          if (contrats.length > 0) {
            commit(SELECTED_CONTRAT, contrats[0])
          }
        }
      })
      .catch(errors => {
        commit(ERROR_ADD, { key: 'getContrats', message: errors.message })
        return errors
      })
  },
  async createContrat ({ commit }, data) {
    commit(ERROR_REMOVE, 'createContrat')
    let contrat = new Contrat()
    return await contrat.createContrat(data)
      .then(res => {
        if (res.status === 200) {
          let contrats = res.data.payload
          commit(ADD_CONTRAT, contrats)
        }
      })
      .catch(errors => {
        console.log('Error creating contrat: ', errors)
        commit(ERROR_ADD, { key: 'createContrat', message: errors.message })
        return errors
      })
  },
  async updateContrat ({ commit }, data) {
    let contrat = new Contrat()
    return contrat.updateContrat(data)
      .then(res => {
        if (res.status === 200) {
          let contrat = res.data.payload
          commit(UPDATE_CONTRAT, contrat)
          commit(ERROR_REMOVE, 'updateContrat')
        }
      })
      .catch(errors => {
        commit(ERROR_ADD, { key: 'updateContrat', message: errors.message })
        return errors
      })
  },

  // -----APPARTEMENT-----
  async getAccessoireLoyer ({ commit }, data) {
    commit(ERROR_REMOVE, 'getAccessoireLoyer')
    let accessoireLoyer = new AcccessoireLoyer()
    try {
      let res = await accessoireLoyer.getAccessoireLoyer(data)
      let typeAccessoireLoyer = res.data.payload.accessoireloyer
      typeAccessoireLoyer = typeAccessoireLoyer.map(obj => {
        obj['montant'] = null
        obj['is_peridic'] = false
        return obj
      })
      console.log('getAccessoireLoyer:', typeAccessoireLoyer)
      commit(ACCESSOIRE_LIST, typeAccessoireLoyer)
      return typeAccessoireLoyer
    } catch (errors) {
      commit(ERROR_ADD, { key: 'getAccessoireLoyer', message: errors.message })
    }
  },
  async createAccessoireLoyer ({ commit }, data) {
    commit(ERROR_REMOVE, 'createAccessoireLoyer')
    let accessoireLoyer = new AcccessoireLoyer()
    return accessoireLoyer.createAccessoireLoyer(data)
      .then(res => {
        if (res.status === 200) {
          let accessoire = res.data.payload.accessoireloyer
          commit(ADD_APPARTEMENT, accessoire)
        }
      })
      .catch(errors => {
        commit(ERROR_ADD, { key: 'createAccessoireLoyer', message: errors.message })
      })
  },
  async updateAccessoireLoyer ({ commit }, data) {
    commit(ERROR_REMOVE, 'updateAccessoireLoyer')
    let accessoireLoyer = new AcccessoireLoyer()
    return accessoireLoyer.updateAccessoireLoyer(data)
      .then(res => {
        if (res.status === 200) {
          let appartement = res.data
          commit(UPDATE_ACCESSOIRE, appartement)
        }
      })
      .catch(errors => {
        commit(ERROR_ADD, { key: 'updateAccessoireLoyer', message: errors.message })
        return errors
      })
  }
}
