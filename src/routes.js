import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Home';
import About from './About';
import Products from './Products';
import Contact from './Contact';
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import ErrorPage from './ErrorPage';

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/single-product" element={<SingleProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/error" element={<ErrorPage />} />
                <Route path="*" element={<Navigate to={'home'} />} />
            </Routes>
        </>
    );
};

export default AppRoutes;
