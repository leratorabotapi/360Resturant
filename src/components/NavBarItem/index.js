import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Copy from '../Copy';
import './style.css';

const NavBarItem = ({ children, name, variant, color }) => (
  <button
    type="button"
    className={`navbaritem-${variant}`}
    style={color && { color }}
  >
    <div>
      <Icon name={name} />
    </div>
    <Copy color="white" size="medium" children={children} />
  </button>
);

NavBarItem.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,

  variant: PropTypes.oneOf(['default', 'red', 'clicked']),
};

NavBarItem.defaultProps = {
  color: '#222222',
  variant: 'default',
};

export default NavBarItem;
