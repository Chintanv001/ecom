import React, { useState } from 'react';
import FilterModal from '../Modal/FilterModal';
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import './mobileData.css'

export const MobileData = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filterData = useSelector(state => state.mobileFilterReducer)


    const productData = useSelector(state => state.productsData);
    const miData = productData.mobileData.midata;
    const realmeData = productData.mobileData.realmedata;

    const products = [...miData, ...realmeData];

    console.log(filterData.filteredObject.Brands)


    console.log(
        products.filter((data) => {
          const brandsFilter = filterData?.filteredObject?.Brands;
          const ramFilter = filterData?.filteredObject?.RAM;
          const storageFilter = filterData?.filteredObject?.Storage;
          const sizeFilter = filterData?.filteredObject?.Size;
          const gpuFilter = filterData?.filteredObject?.GPU;
          const resolutionFilter = filterData?.filteredObject?.Resolution;
          
          const brandCondition = !brandsFilter || 
            (brandsFilter.length > 0 && (data.Specification.Brands === brandsFilter[0] || data.Specification.Brands === brandsFilter[1]));
          
          const ramCondition = !ramFilter || 
            (ramFilter.length > 0 && (data.Specification.RAM === ramFilter[0] || data.Specification.RAM === ramFilter[1] || data.Specification.RAM === ramFilter[2]));

          const storageCondition = !ramFilter || 
            (ramFilter.length > 0 && (data.Specification.RAM === ramFilter[0] || data.Specification.RAM === ramFilter[1] || data.Specification.RAM === ramFilter[2]));
          
          return brandCondition && ramCondition;
        })
      );

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const applyFilters = () => {
        closeModal();
        // Apply filter logic here
    };




    return (
        <div>
            <button className="add-filter-button" onClick={openModal}>Add Filter</button>
            <div className='product-card-container'>
                {products.map((product) => (

                    <ProductCard key={product.title} product={product} category="mobile" />

                ))}
            </div>
            <FilterModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                onApplyFilters={applyFilters}
            />
        </div>
    );
};
