import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';

export const LaptopData = () => {
    const productData = useSelector(state => state.productsData);
    const appleData = productData.laptopData.appledata;
    const dellData = productData.laptopData.delldata;
    const lenovoData = productData.laptopData.lenovodata;

    const products = [...appleData, ...dellData, ...lenovoData];

    return (
        <div className='product-card-container'>
            {products.map((product) => (
                <ProductCard key={product.title} product={product} category="laptop" />
            ))}
        </div>
    );
};
