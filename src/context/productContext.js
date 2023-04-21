import { createContext, useContext, useEffect, useReducer } from 'react';
import {
    productService,
    singleProductService,
} from '../services/products/product.service';
import reducer from './reducer';
import axios from 'axios';
export const AppContext = createContext(null);

const initialState = {
    isLoading: false,
    isError: false,
    product: [],
    featuredProducts: [],
    isSingleProductLoading: false,
    isSingleProductError: false,
    singleProduct: {},
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

    const SingleProduct = async (id) => {
        dispatch({ type: 'SET_SINGLE_PRODUCT_LOADING' });
        try {
            const response = await singleProductService(id);
            const singleProducts = await response;
            dispatch({ type: 'SET_SINGLE_PRODUCT', payload: singleProducts });
        } catch (error) {
            dispatch({ type: 'SET_SINGLE_PRODUCT_ERROR' });
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        addProduct();
    }, []);
    return (
        <AppContext.Provider value={{ ...state, SingleProduct }}>
            {children}
        </AppContext.Provider>
    );
};

export const useProductContext = () => {
    return useContext(AppContext);
};
