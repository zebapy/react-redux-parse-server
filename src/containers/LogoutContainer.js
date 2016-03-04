import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';

@connect(state => ({
  isLoggedIn: state.auth.isLoggedIn
}), {
  logout
})
class LogoutContainer extends Component {

  static propTypes = {
    logout: PropTypes.func.isRequired
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.logout();
  }

  componentWillReceiveProps(nextProps) {
    if(!nextProps.isLoggedIn) {
      this.context.router.push('/');
    }
  }

  render() {
    return (
      <p>You are now logged out.</p>
    );
  }

}

export default LogoutContainer;
