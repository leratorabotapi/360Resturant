import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import useSound from 'use-sound';
import ApplicationContext from '../ApplicationContext/Application';
import Icon from '../Icon';
import Copy from '../Copy';
import './style.css';
import Label from '../Label';
import Price from '../Price';
import Size from '../Size';
import { Button } from '../Button';
import boopSfx from '../sounds/delete.mp3';

const OrderCard = ({
  variant,
  color,
  query,
  amount,
  text,
  description,
  productSize,
  labelColor,
  display,
  time,
  icon,
  iconColors,
}) => {
  const { cartItem, setCartItem } = useContext(ApplicationContext);

  const [play] = useSound(boopSfx);

  let iconDisplay;
  switch (display) {
    case 'none':
      iconDisplay = 'none';
      break;
  }

  let timeDisplay;
  switch (time) {
    case 'none':
      timeDisplay = 'none';
      break;
  }

  const DeleteItem = (e) => {
    const id = e.target.getAttribute('name');
    setCartItem(cartItem.filter((item) => item.name !== name));
    play();
  };

  return (
    <li className={`ordercard-${variant}`} style={color && { color }}>
      <div className="block1">
        <Label marginBottom="10" color={labelColor} text={text} size="large" />
        <div className="cropText">
          <Copy color="grey" size="medium" children={description} />
        </div>
      </div>

      <div>
        <Button backgroundColor="black" size="medium">
          <Icon name={icon} size="medium" iconColors={iconColors} />
        </Button>
      </div>
      <div
        style={{
          display: `${iconDisplay}`,
        }}
      >
        <Button onClick={DeleteItem} backgroundColor="#000" size="medium">
          <Icon name="Trash" size="medium" />
        </Button>
      </div>
      <div
        style={{
          display: `${timeDisplay}`,
        }}
      >
        <Copy>5 min</Copy>
      </div>

      <div>
        <div className="descriptionSection">
          <Icon name="Pencil" size="meduim" />
          <Copy color="grey" size="medium">
            {query}
          </Copy>
        </div>
      </div>
      <Size productSize={productSize} />
      <Price size="medium" amount={amount} />
    </li>
  );
};

OrderCard.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,

  variant: PropTypes.oneOf(['new', 'active', 'past']),
};

OrderCard.defaultProps = {
  color: '#222222',
  variant: 'new',
};

export default OrderCard;
