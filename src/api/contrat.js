/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import axios from 'axios'
import api from '@/api/index'
import config from '@/config/backend'
const CancelToken = axios.CancelToken


export default class Contrat {
  $serveur = api(axios, config)
  async getContrats (bodyParams) {
    return await this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'contrat_action/get_lessor_contrat'
      }
    )
  }
  async getClientContrats (bodyParams) {
    return await this.$serveur.getRequest(
      {
        body: bodyParams,
        link: 'contrat_action/get_tenant_contrat'
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

 searchTenantsByEmail(bodyParams){
    const source = CancelToken.source()
    const promise = this.$serveur.postRequest(
      {
          body: bodyParams,
          link: 'client_action/retrieve_client'
      },
      {
        cancelToken: source.token
      }
    )
    return {
      promise, source
    }
  }

  getFreeAppartment(bodyParams){
    const source = CancelToken.source()
    const promise = this.$serveur.getRequest(
      {
          body: bodyParams,
          link: 'logement_action/get_logement'
      },
      {
        cancelToken: source.token
      }
    )
    return {
      promise, source
    }
  }
  
 }