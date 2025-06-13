import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

export interface NavItem {
  label: string;
  path: string;
}

interface HeaderProps {
  navItems: NavItem[];
}

const HeaderContainer = styled.header<{ $scrolled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ $scrolled }) => ($scrolled ? '0.5rem 2rem' : '1rem 2rem')};
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  position: sticky;
  top: 0;
  z-index: 1200;
  transition: padding 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s;
`;

const Logo = styled(Link)<{ $scrolled: boolean }>`
  width: ${({ $scrolled }) => ($scrolled ? '180px' : '325px')};
  height: ${({ $scrolled }) => ($scrolled ? '90px' : '200px')};
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #888;
  text-decoration: none;
  transition: width 0.25s, height 0.25s;
`;

const Taglines = styled.div<{ $scrolled: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2rem;
  color: rgb(43, 65, 89);
  font-size: ${({ $scrolled }) => ($scrolled ? '1.1rem' : '1.5rem')};
  font-weight: 600;
  line-height: 1.3;
  transition: font-size 0.25s;
  @media (max-width: 600px) {
    font-size: 1.1rem;
    margin-left: 1rem;
  }
`;

const Nav = styled.nav`
  @media (max-width: 900px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 3.2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #222;
  font-weight: normal;
  border-bottom: none;
  font-size: 1.35rem;
  letter-spacing: -0.5px;
  padding: 0.2em 0.5em;
  transition: color 0.2s, font-weight 0.2s;
  position: relative;
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -6px;
    height: 4px;
    width: 0%;
    background: #00A693;
    border-radius: 2px;
    transition: width 0.32s cubic-bezier(0.4,0,0.2,1);
  }
  &.active {
    color: #00A693;
    font-weight: normal;
  }
  &.active::after {
    width: 100%;
    height: 4px;
    background: #00A693;
  }
  &:hover {
    color: #00A693;
    font-weight: normal;
  }
  &:hover::after {
    width: 100%;
    height: 4px;
    background: #00A693;
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  z-index: 1001;
  @media (max-width: 900px) {
    display: flex;
  }
`;

const Bar = styled.span`
  width: 28px;
  height: 3px;
  background: #222;
  margin: 3px 0;
  border-radius: 2px;
  transition: 0.3s;
`;

const MobileMenu = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 70vw;
  max-width: 320px;
  height: 100vh;
  background: #fff;
  box-shadow: -2px 0 12px rgba(0,0,0,0.08);
  transform: translateX(${({ open }: { open: boolean }) => (open ? '0' : '100%')});
  transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  z-index: 1000;
  @media (min-width: 901px) {
    display: none;
  }
`;

const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 1.35rem;
`;

export const Header: React.FC<HeaderProps> = ({ navItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    let lastState = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          if (y > 80 && !lastState) {
            setScrolled(true);
            lastState = true;
          } else if (y <= 0 && lastState) {
            setScrolled(false);
            lastState = false;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <HeaderContainer $scrolled={scrolled}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Logo to="/" $scrolled={scrolled}>
          <img src="/scx-logo.png" alt="SCXMC Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </Logo>
        <Taglines $scrolled={scrolled}>
          <span>SCience × CMC</span>
          <span>Supply Chain × CMC</span>
          <span>Simplified Consulting × CMC</span>
        </Taglines>
      </div>
      <Nav>
        <NavList>
          {navItems.map((item) => (
            <li key={item.path}>
              <StyledNavLink
                to={item.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {item.label}
              </StyledNavLink>
            </li>
          ))}
        </NavList>
      </Nav>
      <Hamburger
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
      >
        <Bar style={{ transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }} />
        <Bar style={{ opacity: menuOpen ? 0 : 1 }} />
        <Bar style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
      </Hamburger>
      <MobileMenu open={menuOpen}>
        <MobileNavList>
          {navItems.map((item) => (
            <li key={item.path}>
              <StyledNavLink
                to={item.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </StyledNavLink>
            </li>
          ))}
        </MobileNavList>
      </MobileMenu>
    </HeaderContainer>
  );
};
