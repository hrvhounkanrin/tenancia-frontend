/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import api from '@/api/index'
import config from '@/config/backend'
import axios from 'axios'

export default class AccessoireLoyer {
  $serveur = api(axios, config)
  async getAccessoireLoyer (bodyParams) {
    return await this.$serveur.getRequest(
      {
        body: bodyParams,
        link: 'accessoire_action/get_accessoire'
      }
    )
  }
  async createAccessoireLoyer (bodyParams) {
    return await this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'accessoire_action/create_accessoire'
      }
    )
  }
  async updateAccessoireLoyer (bodyParams) {
    return await this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'accessoire_action/update_accessoire'
      }
    )
  }
 }