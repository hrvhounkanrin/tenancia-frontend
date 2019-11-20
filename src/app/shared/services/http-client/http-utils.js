import { httpClient } from './http-client'
import { apiBaseUrl } from '@/environment/environment'
const apiUrl = '/api/v1'
const BASE_HEADERS = { 'Content-Type': 'application/json' }
/*
* Wraps axios and provides
* more convenient post method
* calls with payload data
*/
export function register (uri, data) {
  uri = apiUrl + uri
  return httpClient.post (uri, data, {
    headers: getHeaders(),
    withCredentials: false
  })
}

/*
* Wraps axios and provides
* more convenient post method
* calls with payload data
*/
export function post(uri, data) {
  uri = apiBaseUrl + apiUrl + uri
  console.log('Start post util: ', uri)
  return httpClient.post(uri, data, {
    headers: getHeaders(),
    withCredentials: false
  })
}

/*
* Wraps axios and provides
* more convenient put method
* calls with data
*/
export function put(uri, data) {
  uri = apiUrl + uri;
  return httpClient.put(uri, data, {
    headers: getHeaders(),
    withCredentials: true
  })
}

/*
* Wraps axios and provides
* more convenient delete method
*/
export function remove(uri) {
  uri = apiUrl + uri;
  return httpClient.delete(uri, {
    headers: getHeaders(),
    withCredentials: true
  })
}

/*
* Wraps axios and provides
* more convenient get method
* calls with data.
*/
export function get(uri, data = {}) {
  if (Object.keys(data).length > 0) {
    uri = `${uri}?${qs(data)}`
  }
  uri = apiUrl + uri;
  return httpClient.get(uri, {
    headers: getHeaders(),
    withCredentials: true
  })
}

export function upload(uri, data) {
  uri = apiUrl + uri;
  return fetch(uri, {
    headers: getHeaders(true),
    cors: true,
    method: 'POST',
    body: data
  })
}

/*
* Wraps error responses from the API
* and returns `Promise.reject` with error
*/
export function checkResponse(response) {
  if (validStatuses.includes(response.status)) {
    return response
  }

  // If not authorized then reset token
  // and redirect to login page
  if (response.status === 401) {
    localStorage.removeItem('token')
    router.push('login')

    return Promise.reject(new Error('USER_ANONYMOUS'))
  }

  let err = new Error(response.statusText)
  err.response = response

  return Promise.reject(err)
}

// Just a convenient shorthand
export const esc = encodeURIComponent

// Returns formatted query string from object
export function qs(params) {
  return (
    Object
    .keys(params)
    .map(k => esc(k) + '=' + esc(params[k]))
    .join('&')
  )
}

/*
* Returns default headers list
* which will be used with every request.
*/
function getHeaders(multipart = false) {
  let defaultHeaders = BASE_HEADERS
  if (multipart) {
    defaultHeaders = {}
  }
  if (localStorage.token) {
    defaultHeaders = {
      'Authorization': `Bearer ${localStorage.token}`,
      ...defaultHeaders
    }
  }
  return defaultHeaders
}
