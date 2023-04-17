import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import ErrorPage from './components/ErrorPage';

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/single-product/:id" element={<SingleProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/error" element={<ErrorPage />} />
                <Route path="*" element={<Navigate to={'home'} />} />
            </Routes>
        </>
    );
};

export default AppRoutes;
