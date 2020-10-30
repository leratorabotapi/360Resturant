import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { motion } from 'framer-motion';
import useSound from 'use-sound';
import ApplicationContext from '../ApplicationContext/Application';
import { Button } from '../Button';
import Label from '../Label';
import Copy from '../Copy';
import Price from '../Price';
import LikeCount from '../LikeCount';
import Icon from '../Icon';
import boopSfx from '../sounds/addtocart.mp3';
import boopSfx2 from '../sounds/close.mp3';

const Modal = ({}) => {
  const {
    activeProduct,
    setActiveProduct,
    query,
    setQuery,
    setOrders,
    setCartItem,
  } = useContext(ApplicationContext);

  const [play] = useSound(boopSfx);
  const [play2] = useSound(boopSfx2);

  const handleClick = () => {
    // debugger;
    // set cart item, intent: send to list
    setCartItem((cartItem) => cartItem.concat({...activeProduct, query}));

    // const [cart, setCart] = useState(initialState)
    // setCart("bla")
    const oldOrders = [{order:1}, {order:2}];
    const singleNewOrder = {order: 3}
    const newOrders = [...oldOrders]
    newOrders.push(singleNewOrder)

    // const newOrders = [...oldOrders, singleNewOrder] 
    setOrders(newOrders)

    // Add the special instruction to the list onClick of Add To Cart button
    // Save the string state to React Hooks
    // setOrders(orders => [...orders, query])
    // setOrders((orders) => orders.concat(query));
    // close modal
    setActiveProduct(null);
    // play sound
    play();
  };

  const updateQuery = ({ target }) => {
    // Update query onKeyPress of input box
    setQuery(target.value);
  };

  const keyPressed = ({ key }) => {
    // Capture order on Enter key
    if (key === 'Enter') {
      handleClick();
    }
  };

  const submitHandler = (e) => {
    // Prevent form submission on Enter key
    e.preventDefault();
  };

  return (
    <motion.div
      animate={{ x: [400, 200, 0] }}
      transition={{ duration: 0.3, times: [0, 0.5, 1] }}
      exit={{ opacity: 0 }}
      className="Modal"
    >
      <div>
        <div className="imageBox">
          <Button
            type="button"
            backgroundColor="#222"
            size="medium"
            onClick={() => {
              setActiveProduct(null);
              play2();
            }}
          >
            <Icon name="Cross" />
          </Button>

          <div className="imageCont">
            {activeProduct?.images?.map((thumbnail) => (
              <img
                className="activeProductImage"
                key={thumbnail}
                alt="productThumbnail"
                disabled={!thumbnail.url}
                src={thumbnail.url}
              />
            ))}
          </div>
        </div>

        <LikeCount numberOfLikes={activeProduct.likes} />

        <div className="activeOrderCard">
          <Label size="xlarge" color="white" text={activeProduct.name} />

          <div className="descriptionBox">
            <Copy size="medium" color="grey">
              {activeProduct.description}
            </Copy>
            <Copy size="small" color="grey">
              {activeProduct.allergens}
            </Copy>
          </div>

          <hr />

          <div className="radio">
            <Copy size="medium" color="white">
              OPTIONS
            </Copy>
            {activeProduct?.options?.map((option) => (
              <label className="label">
                <input type="radio" name="options" />
                <Copy size="medium" color="grey">
                  {option.option}
                </Copy>
                <Price amount={option.price} color="white" />
                <hr />
              </label>
            ))}
          </div>

          <Copy size="medium" color="white">
            SPECIAL INSTRUCTIONS
          </Copy>
          <form onSubmit={submitHandler}>
            <div>
              <input
                className="labelInput"
                placeholder="   Add a note (e.g. no onions, extra sauce)"
                type="text"
                onChange={updateQuery}
                onKeyPress={keyPressed}
              />
            </div>
          </form>
        </div>
      </div>

      <Button size="large" onClick={handleClick}>
        Add to Cart
        <Price
          className="addCart"
          color="white"
          size="large"
          amount={activeProduct.unitCost}
        />
      </Button>
    </motion.div>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,

  variant: PropTypes.oneOf(['normal', 'secondary', 'primary']),
};

Modal.defaultProps = {
  variant: 'normal',
};

export default Modal;
