import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Label = ({ label, size, color, text }) => {
  let labelColor;
  switch (color) {
    case 'dark':
      labelColor = '#222222';
      break;

    case 'white':
      labelColor = '#FFFFFF';
      break;

    case 'red':
      labelColor = '#E54A2D';
      break;

      case 'gray':
        labelColor = '#4F4F4F';
        break;

    default:
      break;
  }

  return (
    <div
      className={`Label-${size}`}
      style={{
        color: `${labelColor}`,
      }}
    >
      {label} {text}
    </div>
  );
};

Label.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,

  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Label.defaultProps = {
  size: 'medium',
};

export default Label;
