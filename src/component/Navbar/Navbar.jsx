import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import './Navbar.css'; 
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartItems = useSelector(state => state.cartReducer.items)
    
  return (
    <div className="snavbar">
     
      <div className="search-bar">
        <AiOutlineSearch />
        <input type="text" placeholder="Search..." />
      </div>
      <div className="cart">
      <NavLink to='/cart'><FaShoppingCart/></NavLink>
      <span className="cart-count">{cartItems.length}</span> 
      </div>
    </div>
  );
};

export default Navbar;
