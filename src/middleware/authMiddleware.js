import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  RESET_PASSWORD
} from '../constants/actionTypes';

import { localStorageTokenName } from '../config';

export default function authMiddleware() {
  return next => action => {
    const { type } = action;

    if(__CLIENT__) {

      if(type === LOGIN || type === SIGNUP) {
        window.localStorage.setItem(localStorageTokenName, action.res.data.sessionToken);
      }

      if(type === LOGOUT) {
        window.localStorage.removeItem(localStorageTokenName);
      }
    }

    next(action);
  };
}
