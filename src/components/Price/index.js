import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Price = ({ amount, size, add, currency, color }) => {
  let priceColor;
  switch (color) {
    case 'red':
      priceColor = '#E54A2D';
      break;
    case 'white':
      priceColor = '#FFFFFF';
      break;
    case 'grey':
      priceColor = '#BDBDBD';
      break;

    default:
      break;
  }

  const formattedAmount = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency,
    signDisplay: add ? 'always' : 'never',
  }).format(amount);

  return (
    <div
      className={`Price-${size}`}
      style={{
        color: `${priceColor}`,
      }}
    >
      {formattedAmount}
      {/* {currency}{add ? "+" : null}{amount}  */}
    </div>
  );
};

Price.propTypes = {
  amount: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['small', 'large']),
  add: PropTypes.bool,
  currency: PropTypes.string,
};

Price.defaultProps = {
  size: 'small',
  add: false,
  currency: 'ZAR',
};

export default Price;
