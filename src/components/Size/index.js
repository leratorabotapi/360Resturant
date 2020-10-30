import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Size = ({ productSize, type }) => (
  <div className={`Size-${type}`}>{productSize}</div>
);

Size.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  size: PropTypes.oneOf(['light', 'dark']),
};

Size.defaultProps = {
  type: 'light',
};

export default Size;
