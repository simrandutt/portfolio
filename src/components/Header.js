import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.nav`
  a {
    margin: 0 1rem;
  }
`;

const Header = () => (
  <HeaderContainer>
    <div className="header-title-logo">
      <Link to="/">
        <img src="/path/to/logo.png" alt="Logo" />
      </Link>
    </div>
    <NavLinks>
      <Link to="/">Home & Projects</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </NavLinks>
  </HeaderContainer>
);

export default Header;
