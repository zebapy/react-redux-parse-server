import React, { PropTypes } from 'react';

import FormGroup from '../components/FormGroup';
import Label from '../components/Label';
import Input from '../components/Input';
import Button from '../components/Button';

const SignupForm = ({ handleSubmit, username, email, password, loading, error }) => (
  <form onSubmit={handleSubmit}>
    {error}
    <FormGroup>
      <Label>Username</Label>
      <Input type="text" placeholder="Username" {...username} />
      {username.touched && username.error && <span>{username.error}</span>}
    </FormGroup>
    <FormGroup>
      <Label>Email</Label>
      <Input type="email" placeholder="you@example.com" {...email} />
      {email.touched && email.error && <span>{email.error}</span>}
    </FormGroup>
    <FormGroup>
      <Label>Password</Label>
      <Input type="password" placeholder="Password (8+ Characters)" {...password} />
      {password.touched && password.error && <span>{password.error}</span>}
    </FormGroup>
    <FormGroup>
      <Button onClick={handleSubmit} disabled={loading}>{loading ? 'Signing up...' : 'Sign up'}</Button>
    </FormGroup>
  </form>
);

SignupForm.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  username: PropTypes.object.isRequired,
  email: PropTypes.object.isRequired,
  password: PropTypes.object.isRequired
};

export default SignupForm;
