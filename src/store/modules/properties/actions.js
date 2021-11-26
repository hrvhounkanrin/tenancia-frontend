import {
  IMMEUBLE_LIST, ADD_IMMEUBLE, UPDATE_IMMEUBLE, APPARTEMENT_LIST, SELECTED_IMMEUBLE,
  ADD_APPARTEMENT, DEPENDANCE_LIST, ADD_DEPENDANCE, UPDATE_APPARTEMENT, ERROR_ADD, ERROR_REMOVE, REVERSE_GEOCODING_RESPONSE
} from './mutation-types'

import Immeuble from '@/api/immeuble'
import Appartement from '@/api/appartement'
import TypeDependance from '@/api/typeDependance'
import Util from '@/api/utils'

export default {

  async getImmeubles ({ commit }, data) {
    commit(ERROR_REMOVE, 'getImmeubles')
    let immeuble = new Immeuble()
    return immeuble.getImmeubles(data)
      .then(res => {
        if (res.status === 200) {
          let immeubles = res.data.payload
          immeubles = immeubles.map(obj => ({ ...obj, isActive: false }))
          if (immeubles.length > 0) {
            immeubles[0].isActive = true
            commit(SELECTED_IMMEUBLE, immeubles[0])
          }
          commit(IMMEUBLE_LIST, immeubles)
        }
      })
      .catch(errors => {
        commit(ERROR_ADD, { key: 'getImmeubles', message: errors.message })
        return errors
      })
  },
  async createImmeuble ({ commit }, data) {
    commit(ERROR_REMOVE, 'createImmeuble')
    let immeuble = new Immeuble()
    return await immeuble.createImmeuble(data)
      .then(res => {
        if (res.status === 200) {
          let immeuble = res.data.payload
          commit(ADD_IMMEUBLE, immeuble)
          //commit(SELECTED_IMMEUBLE, immeubles)
          return immeuble
        }
      })
      .catch(errors => {
        console.log('Error creating immeuble: ', errors)
        commit(ERROR_ADD, { key: 'createImmeuble', message: errors.message })
        return errors
      })
  },
  async updateImmeuble ({ commit }, data) {
    let immeuble = new Immeuble()
    return immeuble.updateImmeuble(data)
      .then(res => {
        if (res.status === 200) {
          let immeubles = res.data.payload
          commit(UPDATE_IMMEUBLE, immeubles)
          commit(ERROR_REMOVE, 'updateImmeuble')
        }
      })
      .catch(errors => {
        commit(ERROR_ADD, { key: 'updateImmeuble', message: errors.message })
        return errors
      })
  },

  // -----APPARTEMENT-----
  async getAppartements ({ commit }, data) {
    commit(ERROR_REMOVE, 'getAppartements')
    let appartement = new Appartement()
    try {
      let res = await appartement.getAppartements(data)
      commit(APPARTEMENT_LIST, res.data.payload)

      return res.data.payload
    } catch (error) {
      commit(ERROR_ADD, { key: 'updateImmeuble', message: errors.message })
    }
  },
  async createAppartement ({ commit }, data) {
    commit(ERROR_REMOVE, 'createAppartement')
    let appartement = new Appartement()
    return appartement.createAppartement(data)
      .then(res => {
        if (res.status === 200) {
          let appartement = res.data.payload
          commit(ADD_APPARTEMENT, appartement)
        }
      })
      .catch(errors => {
        commit(ERROR_ADD, { key: 'createAppartement', message: errors.message })
      })
  },
  async updateAppartement ({ commit }, data) {
    commit(ERROR_REMOVE, 'updateAppartement')
    let appartement = new Appartement()
    return appartement.updateAppartement(data)
      .then(res => {
        if (res.status === 200) {
          let appartement = res.data
          // commit(UPDATE_APPARTEMENT, appartement)
        }
      })
      .catch(errors => {
        commit(ERROR_ADD, { key: 'updateAppartement', message: errors.message })
        return errors
      })
  },
  async clonerAppartement ({ commit }, data) {
    commit(ERROR_REMOVE, 'clonerAppartement')
    let appartement = new Appartement()
    return appartement.clonerAppartement(data)
  },

  // -----TYPE DEPENDANCES-----
  async createNewDependency ({ commit }, data) {
    commit(ERROR_REMOVE, 'createNewDependency')
    let typeDependance = new TypeDependance()
    return typeDependance.createDependance(data)
      .then(res => {
        if (res.status === 200) {
          let typeDependance = res.data.payload
          commit(ADD_DEPENDANCE, { ...typeDependance, nbre: null, superficie: null })
        }
      })
      .catch(errors => {
        commit(ERROR_ADD, { key: 'createNewDependency', message: errors.message })
      })
  },
  async getTypedependances ({ commit }, data) {
    commit(ERROR_REMOVE, 'getTypedependances')
    let typeDependance = new TypeDependance()
    try {
      let res = await typeDependance.getDependance(data)
      let dependances = res.data.payload
      dependances = dependances.map(obj => {
        obj['nbre'] = null
        obj['superficie'] = null
        return obj
      })
      commit(DEPENDANCE_LIST, dependances)

      return res.data.payload
    } catch (errors) {
      commit(ERROR_ADD, { key: 'getTypedependances', message: errors.message })
    }
  },
  async createTypeDependance ({ commit }, data) {
    commit(ERROR_REMOVE, 'createTypeDependance')
    let typeDependance = new TypeDependance()
    return typeDependance.createTypeDependance(data)
      .then(res => {
        if (res.status === 200) {
          let typeDependance = res.data
          commit(ADD_DEPENDANCE, typeDependance)
        }
        return true
      })
      .catch(errors => {
        commit(ERROR_ADD, { key: 'createTypeDependance', message: errors.message })
        return false
      })
  },
  async reverseGeocoding ({ commit }, data) {
    commit(ERROR_REMOVE, 'reverseGeocoding')
    let immeuble = new Immeuble()
    return immeuble.reverseGeocoding(data)
      .then(res => {
        if (res.status === 200) {
          let places = res.data.payload
          console.log(places)
          commit(REVERSE_GEOCODING_RESPONSE, places)
        }
      })
      .catch(errors => {
        commit(ERROR_ADD, { key: 'reverseGeocoding', message: errors.message })
        return errors
      })
  }

}
