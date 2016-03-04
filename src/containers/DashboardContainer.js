import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Dashboard from '../components/Dashboard';

export default connect(state => ({
  user: state.auth.user
}))(Dashboard);
