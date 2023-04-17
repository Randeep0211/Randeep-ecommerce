import React from 'react';
import styled from 'styled-components';
import HeroSection from './common/HeroSection';
import Services from './services';
import Trusted from './Trusted';
import Footer from './common/footer';
import FeaturedProducts from './featuredProducts';

const Wrapper = styled.section`
    height: 100vh;
`;

const HomePage = () => {
    const Name = {
        name: 'Randeep Store',
    };
    return (
        <>
            <Wrapper>
                <h1>Home Page</h1>
                <HeroSection Name={Name} />
                <FeaturedProducts />
                <Services />
                <Trusted />
                <Footer />
            </Wrapper>
        </>
    );
};

export default HomePage;
