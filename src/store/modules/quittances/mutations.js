import {
  ERROR_ADD, ERROR_REMOVE, LESSOR_QUITTANCES, TENANT_QUITTANCES
} from './mutation-types'

export default {
  [LESSOR_QUITTANCES] (state, quittances) {
    state.lessorQuittances = quittances
    console.log('LESSOR_QUITTANCES:', state.lessorQuittances)
  },
  [TENANT_QUITTANCES] (state, quittances) {
    state.tenantQuittances = quittances
  },
  [ERROR_ADD] (state, errorObj) {
    state.errors.push(errorObj)
  },
  [ERROR_REMOVE] (state, errorKey) {
    let index = state.errors.findIndex(err => err.key === errorKey)
    state.errors.splice(index, 1)
  }
}
