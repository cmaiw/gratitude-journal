import React from 'react';
import styled from '@emotion/styled';
import NavButton from './NavButton';
import BirdIcon from '../icons/BirdIcon';
import BookIcon from '../icons/BookIcon';
import AddIcon from '../icons/AddIcon';
import HelpIcon from '../icons/HelpIcon';

export const Footer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 40px;
  width: 500px;
  background-color: ${props => props.theme.colors.primary};
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
