import React from 'react';
import HeroSection from './common/HeroSection';
import Footer from './common/footer';
import { useProductContext } from '../context/productContext';

const About = () => {
    const { myName } = useProductContext();
    const Name = {
        name: 'Randeep Ecommerce',
    };
    return (
        <>
            {myName}
            <HeroSection Name={Name} />
            <Footer />
        </>
    );
};

export default About;
