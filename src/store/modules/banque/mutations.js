import {
  BANQUE_LIST
} from './mutation-types'

export default {
  [BANQUE_LIST] (state, banques) {
    state.banque_list = banques
  }
}
