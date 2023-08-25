
const initialState = {
    filteredObject: [
        
    ]
        
    
};

const laptopFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'APPLY_LAPTOP_FILTERS':
            return {
                ...state,
                filteredObject: action.payload
            };
        case 'CLEAR_LAPTOP_FILTERS':
            return {
                ...state,
                filteredObject: initialState.filteredObject
            };
        default:
            return state;
    }
};

export default laptopFilterReducer;
