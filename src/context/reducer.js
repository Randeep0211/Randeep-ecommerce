const productReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: true,
            };

        case 'SET_PRODUCT':
            const featuredData = action.payload.data.filter((currElem) => {
                return currElem.featured === true;
            });
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featuredProducts: featuredData,
            };

        case 'SET_ERROR':
            return {
                ...state,
                isLoading: false,
                isError: true,
            };

        default:
            return state;
    }
};

export default productReducer;
