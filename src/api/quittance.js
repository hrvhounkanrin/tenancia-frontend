/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import axios from 'axios'
import api from '@/api/index'
import config from '@/config/backend'
const CancelToken = axios.CancelToken

export default class Quittance {
  $serveur = api(axios, config)
  async getQuittancesByLessor (bodyParams) {
    return this.$serveur.getRequest(
      {
        body: bodyParams,
        link: 'quittance_action/get_lessor_quittances'
      }
    )
  }

  async getQuittanceByTenant (bodyParams) {
    return this.$serveur.getRequest(
      {
        body: bodyParams,
        link: 'quittance_action/get_tenant_quittances'
      }
    )
  }
}
