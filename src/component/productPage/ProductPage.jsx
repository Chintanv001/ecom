import React from 'react';
import { NavLink } from 'react-router-dom';
import './productPage.css'; 

const ProductPage = () => {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <NavLink to="/mobile" className="nav-link">
                    Mobile
                </NavLink>
                <NavLink to="/laptop" className="nav-link">
                    Laptop
                </NavLink>
            </div>
        </nav>
    );
}

export default ProductPage;
