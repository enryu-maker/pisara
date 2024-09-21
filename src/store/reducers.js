
const initialState = {
    banner: [],
    featured: [],
    products : {}
};
export default (state = initialState, action) => {
    switch (action.type) {
    
        case "GET_BANNER":
            return {
                ...state,
                banner: action.payload,
            };
        
        
        case "FEATURED":
            return {
                ...state,
                featured: action.payload,
            };
            case "CAT":
                return {
                    ...state,
                    products: action.payload,
                };
        default:
            return state;
    }
};