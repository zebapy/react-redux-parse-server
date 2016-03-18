import path from 'path';
import React from 'react';
import express from 'express';
import { ParseServer } from 'parse-server';
import compression from 'compression';
import favicon from 'serve-favicon';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import createRoutes from './routes';
import configureStore from './store/configureStore';
import config from './config';
import Html from './Html';

const protocol = 'http://';
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

const api = new ParseServer({
  databaseURI: 'mongodb://localhost/dev',
  appId: config.parseAppId,
  masterKey: 'MASTER_KEY_HERE', // ######## CHANGE ME FOR PRODUCTION ########
  serverURL: protocol + host + ':' + port
});

const app = express();

app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'static', 'favicon.ico')));

app.use(express.static(path.join(__dirname, '..', 'static')));

app.use(config.parseMountPoint, api);


// TODO: need to cache break main.js
const assets = {
  javascript: {
    main: __DEVELOPMENT__ ? 'http://localhost:3001/dist/main.js' : '/dist/main.js'
  }
};

app.use((req, res) => {

  const store = configureStore();

  // this gets called if server side rendering/routing has problems and errors
  function hydrateOnClient() {
    res.send('<!doctype html>\n' +
      renderToString(<Html assets={assets} store={store} />)
    );
  }

  const routes = createRoutes(store);

  match({ routes, location: req.originalUrl }, (error, redirectLocation, renderProps) => {

    if (redirectLocation) {

      res.redirect(redirectLocation.pathname + redirectLocation.search);

    } else if (error) {

      console.error('ROUTER ERROR:', error);  // eslint-disable-line no-console
      hydrateOnClient();

    } else if (!renderProps) {

      hydrateOnClient();

    } else {

      const component = (
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );

      res.send('<!doctype html>\n' +
        renderToString(<Html assets={assets} component={component} store={store} />)
      );

    }
  });

});

app.listen(port, (err) => {

  if(err) {
    console.error(err); // eslint-disable-line no-console
  }

  console.log('app listening on ' + protocol + host + ':' + port); //eslint-disable-line no-console
});
