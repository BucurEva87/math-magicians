import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { children } = props;

  return (
    <div id="result" data-testid="display">
      {children}
    </div>
  );
};

Display.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Display;
