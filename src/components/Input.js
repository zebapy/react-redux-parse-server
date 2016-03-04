import React, { PropTypes } from 'react';

const styles = {
  root: {
    padding: 10,
    fontSize: 16,
    width: '100%',
    border: '1px solid lightgray'
  }
};

const Input = ({
  type,
  value,
  placeholder,
  required,
  ...rest
}) => (
  <input
    type={type}
    value={value}
    placeholder={placeholder}
    required={required}
    style={styles.root}
    {...rest}
  />
);

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password']).isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool
};

export default Input;
