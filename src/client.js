import 'babel-polyfill'; // import polyfil for ie browsers
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import createRoutes from './routes';

const store = configureStore(window.__INITIAL_STATE__);
const routes = createRoutes(store);

const mountNode = document.getElementById('app');

const component = (
  <Router history={browserHistory} routes={routes} />
);

ReactDOM.render(
  <Provider store={store}>
    {component}
  </Provider>,
  mountNode
);

if (__DEVELOPMENT__) {
  if (!mountNode || !mountNode.firstChild || !mountNode.firstChild.attributes || !mountNode.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.'); // eslint-disable-line no-console
  }
}

if (__DEVTOOLS__) {
  const DevTools = require('./containers/DevTools');
  ReactDOM.render(
    <Provider store={store}>
      <div>
        {component}
        <DevTools />
      </div>
    </Provider>,
    mountNode
  );
}
