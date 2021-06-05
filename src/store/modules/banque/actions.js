import {
  BANQUE_LIST
} from './mutation-types'

import Banque from '@/api/banque'

export default {
  async getBanquesList ({ commit }, data) {
    let banque = new Banque()
    let banquesList = await banque.getBanques(data)
    commit(BANQUE_LIST, banquesList.data.payload.banque)
  }
}
