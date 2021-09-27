/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import api from '@/api/index'
import config from '@/config/backend'
import axios from 'axios'

export default class Immeuble {
  $serveur = api(axios, config)

  async getImmeubles (bodyParams) {
    return this.$serveur.getRequest(
      {
        body: bodyParams,
        link: 'immeuble_action/get_immeuble'
      }
    )
  }
  async createImmeuble (bodyParams) {
    return this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'immeuble_action/create_immeuble'
      }
    )
  }
  async updateImmeuble (bodyParams) {
    return this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'immeuble_action/update_immeuble'
      }
    )
  }
  async reverseGeocoding (bodyParams) {
    return this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'immeuble_action/reverse_geocoding'
      }
    )
  }
}
