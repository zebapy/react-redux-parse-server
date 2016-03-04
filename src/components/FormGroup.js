import React, { PropTypes } from 'react';

const FormGroup = ({ children }) => (
  <div style={{ marginBottom: 20 }}>{children}</div>
);

FormGroup.propTypes = {
  children: PropTypes.node.isRequired
};

export default FormGroup;
