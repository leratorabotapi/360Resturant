import React from 'react';
import NavBarItem from '../NavBarItem';
import Icon from '../Icon';
import './style.css';
import Categories from '../Categories';

const NavBar = () => (
  <div className="Navbar">
    <div className="logo">
      <Icon variant="default" name="Logo" children="Logo" size="large" />
    </div>

    <Categories />

    <NavBarItem variant="red" name="Waiter" children="Waiter" />
  </div>
);

export default NavBar;
