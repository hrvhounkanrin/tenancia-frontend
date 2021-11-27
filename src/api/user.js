/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import api from '@/api/index'
import config from '@/config/backend'
import axios from 'axios'

export default class User {
  $serveur = api(axios, config)

  async login (bodyParams) {
    return this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'accounts/login/'
      }
    )
  }

  async register (bodyParams) {
    return this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'accounts/users/'
      }
    )
  }

  async activeAccount (bodyParams) {
    return this.$serveur.getRequest(
      {
        body: { ...bodyParams },
        link: 'accounts/activate'
      }
    )
  }

  async setUserAvatar (bodyParams) {
    return this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'profile_action/define_profile'
      }
    )
  }

  async changeUserPass (bodyParams) {
    return this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'account_action/change_password'
      }
    )
  }

  async getUsers (bodyParams) {
    return this.$serveur.getRequest(
      {
        body: bodyParams,
        link: 'auth/provider/users'
      }
    )
  }

  async exchangeToken (bodyParams) {
    return this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'account_action/googleauth'
      }
    )
  }

  async verifyMail (bodyParams) {
    return this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'accounts/activate'
      }
    )
  }

  async getProfiles (bodyParams) {
    return this.$serveur.getRequest(
      {
        body: bodyParams,
        link: 'profile_action/get_profile'
      }
    )
  }

  async createProfile (bodyParams) {
    return this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'profile_action/create_profile'
      }
    )
  }

  async updateProfile (bodyParams) {
    return this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'profile_action/update_profile'
      }
    )
  }
}
