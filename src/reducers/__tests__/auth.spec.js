import expect from 'expect';
import * as types from '../../constants/actionTypes';
import reducer, { initialState } from '../auth';

describe('auth reducer', () => {

  it('should initialize with default state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SIGNUP_REQUEST', () => {
    expect(reducer({
      isSigningUp: false
    }, {
      type: types.SIGNUP_REQUEST
    })).toEqual({
      isSigningUp: true
    });
  });

  it('should handle SIGNUP', () => {
    const action = {
      type: types.SIGNUP,
      res: {
        data: {
          sessionToken: '1234',
          objectId: 3
        }
      }
    };

    expect(reducer({
      isLoggedIn: false,
      isSigningUp: false
    }, action)).toEqual({
      isSigningUp: false,
      isLoggedIn: true,
      token: action.res.data.sessionToken,
      userId: action.res.data.objectId,
      user: {
        objectId: action.res.data.objectId,
        sessionToken: action.res.data.sessionToken
      }
    });
  });

  it('should handle SIGNUP_FAILURE', () => {
    expect(reducer({
      isSigningUp: true
    }, {
      type: types.SIGNUP_FAILURE,
      error: {
        data: {
          error: 'Something went wrong.'
        }
      }
    })).toEqual({
      isSigningUp: false,
      error: 'Something went wrong.'
    });
  });

  it('should handle LOGIN_REQUEST', () => {
    expect(reducer({
      isLoggingIn: false
    }, {
      type: types.LOGIN_REQUEST
    })).toEqual({
      isLoggingIn: true
    });
  });

  it('should handle LOGIN', () => {
    const action = {
      type: types.LOGIN,
      res: {
        data: {
          sessionToken: '1234',
          objectId: 3
        }
      }
    };

    expect(reducer({
      isLoggingIn: true,
      isLoggedIn: false
    }, action)).toEqual({
      isLoggedIn: true,
      isLoggingIn: false,
      token: action.res.data.sessionToken,
      userId: action.res.data.objectId,
      user: {
        objectId: action.res.data.objectId,
        sessionToken: action.res.data.sessionToken
      }
    });
  });

  it('should handle LOGIN_FAILURE', () => {
    expect(reducer({
      isLoggingIn: true
    }, {
      type: types.LOGIN_FAILURE,
      error: {
        data: {
          error: 'Something went wrong.'
        }
      }
    })).toEqual({
      isLoggingIn: false,
      error: 'Something went wrong.'
    });
  });

});
