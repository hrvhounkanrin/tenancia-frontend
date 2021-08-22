import {
  ERROR_ADD, ERROR_REMOVE, TENANT_QUITTANCES, LESSOR_QUITTANCE
} from './mutation-types'
import { searchTenantRequest, freeAppartmentRequest } from './getters'
import Quittance from '@/api/quittance'

export default {

  async getQuittancesByLessor ({ commit }, data) {
    commit(ERROR_REMOVE, 'getQuittancesByLessor')
    let quittance = new Quittance()
    return quittance.getQuittancesByLessor(data)
      .then(res => {
        if (res.status === 200) {
          let quittances = res.data.payload
          commit(LESSOR_QUITTANCE, quittances)
        }
      })
      .catch(errors => {
        commit(ERROR_ADD, { key: 'getQuittancesByLessor', message: errors.message })
        return errors
      })
  },
  async getQuittanceByTenant ({ commit }, data) {
    console.log('Start getQuittanceByTenant OK ')
    commit(ERROR_REMOVE, 'getQuittanceByTenant')
    let quittance = new Quittance()
    return quittance.getQuittanceByTenant(data)
      .then(res => {
        if (res.status === 200) {
          console.log('getQuittanceByTenant: ',res)
          let quittances = res.data.payload
          console.log('getQuittanceByTenant: ', quittances)
          commit(TENANT_QUITTANCES, quittances)
        }
      })
      .catch(errors => {
        commit(ERROR_ADD, { key: 'getQuittanceByTenant', message: errors.message })
        return errors
      })
  },
}
