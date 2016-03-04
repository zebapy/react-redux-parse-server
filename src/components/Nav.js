import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = ({ isLoggedIn, user }) => (
  <nav>
    <IndexLink to="/">Home</IndexLink>
    {!isLoggedIn && <Link to="/login">Login</Link>}
    {!isLoggedIn && <Link to="/signup">Signup</Link>}
    {isLoggedIn && <Link to="/logout">Logout</Link>}
  </nav>
);

Nav.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  user: PropTypes.object
};

export default Nav;
