/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import api from '@/api/index'
import config from '@/config/backend'
import axios from 'axios'

export default class Contrat {
  $serveur = api(axios, config)

  async getContrats (bodyParams) {
    return await this.$serveur.getRequest(
      {
        body: bodyParams,
        link: 'contrat_action/get_contrat'
      }
    )
  }
  async createContrat (bodyParams) {
    return await this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'contrat_action/create_contrat'
      }
    )
  }
  async updateContrat (bodyParams) {
    return await this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'contrat_action/update_contrat'
      }
    )
  }
  async agreeContrat(bodyParams){
    return await this.$serveur.postRequest(
        {
            body: bodyParams,
            link: 'contrat_action/contrat_agreement'
        }
      )
  }
 }