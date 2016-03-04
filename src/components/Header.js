import React from 'react';
import { IndexLink } from 'react-router';
import NavContainer from '../containers/NavContainer';

const Header = () => (
  <div>
    <h1>
      <IndexLink to="/">React Redux ParseServer</IndexLink>
    </h1>
    <NavContainer />
  </div>
);

export default Header;
