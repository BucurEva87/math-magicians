import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { children } = props;

  return (
    <div id="result">{children}</div>
  );
};

Display.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Display;
