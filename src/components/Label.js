import React, { PropTypes } from 'react';

const styles = {
  base: {
    fontWeight: 700,
    display: 'block',
    marginBottom: 5
  }
};

const Label = ({ children }) => (
  <label style={styles.base}>{children}</label>
);

Label.propTypes = {
  children: PropTypes.node.isRequired
};

export default Label
