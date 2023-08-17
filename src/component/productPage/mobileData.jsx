import React from 'react'
import './mobileData.css'
import { useSelector } from 'react-redux'


export const MobileData = () => {
    const productData = useSelector(state => state.productsData)
    const miData = productData.mobileData.midata
    const realmeData = productData.mobileData.realmedata

    const products = [...miData, ...realmeData]

    return (
        <div className='product-card-container'>
            {
                products.map((product) => {
                    return (
                        <div className="product-card">
                            <img className="product-image" src={product.images[0]} alt="Product Image" />
                            <h2 className="product-title">{product.title}</h2>
                            <div className="ratings">
                                ⭐⭐⭐⭐⭐{product.rating}
                            </div>
                            <div class="product-prices">
                                <span class="previous-price">{product.scratchedPrice}</span>
                                <span class="current-price">{product.sellingPrice}</span>
                            </div>
                            <div className="buttons">
                                <button className="buy-button">Buy Now</button>
                                <button className="cart-button">Add to Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}

