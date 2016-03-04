import React from 'react';
import { Router, Route, IndexRoute, IndexRedirect } from 'react-router';

import App from './components/App';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';

import LogoutContainer from './containers/LogoutContainer';

import NotFound from './components/NotFound';

export default function createRoutes(store) {

  function requireAuth(nextState, replace) {
    const state = store.getState();

    if(!state.auth.isLoggedIn) {
      replace({
        pathname: '/login',
        query: {
          next: nextState.location.pathname
        }
      });
    }
  }

  return (
    <Route path="/" component={App}>
      <Route path="login" component={LoginPage} />
      <Route path="signup" component={SignupPage} />
      <Route path="logout" component={LogoutContainer} />
      <Route path="*" component={NotFound} />
    </Route>
  );
}
