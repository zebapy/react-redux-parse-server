import React, { PropTypes } from 'react';

const styles = {
  root: {
    padding: 40
  },
  box: {
    maxWidth: 500,
    padding: 40,
    backgroundColor: '#fff',
    margin: '0 auto'
  }
};

const CenteredBox = ({ children }) => (
  <div style={styles.root}>
    <div style={styles.box}>{children}</div>
  </div>
);

export default CenteredBox;
