import { connect } from 'react-redux';
import Nav from '../components/Nav';

export default connect(state => ({
  isLoggedIn: state.auth.isLoggedIn,
  user: state.auth.user
}))(Nav);
