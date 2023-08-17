import React from 'react'
import './LaptopData.css'
import { useSelector } from 'react-redux'


export const LaptopData = () => {
    const productData = useSelector(state => state.productsData)
    const appleData = productData.laptopData.appledata
    const dellData = productData.laptopData.delldata
    const lenovoData = productData.laptopData.lenovodata
    

    const products = [...appleData, ...dellData , ...lenovoData]

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

