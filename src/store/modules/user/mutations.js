import {
  PROFILES, 
} from './mutation-types'

export default {
  [PROFILES] (state, data) {
    if (data.lessor) {
      localStorage.setItem('lessor', JSON.stringify(data.lessor))
    }

    if (data.tenant) {
      localStorage.setItem('tenant', JSON.stringify(data.tenant))
    }

    if (data.realEstate) {
      localStorage.setItem('realEstate', JSON.stringify(data.realEstate))
    }
    state.profiles = data
  }, 
}
