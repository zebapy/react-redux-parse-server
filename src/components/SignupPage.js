import React from 'react';
import { Link } from 'react-router';
import SignupContainer from '../containers/SignupContainer';
import CenteredBox from './CenteredBox';

const SignupPage = () => (
  <CenteredBox>
    <h2>Create an account</h2>
    <SignupContainer />
    <p>Already have an account? <Link to="/login">Log in</Link></p>
  </CenteredBox>
);

export default SignupPage;
