import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({
  text,
  onClick,
  type = 'button',
  className,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${css.button} ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};
