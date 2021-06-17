import {
  PROFILES, 
} from './mutation-types'

export default {
  [PROFILES] (state, data) {
    console.log('PROFILES MUTATION:', data)

    state.profiles = data
  }, 
}
