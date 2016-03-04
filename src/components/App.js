import React, { Component, PropTypes } from 'react';
import Header from './Header';
import RememberMe from '../decorators/RememberMe';

@RememberMe
class App extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  static propTypes = {
    location: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
  }

  static childContextTypes = {
    location: PropTypes.object
  }

  getChildContext() {
    return {
      location: this.props.location
    };
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
