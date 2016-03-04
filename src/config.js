/**
 * config
 *
 * ####################
 * ####################
 * WARNING: DO NOT PUT SENSITIVE INFORMATION IN THIS.
 * ####################
 * ####################
 *
 * Some parts of the app import this file, which become bundled for client side.
 * Doing this exposes the information in the bundle.js file created and loaded in the browser.
 *
 * @exports Object
 */

const environment = {
  development: {

  },
  production: {

  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  port: process.env.PORT,
  apiPort: process.env.APIPORT || 8000,
  parseMountPoint: '/parse',
  parseAppId: 'MY_APP_ID',
  localStorageTokenName: 'token'
}, environment);
