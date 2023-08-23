import React, { useState } from 'react';
import Modal from 'react-modal';
import './filterModal.css'; // Import your CSS file for styling
import { useDispatch } from 'react-redux';

const FilterModal = ({ isOpen, onRequestClose, onApplyFilters }) => {
    const initialState = {
        Mobile: {
            Brands: ["Mi", "Realme"],
            RAM: ["4 GB", "3 GB", "2 GB"],
            Storage: ["64 GB", "128 GB", "32 GB"],
            Size: ["16.51 cm (6.5 inch)", "15.8 cm (6.22 inch)", "15.49 cm (6.1 inch)", "13.84 cm (5.45 inch)", "16.0 cm (6.3 inch)"],
            GPU: ["Adreno 610", "ARM Mali-G72 MP3 at 800MHz", "GE8320", "Adreno 505 at 650 MHz", "Adreno 505", "Adreno 512", "Adreno 612"],
            Resolution: ["720 x 1600 Pixels", "1520 x 720 pixels", "1560 x 720 pixels", "1440 x 720 pixels", "2340 x 1080 pixels"]
        },
        // Add more categories like Laptop, etc.
    };


    const dispatch = useDispatch()

    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedRAM, setSelectedRAM] = useState([]);
    const [selectedStorage, setSelectedStorage] = useState([]);
    const [selectedSize, setSelectedSize] = useState([]);
    const [selectedGPU, setSelectedGPU] = useState([]);
    const [selectedResolution, setSelectedResolution] = useState([]);
    // Add more state variables for other filters


    const filteredObject = {
        Brands: [...selectedBrands],
        RAM: [...selectedRAM],
        Storage: [...selectedStorage],
        Size: [...selectedSize],
        GPU: [...selectedGPU],
        Resolution: [...selectedResolution]
    }

    console.log(filteredObject)

    const toggleBrand = (brand) => {
        if (selectedBrands.includes(brand)) {
            setSelectedBrands(selectedBrands.filter(item => item !== brand));
        } else {
            setSelectedBrands([...selectedBrands, brand]);
        }
    };

    const toggleRAM = (ram) => {
        if (selectedRAM.includes(ram)) {
            setSelectedRAM(selectedRAM.filter(item => item !== ram));
        } else {
            setSelectedRAM([...selectedRAM, ram]);
        }
    };

    const toggleStorage = (storage) => {
        if (selectedStorage.includes(storage)) {
            setSelectedStorage(selectedStorage.filter(item => item !== storage));
        } else {
            setSelectedStorage([...selectedStorage, storage]);
        }
    };

    const toggleSize = (size) => {
        if (selectedSize.includes(size)) {
            setSelectedSize(selectedSize.filter(item => item !== size));
        } else {
            setSelectedSize([...selectedSize, size]);
        }
    };

    const toggleGPU = (gpu) => {
        if (selectedGPU.includes(gpu)) {
            setSelectedGPU(selectedGPU.filter(item => item !== gpu));
        } else {
            setSelectedGPU([...selectedGPU, gpu]);
        }
    };

    const toggleResolution = (resolution) => {
        if (selectedResolution.includes(resolution)) {
            setSelectedResolution(selectedResolution.filter(item => item !== resolution));
        } else {
            setSelectedResolution([...selectedResolution, resolution]);
        }
    };

    const handleApplyFilters = () => {
        const filters = { ...filteredObject }; 
        dispatch({ type: 'APPLY_FILTERS', payload: filters })
        onRequestClose(); 
    };

    const handleCancel = () => {
        setSelectedBrands([]);
        setSelectedRAM([]);
        setSelectedStorage([]);
        setSelectedSize([]);
        setSelectedGPU([]);
        setSelectedResolution([]);

        // Dispatch the action to clear filters
        dispatch({ type: 'CLEAR_FILTERS'})

        onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <div className='filter-modal'>
                <div className='filter-section'>
                    <h1>Filters</h1>
                    {/* Brand Filter */}
                    <div>
                        <h2>Brands</h2>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedBrands.length === initialState.Mobile.Brands.length}
                                onChange={() => setSelectedBrands(selectedBrands.length === 0 ? initialState.Mobile.Brands : [])}
                            />
                            All Brands
                        </label>
                        {initialState.Mobile.Brands.map(brand => (
                            <label key={brand}>
                                <input
                                    type="checkbox"
                                    checked={selectedBrands.includes(brand)}
                                    onChange={() => toggleBrand(brand)}
                                />
                                {brand}
                            </label>
                        ))}
                    </div>
                    {/* RAM Filter */}
                    <div>
                        <h2>RAM</h2>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedRAM.length === initialState.Mobile.RAM.length}
                                onChange={() => setSelectedRAM(selectedRAM.length === 0 ? initialState.Mobile.RAM : [])}
                            />
                            All RAM Options
                        </label>
                        {initialState.Mobile.RAM.map(ram => (
                            <label key={ram}>
                                <input
                                    type="checkbox"
                                    checked={selectedRAM.includes(ram)}
                                    onChange={() => toggleRAM(ram)}
                                />
                                {ram}
                            </label>
                        ))}
                    </div>
                    {/* Storage Filter */}
                    <div>
                        <h2>Storage</h2>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedStorage.length === initialState.Mobile.Storage.length}
                                onChange={() => setSelectedStorage(selectedStorage.length === 0 ? initialState.Mobile.Storage : [])}
                            />
                            All Storage Options
                        </label>
                        {initialState.Mobile.Storage.map(storage => (
                            <label key={storage}>
                                <input
                                    type="checkbox"
                                    checked={selectedStorage.includes(storage)}
                                    onChange={() => toggleStorage(storage)}
                                />
                                {storage}
                            </label>
                        ))}
                    </div>
                    {/* Size Filter */}
                    <div>
                        <h2>Size</h2>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedSize.length === initialState.Mobile.Size.length}
                                onChange={() => setSelectedSize(selectedSize.length === 0 ? initialState.Mobile.Size : [])}
                            />
                            All Size Options
                        </label>
                        {initialState.Mobile.Size.map(size => (
                            <label key={size}>
                                <input
                                    type="checkbox"
                                    checked={selectedSize.includes(size)}
                                    onChange={() => toggleSize(size)}
                                />
                                {size}
                            </label>
                        ))}
                    </div>
                    {/* GPU Filter */}
                    <div>
                        <h2>GPU</h2>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedGPU.length === initialState.Mobile.GPU.length}
                                onChange={() => setSelectedGPU(selectedGPU.length === 0 ? initialState.Mobile.GPU : [])}
                            />
                            All GPU Options
                        </label>
                        {initialState.Mobile.GPU.map(gpu => (
                            <label key={gpu}>
                                <input
                                    type="checkbox"
                                    checked={selectedGPU.includes(gpu)}
                                    onChange={() => toggleGPU(gpu)}
                                />
                                {gpu}
                            </label>
                        ))}
                    </div>
                    {/* Resolution Filter */}
                    <div>
                        <h2>Resolution</h2>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedResolution.length === initialState.Mobile.Resolution.length}
                                onChange={() => setSelectedResolution(selectedResolution.length === 0 ? initialState.Mobile.Resolution : [])}
                            />
                            All Resolution Options
                        </label>
                        {initialState.Mobile.Resolution.map(resolution => (
                            <label key={resolution}>
                                <input
                                    type="checkbox"
                                    checked={selectedResolution.includes(resolution)}
                                    onChange={() => toggleResolution(resolution)}
                                />
                                {resolution}
                            </label>
                        ))}
                    </div>
                    {/* Add similar sections for other filters */}
                </div>
                <div className='button-section'>
                    <button className="apply-button" onClick={handleApplyFilters}>Apply Filters</button>
                    <button className="cancel-button" onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </Modal>
    );
};

export default FilterModal;
