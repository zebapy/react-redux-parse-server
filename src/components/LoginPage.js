import React from 'react';
import { Link } from 'react-router';
import LoginContainer from '../containers/LoginContainer';
import CenteredBox from './CenteredBox';

const LoginPage = () => (
  <CenteredBox>
    <h1>Login</h1>
    <LoginContainer />
    <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
  </CenteredBox>
);

export default LoginPage;
