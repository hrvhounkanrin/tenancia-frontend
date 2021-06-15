/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import api from '@/api/index'
import config from '@/config/backend'
import axios from 'axios'

export default class Banque {
  $serveur = api(axios, config)

  async getBanques (bodyParams) {
    return await this.$serveur.getRequest(
      {
        body: bodyParams,
        link: 'banque_action/get_banque'
      }
    )
  }

 }