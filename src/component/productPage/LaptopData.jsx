import React , {useState} from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import LaptopFilterModal from '../Modal/LaptopModal';

export const LaptopData = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const filterData = useSelector(state => state.laptopFilterReducer)

    // console.log(filterData)

    const productData = useSelector(state => state.productsData);
    const appleData = productData.laptopData.appledata;
    const dellData = productData.laptopData.delldata;
    const lenovoData = productData.laptopData.lenovodata;

    const products = [...appleData, ...dellData, ...lenovoData];

    const filterdedProduct = 
    products.filter((data) => {
      const brandsFilter = filterData?.filteredObject?.Brand;
      const ramFilter = filterData?.filteredObject?.RAM;
      const operatingSystemFilter = filterData?.filteredObject?.OperatingSystem;
      const graphicProcessorFilter = filterData?.filteredObject?.GraphicProcessor;
      const processorBrandFilter = filterData?.filteredObject?.ProcessorBrand;
      const processorNameFilter = filterData?.filteredObject?.ProcessorName;
      
      const brandCondition = !brandsFilter || 
        (brandsFilter.length > 0 && (data.Specification.Brands === brandsFilter[0] || data.Specification.Brands === brandsFilter[1] || data.Specification.Brands === brandsFilter[2]));
      
      const ramCondition = !ramFilter || 
        (ramFilter.length > 0 && (data.Specification.RAM === ramFilter[0] || data.Specification.RAM === ramFilter[1] ));

      const operatingSystemCondition = !operatingSystemFilter || 
        (operatingSystemFilter.length > 0 && (data.Specification.OperatingSystem === operatingSystemFilter[0] || data.Specification.OperatingSystem === operatingSystemFilter[1] || data.Specification.OperatingSystem === operatingSystemFilter[2] || data.Specification.OperatingSystem === operatingSystemFilter[3]));

      const graphicProcessorCondition = !graphicProcessorFilter || 
        (graphicProcessorFilter.length > 0 && (data.Specification.GraphicsProcessor === graphicProcessorFilter[0]));

      const processorBrandCondition = !processorBrandFilter || 
        (processorBrandFilter.length > 0 && (data.Specification.ProcessorBrand === processorBrandFilter[0] || data.Specification.ProcessorBrand === processorBrandFilter[1]  ));

        const processorNameCondition = !processorNameFilter || 
        (processorNameFilter.length > 0 && (data.Specification.ProcessorName === processorNameFilter[0] || data.Specification.ProcessorName === processorNameFilter[1] || data.Specification.ProcessorName === processorNameFilter[2] || data.Specification.ProcessorName === processorNameFilter[3] || data.Specification.ProcessorName === processorNameFilter[4]));
      
      return brandCondition && ramCondition 
    && operatingSystemCondition && graphicProcessorCondition && processorBrandCondition && processorNameCondition ;
    })
  
     console.log(filterdedProduct)


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
                <ProductCard key={product.title} product={product} category="laptop" />
            ))}
        </div>
        <LaptopFilterModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                onApplyFilters={applyFilters}
            />
        </div>
    );
};
