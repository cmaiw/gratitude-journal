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
    <Footer>
      <NavLinkStyled to="/">
        <TreeIconSmall />
      </NavLinkStyled>
      <NavLinkStyled to="/home">
        <BirdIcon />
      </NavLinkStyled>
      <NavLinkStyled to="/journal">
        <BookIcon />
      </NavLinkStyled>
      <NavLinkStyled to="/new">
        <AddIcon />
      </NavLinkStyled>
      <NavLinkStyled to="/about">
        <HelpIcon />
      </NavLinkStyled>
    </Footer>
  );
}

export default NavBar;
