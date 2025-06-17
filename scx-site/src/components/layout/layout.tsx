import React from 'react';
import { Header } from '../header/header';
import type { NavItem } from '../header/header';
import styled, { createGlobalStyle } from 'styled-components';
import { Outlet } from 'react-router-dom';

export interface LayoutProps {
  children?: React.ReactNode;
}

const GlobalStyle = createGlobalStyle`
  body {
    background: #f8f9fa;
    margin: 0;
    font-family: 'Segoe UI', Arial, sans-serif;
    color: #3D4F5C;
    cursor: default;
  }
  a, button, [role='button'], [tabindex]:not([tabindex='-1']) {
    cursor: pointer;
  }
  input, textarea {
    cursor: text;
  }
`;

const Main = styled.main`
  background: #f8f9fa;
  min-height: 80vh;
  padding: 2rem 0;
`;

const Footer = styled.footer`
  width: 100%;
  background: #f8f9fa;
  color: #3D4F5C;
  text-align: center;
  font-size: 1.08rem;
  font-weight: 500;
  padding: 2.2rem 0 2.1rem 0;
  margin-top: 0;
`;

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Our Consultants', path: '/consultants' },
  { label: 'Contact', path: '/contact' },
];

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <GlobalStyle />
    <Header navItems={navItems} />
    <Main>
      {children ? children : <Outlet />}
    </Main>
    <Footer>
      {/* Footer intentionally left empty */}
    </Footer>
  </>
);
