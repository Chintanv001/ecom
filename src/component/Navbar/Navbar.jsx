import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import './Navbar.css'; 
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="snavbar">
     
      <div className="search-bar">
        <AiOutlineSearch />
        <input type="text" placeholder="Search..." />
      </div>
      <div className="cart">
      <NavLink to='/cart'><FaShoppingCart /></NavLink>
        
      </div>
    </div>
  );
};

export default Navbar;
