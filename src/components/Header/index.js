import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

const Header = ({ children, size, color }) => (
  <div className={`header-${size}`} style={color && { color }}>
    {children}
  </div>
);

Header.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,

  size: PropTypes.oneOf(['medium', 'large']),
};

Header.defaultProps = {
  color: '#E54A2D',
  size: 'medium',
};

export default Header;
