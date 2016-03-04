import React, { PropTypes } from 'react';

import FormGroup from '../components/FormGroup';
import Label from '../components/Label';
import Input from '../components/Input';
import Button from '../components/Button';

const LoginForm = ({ handleSubmit, username, password, error, loading }) => (
  <form onSubmit={handleSubmit}>
    {error}
    <FormGroup>
      <Label>Username</Label>
      <Input type="text" placeholder="Username" {...username} />
      {username.touched && username.error && <span>{username.error}</span>}
    </FormGroup>
    <FormGroup>
      <Label>Password</Label>
      <Input type="password" placeholder="Password" {...password} />
      {password.touched && password.error && <span>{password.error}</span>}
    </FormGroup>
    <FormGroup>
      <Button onClick={handleSubmit} disabled={loading}>{loading ? 'Logging in...' : 'Log in'}</Button>
    </FormGroup>
  </form>
);

LoginForm.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  username: PropTypes.object.isRequired,
  password: PropTypes.object.isRequired
};

export default LoginForm;
