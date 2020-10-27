import React from "react";
import PropTypes from 'prop-types';

const Button = () => {
  return <button>Add</button>;
};

Button.propTypes = {
  onClick: PropTypes.func
}

export default Button;
