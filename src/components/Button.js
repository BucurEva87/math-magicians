import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    id, className, children, handleClick,
  } = props;

  return (
    <button
      data-testid={id}
      type="button"
      id={id}
      className={className}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
