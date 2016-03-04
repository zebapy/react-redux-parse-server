import React, { PropTypes } from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import { Style } from 'radium';

const styles = {
  '*': {
    boxSizing: 'border-box'
  },
  body: {
    fontFamily: 'helvetica, arial, sans-serif',
    fontSize: '16px',
    backgroundColor: '#fff',
    margin: 0
  },
  a: {
    color: 'tomato'
  }
};

const Html = ({ assets, component, store }) => (
  <html lang="en-us">
    <head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <Style rules={styles} />
    </head>
    <body>
      <div id="app" dangerouslySetInnerHTML={{
        __html: component ? renderToString(component) : ''
      }}
      />
      <script dangerouslySetInnerHTML={{
        __html: `window.__INITIAL_STATE__ = ${serialize(store.getState())};`
      }}
      />
      <script src={assets.javascript.main} />
    </body>
  </html>
);

Html.propTypes = {
  assets: PropTypes.object,
  component: PropTypes.node,
  store: PropTypes.object
};

export default Html;
