/**
 * Remember me
 *
 * Logs the user in if they have the JWT in their local storage.
 * Intended to wrap the entire <App /> component.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { authWithToken } from '../actions/authActions';

import { localStorageTokenName } from '../config';

// import Spinner from '../components/Spinner';

function RememberMe(WrappedComponent) {

  @connect(state => ({
    isLoggedIn: state.auth.isLoggedIn,
    isLoggingIn: state.auth.isLoggingInWithToken
  }), {
    authWithToken
  })
  class Rememberer extends Component {

    static contextTypes = {
      router: PropTypes.object.isRequired
    }

    componentDidMount() {
      const token = window.localStorage[localStorageTokenName];

      if(typeof token !== 'undefined' && !this.props.isLoggedIn) {
        this.props.authWithToken(token);
      }
    }

    render() {
      if(this.props.isLoggingIn) {
        return (
          <div style={{
            color: '#222',
            backgroundColor: '#fff',
            height: '100vh',
            alignItems: 'center',
            display: 'flex',
            textAlign: 'center',
            width: '100%',
          }}>
            <div style={{margin: '0 auto'}}>
              <h2 style={{margin: 0}}>Nice to see you again.</h2>
              <p style={{color: '#ccc'}}>Hold on, we're logging you in.</p>
              {/*<Spinner />*/}
            </div>
          </div>
        )
      } else {
        return <WrappedComponent {...this.props} {...this.state} />
      }

    }

  }

  return Rememberer;
}


export default RememberMe;
