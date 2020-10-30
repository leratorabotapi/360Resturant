import React from 'react';
import PropTypes from 'prop-types';
import {
  Copy,
  Dessert,
  Drink,
  HeartFilled,
  Logo,
  Panini,
  Pasta,
  PencilCreate,
  Pizza,
  Plus,
  Salad,
  Starter,
  Trash,
  Waiter,
  Cross,
  Heart,
  Time,
} from '../icons';
import './style.css';

const Icon = ({ name, size, iconColors, margin }) => {
  let content;

  let iconSize;
  switch (size) {
    case 'small':
      iconSize = 8;
      break;
    case 'regular':
      iconSize = 14;
      break;
    case 'medium':
      iconSize = 24;
      break;
    case 'large':
      iconSize = 41;
      break;

    default:
      break;
  }

  switch (name) {
    case 'Heartfilled':
      content = <HeartFilled />;
      break;
    case 'Salad':
      content = <Salad />;
      break;
    case 'Starter':
      content = <Starter />;
      break;
    case 'Waiter':
      content = <Waiter />;
      break;
    case 'Dessert':
      content = <Dessert />;
      break;
    case 'Panini':
      content = <Panini />;
      break;
    case 'Pasta':
      content = <Pasta />;
      break;
    case 'Pencil':
      content = <PencilCreate />;
      break;
    case 'Pizza':
      content = <Pizza />;
      break;
    case 'Drink':
      content = <Drink />;
      break;
    case 'Copy':
      content = <Copy />;
      break;
    case 'plus':
      content = <Plus />;
      break;
    case 'Trash':
      content = <Trash />;
      break;
    case 'Logo':
      content = <Logo />;
      break;
    case 'Cross':
      content = <Cross />;
      break;
    case 'Heart':
      content = <Heart />;
      break;
    case 'Time':
      content = <Time />;
      break;

    default:
      break;
  }

  let iconColor;
  switch (iconColors) {
    case 'red':
      iconColor = '#E54A2D';
      break;
    case 'white':
      iconColor = '#FFFFFF';
      break;
    case 'dark':
      iconColor = '#222222';
      break;
    case 'grey':
      iconColor = '#BDBDBD';
      break;

    default:
      break;
  }

  let iconMargin;
  switch (margin) {
    case '0':
      iconMargin = '0';
      break;

    default:
      break;
  }

  return (
    <div
      className="icon"
      style={{
        margin: `${iconMargin}px`,
        fontSize: `${iconSize}px`,
        height: `${iconSize}px`,
        width: `${iconSize}px`,
        color: `${iconColor}`,
      }}
    >
      {content}
    </div>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Icon.defaultProps = {
  size: 'medium',
};

export default Icon;
