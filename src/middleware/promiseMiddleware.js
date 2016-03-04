import { Schema, arrayOf, normalize } from 'normalizr';
import axios from 'axios';
import config from '../config';

axios.defaults.baseURL = config.parseMountPoint;
axios.defaults.headers.common['X-Parse-Application-Id'] = config.parseAppId;

export default function promiseMiddleware() {
  return next => action => {
    const { promise, type, schema, ...rest } = action;

    if (!promise && typeof promise !== 'function') {
      return next(action);
    }

    const SUCCESS = type;

    const REQUEST = type + '_REQUEST';
    const FAILURE = type + '_FAILURE';

    next({ ...rest, type: REQUEST });

    return promise(axios).then(res => {

      if(schema) {
        next({
          ...rest,
          res,
          response: normalize(res.data, schema),
          type: SUCCESS
        });
      } else {
        next({ ...rest, res, type: SUCCESS });
      }

      return true;
    }).catch(error => {
      next({ ...rest, error, type: FAILURE });

      console.log(error); // eslint-disable-line no-console

      return false;
    });
  };
}
