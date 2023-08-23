import React, { useState } from 'react';
import './cart.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthModal from '../Modal/AuthModal';


const ShoppingCart = () => {

    const [showModal, setShowModal] = useState(false);
    const [showLogin, setShowLogin] = useState(true);

    const [deliveryAddress, setDeliveryAddress] = useState('');

    const deliveryCharge = 60;
    const totalSaving = 100;

    const Navigate = useNavigate()

    const cartItems = useSelector(state => state.cartReducer.items)

    const handleCheckout = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setShowLogin(true);
    };

    const toggleModalContent = () => {
        setShowLogin(!showLogin);
    };



    const handleQuantityChange = () => {
        //
    };

    const calculateTotalPrice = () => {
        const itemQuantity = 1;
        const totalPrice = cartItems.reduce((acc, item) => {

            return acc + (+item.sellingPrice.replace(/[₹,]/g, '') * itemQuantity);
        }, 0);


        return totalPrice + deliveryCharge;
    };


    return (
        <div className="shopping-cart-container">
            <div className="cart-items">
                <h1>Your Shopping Cart</h1>
                {cartItems.map((item) => (
                    <div key={item.indexValue} className="cart-item">
                        <img src={item.images[0]} alt={item.productName} className="productcart-image" />
                        <div className="item-details">
                            <h2 className="product-name">{item.title}</h2>
                            <p className="product-price">{item.sellingPrice}</p>
                            <div className="quantity-controls">
                                <button
                                    className="quantity-button"
                                    onClick={handleQuantityChange}

                                >
                                    -
                                </button>
                                <span className="quantity-label">Quantity:</span>
                                <span className="quantity"></span>
                                <button
                                    className="quantity-button"
                                    onClick={handleQuantityChange}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="order-summary">
                <h2>Order Summary</h2>
                <p className="delivery-address">Delivery Address: {deliveryAddress}</p>
                <p className="delivery-charge">Delivery Charge: {deliveryCharge}</p>
                <p className="total-savings">Total Savings: {totalSaving}</p>
                <p className="total-price">Total Price: {calculateTotalPrice()}</p>
                <button className="checkout-button" onClick={handleCheckout}>
                    Checkout
                </button>

            </div>
            <AuthModal
                isOpen={showModal}
                onClose={closeModal}
                showLogin={showLogin}
                toggleModalContent={toggleModalContent}
            />
        </div>
    );
};

export default ShoppingCart;
