/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import api from '@/api/index'
import config from '@/config/backend'
import axios from 'axios'

export default class Mandat {
  $serveur = api(axios, config)

  async getMandats (bodyParams) {
    return this.$serveur.getRequest(
      {
        body: bodyParams,
        link: 'mandat_action/get_mandats'
      }
    )
  }
  async createMandat (bodyParams) {
    return this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'mandat_action/create_mandat'
      }
    )
  }
  async updateMandat (bodyParams) {
    return this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'mandat_action/udpdate_mandat'
      }
    )
  }
}
