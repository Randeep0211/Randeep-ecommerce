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

        case 'SET_SINGLE_PRODUCT_LOADING':
            return {
                ...state,
                isSingleProductLoading: true,
            };
        case 'SET_SINGLE_PRODUCT':
            return {
                ...state,
                isSingleProductLoading: false,
                singleProduct: action?.payload?.data,
            };

        case 'SET_SINGLE_PRODUCT_ERROR':
            return {
                ...state,
                isSingleProductLoading: false,
                isSingleProductError: true,
            };
        default:
            return state;
    }
};

export default productReducer;
