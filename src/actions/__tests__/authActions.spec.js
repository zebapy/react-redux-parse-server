import expect from 'expect';
import { SIGNUP, LOGIN, AUTH_WITH_TOKEN, RESET_AUTH_ERROR, LOGOUT } from '../../constants/actionTypes';
import * as actions from '../authActions';

const axiosMock = {
  post(url, data, config) {
    let res = {
      url,
      data
    };

    if(config) {
      res.config = config;
    }

    return res;
  },
  get(url, config) {
    let res = {
      url
    };

    if(config) {
      res.config = config;
    }

    return res;
  }
};

describe('auth actions', () => {
  describe('signup action', () => {
    it('should return a SIGNUP action', () => {

      const username = 'jsmith';
      const email = 'jsmith@example.com';
      const password = 'cl3v3rp4ssw0rd';

      const action = actions.signup(username, email, password);

      expect(action.type).toBe(SIGNUP);

      expect(action.promise(axiosMock)).toEqual({
        url: '/users',
        data: {
          username,
          email,
          password
        }
      });

    });
  });

  describe('login action', () => {
    it('should return a LOGIN action', () => {

      const username = 'jsmith';
      const password = 'cl3v3rp4ssw0rd';

      const action = actions.login(username, password);

      expect(action.type).toBe(LOGIN);

      expect(action.promise(axiosMock)).toEqual({
        url: '/login',
        config: {
          params: {
            username,
            password
          }
        }
      });

    });
  });

  describe('auth with token action', () => {
    it('should return an AUTH_WITH_TOKEN action', () => {
      const token = '123456789';
      const action = actions.authWithToken(token);

      expect(action.type).toBe(AUTH_WITH_TOKEN);

      expect(action.promise(axiosMock)).toEqual({
        url: '/users/me',
        config: {
          headers: {
            'X-Parse-Session-Token': token
          }
        }
      });
    });
  });

  describe('logout action', () => {
    it('should return a logout action', () => {
      expect(actions.logout()).toEqual({
        type: LOGOUT
      });
    });
  });

  describe('reset auth error action', () => {
    expect(actions.resetAuthError()).toEqual({
      type: RESET_AUTH_ERROR
    });
  });

});
