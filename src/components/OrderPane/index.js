import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import useSound from 'use-sound';
import OrderCard from '../OrderCard';
import ApplicationContext from '../ApplicationContext/Application';
import Copy from '../Copy';
import { Button } from '../Button';
import boopSfx from '../sounds/orderitems.mp3';

const OrdersPane = ({ variant }) => {
  const {
    cartItem,
    activeOrder,
    setActiveOrder,
    beginOrder,
    setBeginOrder,
    setCartItem,
  } = useContext(ApplicationContext);

  const [play] = useSound(boopSfx);

  console.log(activeOrder);

  return (
    <div className={`OrdersPane-${variant}`}>
      <div className="orderlist">
        <div>
          {Boolean(activeOrder) && (
            <div className="activeOrders">
              <Copy color="white">ACTIVE ORDERS</Copy>
              <ul className="orderList">
                {activeOrder?.map((activeOrder, i) => (
                  <OrderCard
                    icon="Time"
                    iconColors="red"
                    display="none"
                    color="#4f4f4f"
                    labelColor="gray"
                    variant="active"
                    key={activeOrder.id}
                    amount={activeOrder.unitCost}
                    text={activeOrder.name}
                    productSize={activeOrder.size}
                    query={activeOrder.query}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>

        {Boolean(beginOrder) && (
          <div>
            <div className="newOrders">
              <Copy color="white">NEW ORDERS</Copy>

              <ul className="orderList">
                {cartItem?.map((cartItem, i) => (
                  <OrderCard
                    icon="Copy"
                    time="none"
                    color="#ffffff"
                    labelColor="white"
                    variant="new"
                    key={cartItem.id}
                    amount={cartItem.unitCost}
                    text={cartItem.name}
                    description={cartItem.description}
                    productSize={cartItem.size}
                    query={cartItem.query}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      <Button
        onClick={() => {
          setActiveOrder(cartItem);
          play();
          setBeginOrder(false);
          setCartItem(null);
        }}
        size="large"
      >
        ORDER ITEMS
      </Button>
    </div>
  );
};

OrdersPane.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,

  variant: PropTypes.oneOf(['normal', 'secondary', 'primary']),
};

OrdersPane.defaultProps = {
  variant: 'normal',
};

export default OrdersPane;
