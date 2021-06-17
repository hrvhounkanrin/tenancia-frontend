/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import api from '@/api/index'
import config from '@/config/backend'
import axios from 'axios'

export default class TypeDependance {
  $serveur = api(axios, config)

  async getDependance (bodyParams) {
    return await this.$serveur.getRequest(
      {
        body: bodyParams,
        link: 'dependency_action/get_dependancies'
      }
    )
  }
  async createDependance (bodyParams) {
    return await this.$serveur.getRequest(
      {
        body: bodyParams,
        link: 'dependency_action/create_dependancy'
      }
    )
  }
  async updateDependance (bodyParams) {
    return await this.$serveur.getRequest(
      {
        body: bodyParams,
        link: 'dependency_action/update_dependancy'
      }
    )
  }
 }

 