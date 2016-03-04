import createReducer from '../utils/createReducer';
import {
  SIGNUP_REQUEST, SIGNUP, SIGNUP_FAILURE,
  LOGIN_REQUEST, LOGIN, LOGIN_FAILURE,
  AUTH_WITH_TOKEN_REQUEST, AUTH_WITH_TOKEN, AUTH_WITH_TOKEN_FAILURE,
  LOGOUT
} from '../constants/actionTypes';

export const initialState = {
  isSigningUp: false,
  isLoggingIn: false,
  isLoggedIn: false,
  isLoggingInWithToken: false,
  token: '',
  userId: '',
  user: {},
  error: ''
};

export default createReducer({
  [SIGNUP_REQUEST]: state => ({
    isSigningUp: true
  }),
  [SIGNUP]: (state, action) => ({
    token: action.res.data.sessionToken,
    userId: action.res.data.objectId,
    user: action.res.data,
    isLoggedIn: true,
    isSigningUp: false
  }),
  [SIGNUP_FAILURE]: (state, action) => ({
    isSigningUp: false,
    error: action.error.data.error
  }),
  [LOGIN_REQUEST]: state => ({
    isLoggingIn: true
  }),
  [LOGIN]: (state, action) => ({
    token: action.res.data.sessionToken,
    userId: action.res.data.objectId,
    isLoggedIn: true,
    isLoggingIn: false,
    user: action.res.data
  }),
  [LOGIN_FAILURE]: (state, action) => ({
    error: action.error.data.error,
    isLoggingIn: false
  }),
  [AUTH_WITH_TOKEN_REQUEST]: state => ({
    isLoggingInWithToken: true
  }),
  [AUTH_WITH_TOKEN]: (state, action) => ({
    isLoggingInWithToken: false,
    isLoggedIn: true,
    token: action.res.data.sessionToken,
    userId: action.res.data.objectId,
    user: action.res.data
  }),
  [AUTH_WITH_TOKEN_FAILURE]: (state, action) => ({
    error: action.error.data.error
  }),
  [LOGOUT]: state => ({
    isLoggedIn: false,
    token: '',
    userId: '',
    user: {}
  })
}, initialState);
