/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { AUTH_TOKEN_KEY } from '@/constants'

export default ($http, $config) => {
  const $api = $http.create({
    baseURL: $config.serverURL,
    headers: { 'Content-Type': 'application/json' }
  })

  $api.interceptors.request.use(
    config => {
      const authToken = sessionStorage.getItem(AUTH_TOKEN_KEY)
      if (authToken) {
        config.headers['Authorization'] = `Bearer ${authToken}`
      }
      return config
    },
    error => {
      return Promise.reject(error)
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
