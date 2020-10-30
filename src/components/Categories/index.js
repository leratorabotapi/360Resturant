import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ApplicationContext from '../ApplicationContext/Application';
import Icon from '../Icon';
import Copy from '../Copy';
import './style.css';
import useSound from 'use-sound';
import boopSfx from '../sounds/category.mp3';

const Categories = ({ variant, color }) => {
  const { categories, setActiveCategory } = useContext(ApplicationContext);

  const [play] = useSound(boopSfx);

  return (
    <div style={color && { color }}>
      {categories.map((category) => (
        <button
          disabled={!category.Products}
          key={category.id}
          onClick={() => {
            !setActiveCategory(category);
            play();
          }}
          className={`categories-${variant}`}
        >
          <Icon variant="default" name={category.name} />
          <Copy color="white" size="medium" children={category.name} />
        </button>
      ))}
    </div>
  );
};

Categories.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,

  variant: PropTypes.oneOf(['default', 'red', 'clicked']),
};

Categories.defaultProps = {
  color: '#222222',
  variant: 'default',
};

export default Categories;
