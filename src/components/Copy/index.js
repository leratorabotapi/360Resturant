import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Copy = ({ children, size, color }) => {
  let copyColor;
  switch (color) {
    case 'red':
      copyColor = '#E54A2D';
      break;
    case 'white':
      copyColor = '#FFFFFF';
      break;
    case 'grey':
      copyColor = '#BDBDBD';
      break;

    default:
      break;
  }

  return (
    <div
      className={`Copy-${size}`}
      style={{
        color: `${copyColor}`,
      }}
    >
      {children}
    </div>
  );
};

Copy.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,

  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Copy.defaultProps = {
  size: 'medium',
};

export default Copy;
