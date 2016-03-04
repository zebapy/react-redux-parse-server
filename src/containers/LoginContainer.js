import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { login } from '../actions/authActions';

import LoginForm from '../components/LoginForm';

const submit = (values, dispatch) => {
  return new Promise((resolve, reject) => {
    const { username, password } = values;

    if(!username || !password) {
      reject({
        username: 'username required',
        password: 'password required'
      });
    } else {
      dispatch(login(username, password));
      resolve();
    }

  });
};

@reduxForm({
  form: 'login',
  fields: ['username', 'password']
})
@connect(state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loading: state.auth.isLoggingIn,
  error: state.auth.error
}))
class LoginContainer extends Component {

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.isLoggedIn) {
      const nextPath = this.context.location.query.next || '/';
      this.context.router.push(nextPath);
    }
  }

  render() {
    const { loading, error, fields, handleSubmit } = this.props;

    return (
      <LoginForm
        error={error}
        loading={loading}
        handleSubmit={handleSubmit(submit)}
        {...fields}
      />
  );
  }
}

export default LoginContainer;
