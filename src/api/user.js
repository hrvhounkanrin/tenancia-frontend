/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import api from '@/api/index'
import config from '@/config/backend'
import axios from 'axios'

export default class User {
  $serveur = api(axios, config)

  async login (bodyParams) {
    return await this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'accounts/login/'
      }
    )
  }

  async register (bodyParams) {
    return await this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'accounts/users/'
      }
    )
  }

  async activeAccount (bodyParams) {
    return await this.$serveur.getRequest(
      {
        body: { ...bodyParams },
        link: 'accounts/activate'
      }
    )
  }

  async getUsers (bodyParams) {
    return await this.$serveur.getRequest(
      {
        body: bodyParams,
        link: 'auth/provider/users'
      }
    )
  }

  async exchangeToken (bodyParams) {
    return await this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'account_action/googleauth'
      }
    )
  }

  async verifyMail (bodyParams) {
    return await this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'accounts/activate'
      }
    )
  }

  async getProfiles (bodyParams) {
    return await this.$serveur.getRequest(
      {
        body: bodyParams,
        link: 'profile_action/get_profile'
      }
    )
  }
  
  async createProfile (bodyParams) {
    return await this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'profile_action/create_profile'
      }
    )
  }

  async updateProfile (bodyParams) {
    return await this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'profile_action/update_profile'
      }
    )
  }

}
