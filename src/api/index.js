/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import axios, { CancelTokenStatic } from 'axios'
import { AUTH_TOKEN_KEY, TOKEN_EXPIRE_AT_KEY } from '@/constants'
import moment from 'moment'
import store from '../store'
import router from '../router/router'

export default ($http, $config) => {

  
  const $api = $http.create({
    baseURL: $config.serverURL,
    headers: { 'Content-Type': 'application/json' }
  })

  $api.interceptors.request.use(
   
    config => {
      
      const authToken = sessionStorage.getItem(AUTH_TOKEN_KEY)
      if (authToken) {
        //check if token is about to expire and refresh it
        /*let tokenExpireAt = sessionStorage.getItem(TOKEN_EXPIRE_AT_KEY)
        let nbMinBeforeTokenExpire = moment(tokenExpireAt).diff(moment(), 'minutes')
        let isAlreadyFetchingAccessToken = false
        console.log(nbMinBeforeTokenExpire) 
        if(nbMinBeforeTokenExpire > 0 && nbMinBeforeTokenExpire<=18 && !isAlreadyFetchingAccessToken){
          console.log('Refreshing token:', store)
          store.dispatch('auth/refreshToken')
          isAlreadyFetchingAccessToken = true
        }*/
       
        
        config.headers['Authorization'] = `Bearer ${authToken}`
      }
      return config
    },
    error => {
      console.log(error)
      return Promise.reject(error)
    }
  )
  
  $api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      //Check if token has expired and deconnect user
      const tokenExpireAt = sessionStorage.getItem(TOKEN_EXPIRE_AT_KEY)
      let nbMinBeforeTokenExpire = moment(tokenExpireAt).diff(moment(), 'minutes')
      if(nbMinBeforeTokenExpire <=0 && error.response.status===401){
        store.dispatch('auth/logout')
        router.push({ name: 'Register' })
      }
      
      const errorResponse = {
        isValidationError: false,
        message: 'Network Error.',
        type: 'error',
        errors: [],
      }
      const ErrorMessages = {
        400: 'Une erreur est survenue lors du traitement de votre requête', 
        401: 'Non autorisé, You are not Allowed',
        403: 'Sorry, You are not allowed for This Action',
        404: 'La ressource que vous demandez n\'existe pas.',
        405: 'API Route Method Not Allowed',
        500: 'Server Error, please try again later',
        request: 'There is Some Problem With Our Servers, Please Try again Later',
        other: 'There was some Problem with your Request, Please Try again Later',
      }
      if (error && error.response) {
        switch (error.response.status) {
          case 400:
            errorResponse.message = ErrorMessages['400']
            break
          case 401:
            errorResponse.message = ErrorMessages['401']
            break
          case 403:
            errorResponse.message = ErrorMessages['403']
            break
          case 404:
            errorResponse.message = ErrorMessages['404']
            break
          case 405:
            errorResponse.message = ErrorMessages['405']
            break;
          case 500:
            errorResponse.message = ErrorMessages['500']
            break
        }
      }
      else if (error && error.request) {
        errorResponse.message = ErrorMessages['request']
        // client never received a response, or request never left
      } else if (error instanceof Error) {
        errorResponse.message = error.message
      } else if (typeof error === 'string') {
        errorResponse.message = error
      } else {
        errorResponse.message = ErrorMessages['other']
      }
      return Promise.reject(errorResponse)
    }
  )
  const postRequest = (data) => {
    return $api.post($config.apiVersion + data.link, data.body)
  }

  const putRequest = (data) => {
    return $api.put($config.apiVersion + data.link, data.body)
  }

  const deleteRequest = (data) => {
    return $api.delete($config.apiVersion + data.link, data.body)
  }

  const getRequest = (params) => {
    console.log('the params', params.body)
    return $api
      .get($config.apiVersion + params.link, {
        params: {
          ...params.body
        }
      })

    // .get($config.apiVersion + params.link, params.body)
  }

  return {
    postRequest,
    putRequest,
    getRequest,
    deleteRequest
  }
}



