import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

const styles = {
  root: {
    color: '#fff',
    backgroundColor: 'tomato',
    border: '1px solid transparent',
    borderRadius: 10,
    fontSize: 16,
    padding: '.5em 1em',
    cursor: 'pointer',
    ':hover': {
      textDecoration: 'underline'
    }
  }
};

@Radium
class Button extends Component {
  render() {
    const { disabled, children } = this.props;

    return (
      <button style={{
        ...styles.root,
        opacity: disabled ? .5 : 1
      }}>{children}</button>
    );
  }
}

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default Button;
