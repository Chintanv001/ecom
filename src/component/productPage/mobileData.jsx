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

    


    const filterdedProduct = 
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

          const storageCondition = !storageFilter || 
            (storageFilter.length > 0 && (data.Specification.Storage === storageFilter[0] || data.Specification.Storage === storageFilter[1] || data.Specification.Storage === storageFilter[2]));

          const sizeCondition = !sizeFilter || 
            (sizeFilter.length > 0 && (data.Specification.Size === sizeFilter[0] || data.Specification.Size === sizeFilter[1] || data.Specification.Size === sizeFilter[2] || data.Specification.Size === sizeFilter[3] || data.Specification.Size === sizeFilter[4]));

          const gpuCondition = !gpuFilter || 
            (gpuFilter.length > 0 && (data.Specification.GPU === gpuFilter[0] || data.Specification.GPU === gpuFilter[1] || data.Specification.GPU === gpuFilter[2] || data.Specification.GPU === gpuFilter[3] || data.Specification.GPU === gpuFilter[4] || data.Specification.GPU === gpuFilter[5] || data.Specification.GPU === gpuFilter[6]));

            const resolutionCondition = !resolutionFilter || 
            (resolutionFilter.length > 0 && (data.Specification.Resolution === resolutionFilter[0] || data.Specification.Resolution === resolutionFilter[1] || data.Specification.Resolution === resolutionFilter[2] || data.Specification.Resolution === resolutionFilter[3] || data.Specification.Resolution === resolutionFilter[4]));
          
          return brandCondition && ramCondition && storageCondition && sizeCondition && gpuCondition && resolutionCondition ;
        })
      ;

      console.log(filterdedProduct)

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const applyFilters = () => {
        closeModal();
        // 
    };




    return (
        <div>
            <button className="add-filter-button" onClick={openModal}>Add Filter</button>
            <div className='product-card-container'>
                {filterdedProduct.map((product) => (

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
