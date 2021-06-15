import {
  BANQUE_LIST
} from './mutation-types'

import Vue from 'vue'

export default {
  [BANQUE_LIST] (state, banques) {
    state.banque_list = banques
  }
}
