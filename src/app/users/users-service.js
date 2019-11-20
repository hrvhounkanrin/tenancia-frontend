import { get, post, put } from '@/app/shared/services'

export const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete
}

function login (email, password) {
  const data = JSON.stringify({ email, password })
  return post(`${config.apiUrl}/users`, data)
  .then(handleResponse)
  .then(user => {
    // login successful if there's a jwt token in the response
    if (user.token) {
        // store user details and jwt token in local storage 
        // to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user))
    }
    return user;
  });
}

function logout () {
  localStorage.removeItem('user')
}

function register (user) {
  return post('/users',JSON.stringify(user));
    /*.then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });*/
}

function getAll () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }
  return fetch ('${config.apiUrl}/users', requestOptions).then(handleResponse)
}

function getById (id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }
  return fetch('${config.apiUrl}/users/${id}', requestOptions).then(handleResponse)
}

function update (user) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }
  return fetch ('${config.apiUrl}/users/${user.id}', requestOptions).then(handleResponse)
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete (id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  }
  return fetch ('${config.apiUrl}/users/${id}', requestOptions).then(handleResponse)
}

function handleResponse (response) {
    return response
}
