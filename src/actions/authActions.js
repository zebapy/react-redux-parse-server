import * as types from '../constants/actionTypes';

export function signup(username, email, password) {
  return {
    type: types.SIGNUP,
    promise: client => client.post('/users', {
      username,
      email,
      password
    })
  };
}

export function login(username, password) {
  return {
    type: types.LOGIN,
    promise: client => client.get('/login', {
      params: {
        username,
        password
      }
    })
  };
}

export function logout() {
  return {
    type: types.LOGOUT
  };
}

export function resetAuthError() {
  return {
    type: types.RESET_AUTH_ERROR
  };
}

export function authWithToken(token) {
  return {
    type: types.AUTH_WITH_TOKEN,
    promise: client => client.get('/users/me', {
      headers: {
        'X-Parse-Session-Token': token
      }
    })
  };
}
