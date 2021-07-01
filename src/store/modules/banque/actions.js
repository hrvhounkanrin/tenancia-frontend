import {
  BANQUE_LIST
} from './mutation-types'

import api from '@/api'
import Banque from '@/api/banque'
import config from '@/config/backend'
import axios from 'axios'

const $api = function api () {
  return api(axios, config)
}

export default {
  async getBanquesList ({ commit }, data) {
    let banque = new Banque()
    let banquesList = await banque.getBanques(data)
    commit(BANQUE_LIST, banquesList.data.payload.banque)
  }
}
