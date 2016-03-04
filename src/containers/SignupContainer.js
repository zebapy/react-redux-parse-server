import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { signup, resetAuthError } from '../actions/authActions';

import SignupForm from '../components/SignupForm';

const submit = (values, dispatch) => {
  return new Promise((resolve, reject) => {

    const { username, email, password } = values;

    if(!username || !email || !password) {
      reject({
        username: 'Username required',
        email: 'Email is required',
        password: 'Password must be minimum of 8 characters'
      });
    } else {
      dispatch(signup(username, email, password));
      resolve();
    };
  });
};

@reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'username']
})
@connect(state => ({
  isLoggedIn: state.auth.isLoggedIn,
  loading: state.auth.isSigningUp,
  error: state.auth.error
}), {
  resetAuthError
})
class SignupContainers extends Component {

  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    resetAuthError: PropTypes.func.isRequired
  }

  // Set context types router and location to do redirects with React Router
  static contextTypes = {
    router: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  }

  // Redirects the user if isLoggingIn flag becomes true
  componentWillReceiveProps(nextProps) {

    if(nextProps.isLoggedIn) {

      // redirects the user to the page they were
      // attempting to get to based on ?next=/anAuthRequiredRoute
      const nextPath = this.context.location.query.next || '/';

      this.context.router.push(nextPath);

    }
  }

  // Clears the errors ("Sorry, this email is taken") on
  // pageleave so the same state.auth.error key can be used on other pages
  componentWillUnmount() {
    this.props.resetAuthError();
  }

  render() {
    const { fields, loading, handleSubmit, error } = this.props;

    return (
      <SignupForm
        error={error}
        handleSubmit={handleSubmit(submit)}
        loading={loading}
        {...fields}
      />
  );
  }
}

export default SignupContainers;
