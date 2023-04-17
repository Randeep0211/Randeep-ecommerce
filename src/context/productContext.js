import { createContext, useContext, useEffect, useReducer } from 'react';
import { productService } from '../services/products/product.service';
import reducer from './reducer';
export const AppContext = createContext(null);

const initialState = {
    isLoading: false,
    isError: false,
    product: [],
    featuredProducts: [],
};

export const AppProvider = ({ children }) => {
    const addProduct = async () => {
        dispatch({ type: 'SET_LOADING' });
        try {
            const response = await productService();
            const products = await response;
            dispatch({ type: 'SET_PRODUCT', payload: products });
            console.log(response);
        } catch (error) {
            dispatch({ type: 'SET_ERROR' });
            console.log(error);
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        addProduct();
    }, []);
    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    );
};

export const useProductContext = () => {
    return useContext(AppContext);
};
