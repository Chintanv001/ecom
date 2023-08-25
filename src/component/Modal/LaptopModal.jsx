import React, { useState } from 'react';
import Modal from 'react-modal';
import './filterModal.css'; 
import { useDispatch } from 'react-redux'; // If you're using Redux

const LaptopFilterModal = ({ isOpen, onRequestClose, onApplyFilters }) => {
    const initialState = {
    Brand: ["Apple", "Lenovo", "Dell"],
    RAM: ["8 GB", "4 GB"],
    OperatingSystem: ["Mac OS Sierra", "Windows 10 Home", "DOS", "Ubuntu"],
    GraphicsProcessor: ["Intel Integrated HD 6000"],
    ProcessorBrand: ["Intel", "AMD"],
    ProcessorName: [
      "Core i5",
      "Core i3",
      "Ryzen 3 Dual Core",
      "APU Dual Core A6",
      "Core i7"
    ],
    };

    const dispatch = useDispatch();

    // State variables for selected filters
    const [selectedBrand, setSelectedBrand] = useState([]);
    const [selectedRAM, setSelectedRAM] = useState([]);
    const [selectedOperatingSystem, setSelectedOperatingSystem] = useState([]);
    const [selectedGraphicProcessor, setSelectedGraphicProcessor] = useState([]);
    const [selectedProcessorBrand, setSelectedProcessorBrand] = useState([]);
    const [selectedProcessorName, setSelectedProcessorName] = useState([]);

    const toggleBrand = (brand) => {
        if (selectedBrand.includes(brand)) {
            setSelectedBrand(selectedBrand.filter(item => item !== brand));
        } else {
            setSelectedBrand([...selectedBrand, brand]);
        }
    };

    const toggleRAM = (ram) => {
        if (selectedRAM.includes(ram)) {
            setSelectedRAM(selectedRAM.filter(item => item !== ram));
        } else {
            setSelectedRAM([...selectedRAM, ram]);
        }
    };

    const toggleOperatingSystem = (os) => {
        if (selectedOperatingSystem.includes(os)) {
            setSelectedOperatingSystem(selectedOperatingSystem.filter(item => item !== os));
        } else {
            setSelectedOperatingSystem([...selectedOperatingSystem, os]);
        }
    };

    const toggleGraphicProcessor = (processor) => {
        if (selectedGraphicProcessor.includes(processor)) {
            setSelectedGraphicProcessor(selectedGraphicProcessor.filter(item => item !== processor));
        } else {
            setSelectedGraphicProcessor([...selectedGraphicProcessor, processor]);
        }
    };

    const toggleProcessorBrand = (brand) => {
        if (selectedProcessorBrand.includes(brand)) {
            setSelectedProcessorBrand(selectedProcessorBrand.filter(item => item !== brand));
        } else {
            setSelectedProcessorBrand([...selectedProcessorBrand, brand]);
        }
    };

    const toggleProcessorName = (name) => {
        if (selectedProcessorName.includes(name)) {
            setSelectedProcessorName(selectedProcessorName.filter(item => item !== name));
        } else {
            setSelectedProcessorName([...selectedProcessorName, name]);
        }
    };

    const handleApplyFilters = () => {
        const filters = {
            Brand: [...selectedBrand],
            RAM: [...selectedRAM],
            OperatingSystem: [...selectedOperatingSystem],
            GraphicProcessor: [...selectedGraphicProcessor],
            ProcessorBrand: [...selectedProcessorBrand],
            ProcessorName: [...selectedProcessorName]
        };

        dispatch({ type: 'APPLY_LAPTOP_FILTERS', payload: filters }); // Dispatch Redux action if using Redux
        onRequestClose();
    };

    const handleCancel = () => {
        setSelectedBrand([]);
        setSelectedRAM([]);
        setSelectedOperatingSystem([]);
        setSelectedGraphicProcessor([]);
        setSelectedProcessorBrand([]);
        setSelectedProcessorName([]);

        // Dispatch the action to clear filters
        dispatch({ type: 'CLEAR_LAPTOP_FILTERS' }); // Dispatch Redux action if using Redux

        onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <div className='filter-modal'>
                <div className='filter-section'>
                    <h1>Laptop Filters</h1>
                    {/* Brand Filter */}
                    <div>
                        <h2>Brand</h2>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedBrand.length === initialState.Brand.length}
                                onChange={() => setSelectedBrand(selectedBrand.length === 0 ? initialState.Brand : [])}
                            />
                            All Brands
                        </label>
                        {initialState.Brand.map(brand => (
                            <label key={brand}>
                                <input
                                    type="checkbox"
                                    checked={selectedBrand.includes(brand)}
                                    onChange={() => toggleBrand(brand)}                                />
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
                                checked={selectedRAM.length === initialState.RAM.length}
                                onChange={() => setSelectedRAM(selectedRAM.length === 0 ? initialState.RAM : [])}
                            />
                            All RAM
                        </label>
                        {initialState.RAM.map(ram => (
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
                   
                    {/* OperatingSystem Filter */}
                    <div>
                        <h2>Operating System</h2>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedOperatingSystem.length === initialState.OperatingSystem.length}
                                onChange={() => setSelectedOperatingSystem(selectedOperatingSystem.length === 0 ? initialState.OperatingSystem : [])}
                            />
                            All Operating Systems
                        </label>
                        {initialState.OperatingSystem.map(os => (
                            <label key={os}>
                                <input
                                    type="checkbox"
                                    checked={selectedOperatingSystem.includes(os)}
                                    onChange={() => toggleOperatingSystem(os)}
                                />
                                {os}
                            </label>
                        ))}
                    </div>
                    {/* GraphicProcessor Filter */}
                    <div>
                        <h2>Graphic Processor</h2>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedGraphicProcessor.length === initialState.GraphicsProcessor.length}
                                onChange={() => setSelectedGraphicProcessor(selectedGraphicProcessor.length === 0 ? initialState.GraphicsProcessor : [])}
                            />
                            All Graphic Processors
                        </label>
                        {initialState.GraphicsProcessor.map(processor => (
                            <label key={processor}>
                                <input
                                    type="checkbox"
                                    checked={selectedGraphicProcessor.includes(processor)}
                                    onChange={() => toggleGraphicProcessor(processor)}
                                />
                                {processor}
                            </label>
                        ))}
                    </div>
                    {/* ProcessorBrand Filter */}
                    <div>
                        <h2>Processor Brand</h2>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedProcessorBrand.length === initialState.ProcessorBrand.length}
                                onChange={() => setSelectedProcessorBrand(selectedProcessorBrand.length === 0 ? initialState.ProcessorBrand : [])}
                            />
                            All Processor Brands
                        </label>
                        {initialState.ProcessorBrand.map(brand => (
                            <label key={brand}>
                                <input
                                    type="checkbox"
                                    checked={selectedProcessorBrand.includes(brand)}
                                    onChange={() => toggleProcessorBrand(brand)}
                                />
                                {brand}
                            </label>
                        ))}
                    </div>
                    {/* ProcessorName Filter */}
                    <div>
                        <h2>Processor Name</h2>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedProcessorName.length === initialState.ProcessorName.length}
                                onChange={() => setSelectedProcessorName(selectedProcessorName.length === 0 ? initialState.ProcessorName : [])}
                            />
                            All Processor Names
                        </label>
                        {initialState.ProcessorName.map(name => (
                            <label key={name}>
                                <input
                                    type="checkbox"
                                    checked={selectedProcessorName.includes(name)}
                                    onChange={() => toggleProcessorName(name)}
                                />
                                {name}
                            </label>
                        ))}
                    </div>
                </div>
                <div className='button-section'>
                    <button className="apply-button" onClick={handleApplyFilters}>Apply Filters</button>
                    <button className="cancel-button" onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </Modal>
    );
};

export default LaptopFilterModal;
