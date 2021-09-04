import {
  ERROR_ADD, ERROR_REMOVE, TENANT_QUITTANCES, LESSOR_QUITTANCES
} from './mutation-types'
import { searchTenantRequest, freeAppartmentRequest } from './getters'
import Quittance from '@/api/quittance'

export default {
  async getQuittanceByTenant ({ commit }, data) {
    commit(ERROR_REMOVE, 'getQuittanceByTenant')
    let quittance = new Quittance()
    return quittance.getQuittanceByTenant(data)
      .then(res => {
        if (res.status === 200) {
          let quittances = res.data.payload
          commit(TENANT_QUITTANCES, quittances)
        }
      })
      .catch(errors => {
        commit(ERROR_ADD, { key: 'getQuittanceByTenant', message: errors.message })
        return errors
      })
  },
  async getQuittanceByLessor ({ commit }, data) {
    commit(ERROR_REMOVE, 'getQuittanceByLessor')
    let quittance = new Quittance()
    return quittance.getQuittancesByLessor(data)
      .then(res => {
        if (res.status === 200) {
          let quittances = res.data.payload
          commit(LESSOR_QUITTANCES, quittances)
        }
      })
      .catch(errors => {
        commit(ERROR_ADD, { key: 'getQuittanceByLessor', message: errors.message })
        return errors
      })
  },
}
