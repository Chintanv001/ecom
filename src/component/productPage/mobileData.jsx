import React from 'react';
 
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard'; 
import { useNavigate } from 'react-router-dom';
export const MobileData = () => {
    const productData = useSelector(state => state.productsData);
    const miData = productData.mobileData.midata;
    const realmeData = productData.mobileData.realmedata;

    const products = [...miData, ...realmeData];

   
    

    return (
        <div className='product-card-container'>
            {products.map((product) => (
                
                <ProductCard key={product.title} product={product} category="mobile" />
                
            ))}
        </div>
    );
};
