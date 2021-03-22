/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { AUTH_TOKEN_KEY } from '@/constants'

import api from '@/api/index'
import config from '@/config/backend'
import axios from 'axios'

export default class User {
  $serveur = api(axios, config)


  async login(bodyParams) {
    return await this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'accounts/login/'
      }
    )
  }

  async register(bodyParams) {
    return await this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'accounts/users/'
      }
    )
  }

  async getUsers(bodyParams) {
    return await this.$serveur.getRequest(
      {
        body: bodyParams,
        link: 'auth/provider/users'
      }
    )  
  }

  async exchangeToken(bodyParams) {
    return await this.$serveur.postRequest(
      {
        body: bodyParams,
        link: '/account_action/googleauth'
      }
    )  
  }

  async verifyMail(bodyParams) {
    
    return await this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'accounts/activate'
      }
    )  
  }

}
