/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { AUTH_TOKEN_KEY, TOKEN_EXPIRE_AT_KEY } from '@/constants'
import moment from 'moment'

export default ($http, $config) => {
  const $api = $http.create({
    baseURL: $config.serverURL,
    headers: { 'Content-Type': 'application/json' }
  })

  $api.interceptors.request.use(
    config => {
      
      const authToken = sessionStorage.getItem(AUTH_TOKEN_KEY)
      if (authToken) {
        const expire_at  = sessionStorage.getItem(TOKEN_EXPIRE_AT_KEY)
        /*
        let now = moment(new Date())
        let end = moment(expire_at)
        let nbMinBeforeTokenExpire = parseInt(moment.duration(end.diff(now)).asMinutes())
       
        if(nbMinBeforeTokenExpire > 0 && nbMinBeforeTokenExpire<=10){
          //refresh token
        }
        if(nbMinBeforeTokenExpire <=0){
          //logout
        }
        */
        config.headers['Authorization'] = `Bearer ${authToken}`
      }
      return config
    },
    error => {
      console.log(error)
      return Promise.reject(error)
    }
  )
  /*    
  $api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      switch (error.response.status) {
        case 401:
          // Handle Unauthorized calls here
          // Display an alert
          break;
        case 500:
          // Handle 500 here
          // redirect
          break;
        // and so on..
      }
   
      if (error.response.status == 400) {
      }
      return Promise.reject(error);
    }
  )*/
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
