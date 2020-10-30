import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import useSound from 'use-sound';
import ApplicationContext from '../ApplicationContext/Application';
import Icon from '../Icon';
import { Button } from '../Button';
import Price from '../Price';
import Size from '../Size';
import Label from '../Label';
import './style.css';
import Copy from '../Copy';
import boopSfx from '../sounds/plus.mp3';

const Card = ({
  amount,
  productSize,
  product,
  variant,
  color,
  label,
  children,
  thumbnails,
}) => {
  const { setActiveProduct, setBeginOrder } = useContext(ApplicationContext);

  const [play] = useSound(boopSfx);

  const addToCart = (product) => {
    console.log('product added to modal');
    setActiveProduct(product);
  };

  return (
    <motion.div
      animate={{
        scale: [0.9, 1],
      }}
      transition={{ duration: 0.5 }}
      className={`card-${variant}`}
      style={color && { color }}
    >
      <div className="imageSection">
        {thumbnails?.map((thumbnail) => (
          <img
            className="productImage"
            key={thumbnail}
            alt="productThumbnail"
            disabled={!thumbnail.url}
            src={thumbnail.url}
          />
        ))}
      </div>

      <div className="infoSection">
        <div className="productTitle">
          <Label label={label} color="dark" />
        </div>

        <div className="description">
          <Copy size="small" color="grey">
            {children}
          </Copy>
        </div>

        <div className="bottomSection">
          <Size productSize={productSize} />
          <Price amount={amount} />

          <Button
            onClick={() => {
              addToCart(product);
              play();
              setBeginOrder(true);
            }}
            size="small"
            variant="order_button"
          >
            <Icon name="plus" size="medium" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

Card.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,

  variant: PropTypes.oneOf(['default', 'red', 'clicked']),
};

Card.defaultProps = {
  color: '#ffffff',
  variant: 'default',
};

export default Card;
