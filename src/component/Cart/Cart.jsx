import React, { useState } from 'react';
import './cart.css';

const ShoppingCart = () => {

    const itemArray = [
        {
          id: 1,
          productImage: 'product1.jpg',
          productName: 'Sample Product 1',
          price: 600,
        },
        {
          id: 2,
          productImage: 'product2.jpg',
          productName: 'Sample Product 2',
          price: 800,
        },  
      ]
  const [items, setItems] = useState(itemArray);

  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [quantity, setQuantity] = useState();
  const deliveryCharge = 60;
  const totalSaving = 100;

  const handleQuantityChange = () => {
    //
  };

  const calculateTotalPrice = () => {
    const itemQuantity = 1;
    const totalPrice = items.reduce((acc, item) => {
        console.log(acc)
      return acc + (item.price * itemQuantity);
    }, 0);

    return totalPrice + deliveryCharge;
  };

  const handleCheckout = () => {
    //
  };

  return (
    <div className="shopping-cart-container">
      <div className="cart-items">
        <h1>Your Shopping Cart</h1>
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.productImage} alt={item.productName} className="product-image" />
            <div className="item-details">
              <h2 className="product-name">{item.productName}</h2>
              <p className="product-price">{item.price}</p>
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
    </div>
  );
};

export default ShoppingCart;
