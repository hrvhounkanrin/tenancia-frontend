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
        // config.headers["Access-Token"] = sessionStorage.getItem(AUTH_TOKEN_KEY);
        config.headers['Authorization'] = `Bearer ${authToken}`
      }
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  const login = (data) => {
    return $api.post('/api/v1/accounts/login/', data)
  }

  const register = (data) => {
    return $api.post('/api/v1/accounts/users/', data)
  }

  /**
     * Get All Users
     * @param {*} params
     */
  const getUsers = (params) => {
    return $api
      .get(config.baseURL + '/api/v1/auth/provider/users', {
        params
      })
      
  }

  /**
     * Get User
     * @param {*} params
     */
  const getUserByID = (params) => {
    return $api
      .get(config.baseURL + '/api/v1/auth/provider/users', {
        params
      })
      
  }

  /**
     * UPdate User
     * @param {*} data
     */
  const updateUser = (data) => {
    return $api
      .put(config.baseURL + '/api/v1/auth/provider/users', {
        data
      })
      
  }

  /**
     * Delete User
     * @param {*} data
     */
  const removeUser = (data) => {
    return $api
      .delete(config.baseURL + '/api/v1/auth/provider/users', {
        data
      })
      
  }

    /**
   * Exchange token with google auth provieder
   * @param {*} user 
   */
     const exchangeToken = (user) => {
      console.log('api', $api)
      return $api.post('/accounts/googleauth', user)
    }
    
    // Send user email verification request
    const verifyMail = (userInfo) => {
      return $api.post('/accounts/activate', userInfo)
    }

  return {
    login,
    register,
    getUsers,
    getUserByID,
    updateUser,
    removeUser,
    exchangeToken,
    verifyMail
  }
}
