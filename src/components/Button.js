import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

export default class Button extends PureComponent {
  render() {
    const {
      id, className, children, handleClick,
    } = this.props;

    return (
      <button
        type="button"
        id={id}
        className={className}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }
}

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
