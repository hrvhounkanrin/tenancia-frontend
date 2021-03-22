/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

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
  
  async activeAccount(bodyParams) {
    return await this.$serveur.getRequest(
      {
        body: {...bodyParams},
        link: 'accounts/activate'
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
        link: 'accounts/googleauth'
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



// export default (bodyParams) => {

//   const $api = api(axios, config)

//   const login = async () => {
//     return await $api.postRequest(
//       {
//         body: bodyParams,
//         link: 'accounts/login/'
//       }
//     )
//   }

//   const register =  async () => {
//     return  await $api.postRequest(
//       {
//         body: bodyParams,
//         link: 'accounts/users/'
//       }
//     )
//   }

//   /**
//      * Get All Users
//      * @param {*} params
//      */
//   const getUsers = (params) => {
//     return $api
//       .get(config.baseURL + '/api/v1/auth/provider/users', {
//         params
//       })
      
//   }

//   /**
//      * Get User
//      * @param {*} params
//      */
//   const getUserByID = (params) => {
//     return $api
//       .get(config.baseURL + '/api/v1/auth/provider/users', {
//         params
//       })
      
//   }

//   /**
//      * UPdate User
//      * @param {*} data
//      */
//   const updateUser = (data) => {
//     return $api
//       .put(config.baseURL + '/api/v1/auth/provider/users', {
//         data
//       })
      
//   }

//   /**
//      * Delete User
//      * @param {*} data
//      */
//   const removeUser = (data) => {
//     return $api
//       .delete(config.baseURL + '/api/v1/auth/provider/users', {
//         data
//       })
      
//   }

//     /**
//    * Exchange token with google auth provieder
//    * @param {*} user 
//    */
//      const exchangeToken = (user) => {
//       console.log('api', $api)
//       return $api.post('/accounts/googleauth', user)
//     }
    
//     // Send user email verification request
//     const verifyMail = (userInfo) => {
//       return $api.post('/accounts/activate', userInfo)
//     }

//   return {
//     login,
//     register,
//     getUsers,
//     getUserByID,
//     updateUser,
//     removeUser,
//     exchangeToken,
//     verifyMail
//   }
// }
