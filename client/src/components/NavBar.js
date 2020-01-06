import React from 'react';
import styled from '@emotion/styled';
import NavButton from './NavButton';
import BirdIcon from '../icons/BirdIcon';
import BookIcon from '../icons/BookIcon';
import AddIcon from '../icons/AddIcon';
import HelpIcon from '../icons/HelpIcon';

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 42px;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  border: ${props => props.theme.colors.primary};
`;

export function NavBar() {
  return (
    <Footer>
      <NavButton>
        <BirdIcon />
      </NavButton>
      <NavButton>
        <BookIcon />
      </NavButton>
      <NavButton>
        <AddIcon />
      </NavButton>
      <NavButton>
        <HelpIcon />
      </NavButton>
    </Footer>
  );
}

export default NavBar;
