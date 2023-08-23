
const initialState = {
    filteredObject: [
        
    ]
        
    
};

const mobileFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'APPLY_FILTERS':
            return {
                ...state,
                filteredObject: action.payload
            };
        case 'CLEAR_FILTERS':
            return {
                ...state,
                filteredObject: initialState.filteredObject
            };
        default:
            return state;
    }
};

export default mobileFilterReducer;
