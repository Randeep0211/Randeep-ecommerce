import React from 'react';
import styled from 'styled-components';
import HeroSection from './components/common/HeroSection';
import Services from './components/services';
import Trusted from './components/Trusted';
import Footer from './components/common/footer';

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
                <Services />
                <Trusted />
                <Footer />
            </Wrapper>
        </>
    );
};

export default HomePage;
