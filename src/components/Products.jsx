import React from 'react';
import styled from 'styled-components';
import Footer from './common/footer';

const Products = () => {
    return (
        <Wrapper>
            <h1>Product</h1>
            <Footer />
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .grid-filter-column {
        grid-template-columns: 0.2fr 1fr;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .grid-filter-column {
            grid-template-columns: 1fr;
        }
    }
`;

export default Products;
