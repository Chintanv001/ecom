import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import './productDetail.css'
import StarRating from '../Ratings/StarRatings';

const ProductDetails = () => {
    const productData = useSelector(state => state.productsData);
    const miData = productData.mobileData.midata;
    const realmeData = productData.mobileData.realmedata;
    const appleData = productData.laptopData.appledata;
    const dellData = productData.laptopData.delldata;
    const lenovoData = productData.laptopData.lenovodata;

    const products = [...miData, ...realmeData, ...appleData, ...dellData, ...lenovoData]

    const params = useParams()


    const product = products.find(product => product.title === params.productDetails);

    return (
        <div className="product-detail-container">
            <div className="product-image">
                <img src={product.images[0]} alt="Product" />
            </div>
            <div className="product-info">
                <h1 className="product-title">{product.title}</h1>
                <p className="product-price">{product.sellingPrice}</p>
                <p className="previous-price">{product.scratchedPrice}</p>
                <div className="product-ratings">
                <StarRating rating={product.rating}/>
                </div>
                <p className="product-description">
                {product.description}
                </p>
                <div className="product-highlights">
                    <ul>
                        <li>{product.highlightsList}</li>
                    </ul>
                </div>
                <div className="buttons-container">
                    <button className="add-to-cart-btn">Add to Cart</button>
                    <button className="buy-now-btn">Buy Now</button>
                </div>
            </div>
        </div>
    );

}

export default ProductDetails