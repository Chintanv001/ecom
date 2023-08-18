import React from 'react';
import './productCard.css';
import StarRating from '../Ratings/StarRatings';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product , category}) => {

    const Navigate = useNavigate()

    const handleClick = () => {
        Navigate(`/${category}/${encodeURIComponent(product.title)}`)
    }

    return (
        
        <div className="product-card" onClick={handleClick} >
            <img className="product-image" src={product.images[0]} alt="Product Image" />
            <h2 className="product-title">{product.title}</h2>
            
            <StarRating rating={product.rating}/>
            
            <div className="product-prices">
                <span className="previous-price">{product.scratchedPrice}</span>
                <span className="current-price">{product.sellingPrice}</span>
            </div>
            <div className="buttons">
                <button className="buy-button">Buy Now</button>
                <button className="cart-button">Add to Cart</button>
            </div>
        </div>
        
    );
};

export default ProductCard;
