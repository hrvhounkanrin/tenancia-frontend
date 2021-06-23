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
  async refreshToken (bodyParams) {
    return await this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'accounts/api-token-refresh/'
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
  async createTenant (bodyParams) {
    return await this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'client_action/create_client'
      }
    )
  }
  async updateTenant (bodyParams) {
    return await this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'client_action/update_client'
      }
    )
  }

  async createLessor (bodyParams) {
    return await this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'proprietaire_action/create_proprio'
      }
    )
  }
  async updateLessor (bodyParams) {
    return await this.$serveur.postRequest(
      {
        body: bodyParams,
        link: "proprietaire_action/update_proprio"
      }
    )
  }

  async createRealEstate (bodyParams) {
    return await this.$serveur.postRequest(
      {
        body: bodyParams,
        link: 'realestate_action/create_mandataire'
      }
    )
  }
  async updateRealEstate (bodyParams) {
    return await this.$serveur.postRequest(
      {
        body: bodyParams,
        link: "realestate_action/update_mandataire"
      }
    )
  }
}
