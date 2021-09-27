/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import api from '@/api/index'
import config from '@/config/backend'
import axios from 'axios'

export default class Appartement {
  $serveur = api(axios, config)

  async getAppartements (bodyParams) {
    return this.$serveur.getRequest(
      {
        body: bodyParams,
        link: 'logement_action/get_logement'
      }
    )
  }
  async createAppartement (bodyParams) {
    return this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'logement_action/create_logement'
      }
    )
  }
  async updateAppartement (bodyParams) {
    return this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'logement_action/update_logement'
      }
    )
  }
  async clonerAppartement (bodyParams) {
    return this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'logement_action/cloner_logement'
      }
    )
  }
}
