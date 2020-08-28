import React from 'react';
import styled from '@emotion/styled';
import NavLinkStyled from './NavLinkStyled';
import BirdIcon from '../icons/BirdIcon';
import BookIcon from '../icons/BookIcon';
import AddIcon from '../icons/AddIcon';
import HelpIcon from '../icons/HelpIcon';
import TreeIconSmall from '../icons/TreeIconSmall';

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 48px;
  width: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: ${props => props.theme.colors.primary};
  border-top: 6px solid ${props => props.theme.colors.borders};
  margin-top: 10px;
  border-radius: 60px 0px 0px 0px;
  padding-top: 10px;
  z-index: 5;
`;

export function NavBar() {
  return (
    <Footer id="footer">
      <NavLinkStyled id="link-landing" to="/">
        <TreeIconSmall id="nav-icon-tree" />
      </NavLinkStyled>
      <NavLinkStyled id="link-home" to="/home">
        <BirdIcon id="nav-icon-bird" />
      </NavLinkStyled>
      <NavLinkStyled id="link-journal" to="/journal">
        <BookIcon id="nav-icon-journal" />
      </NavLinkStyled>
      <NavLinkStyled id="link-new" to="/new">
        <AddIcon id="nav-icon-new" />
      </NavLinkStyled>
      <NavLinkStyled id="link-about" to="/about">
        <HelpIcon id="nav-icon-about" />
      </NavLinkStyled>
    </Footer>
  );
}

export default NavBar;
