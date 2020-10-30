import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Products from '../components/Products';
import Label from '../components/Label';
import './style.css';

import ApplicationContext from '../components/ApplicationContext/Application';
import OrderPane from '../components/OrderPane';
import Modal from '../components/Modal';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState({});
  const [activeProduct, setActiveProduct] = useState(null);
  const [cart, setCart] = useState([]);
  // setCart([...cart, product]);
  const [orders, setOrders] = useState([]);
  const [query, setQuery] = useState('');
  const [cartItem, setCartItem] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);
  const [beginOrder, setBeginOrder] = useState(null);

  useEffect(() => {
    fetch('https://project-indie-api.netlify.app/.netlify/functions/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories);
        setActiveCategory(
          data.categories.filter((category) => category.Products)[0]
        );
      });
  }, [setCategories]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://project-indie-api.netlify.app/.netlify/functions/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [setProducts]);

  return (
    <div className="App">
      <ApplicationContext.Provider
        value={{
          categories,
          activeCategory,
          setActiveCategory,
          products,
          activeProduct,
          setActiveProduct,
          cart,
          setCart,
          query,
          setQuery,
          orders,
          setOrders,
          cartItem,
          setCartItem,
          activeOrder,
          setActiveOrder,
          beginOrder,
          setBeginOrder,
        }}
      >
        <div className="section1">
          <NavBar />
        </div>

        <div className="section2">
          <div style={{ marginBottom: '43px' }}>
            <Label label="Table 19" color="red" size="regular" />
          </div>
          <Products />
        </div>

        <div className="section3" style={{ position: 'relative' }}>
          <OrderPane />
          {Boolean(activeProduct) && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <Modal />
            </div>
          )}
        </div>
      </ApplicationContext.Provider>
    </div>
  );
}
