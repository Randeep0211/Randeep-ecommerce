import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Navbar from './navbar';

const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .logo {
        height: 5rem;
    }
`;

const Header = () => {
    return (
        <>
            <MainHeader>
                <NavLink to="/">
                    <img src="./images/logo.png" alt="my img" />
                </NavLink>
                <Navbar />
            </MainHeader>
        </>
    );
};

export default Header;