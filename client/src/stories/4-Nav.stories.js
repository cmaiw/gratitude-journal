import React from 'react';
import NavBar from '../components/NavBar';
import { MemoryRouter } from 'react-router-dom';
import BirdIcon from '../icons/BirdIcon';
import NavLinkStyled from '../components/NavLinkStyled';
import { action } from '@storybook/addon-actions';
import TreeIcon from '../icons/TreeIconSmall';
import styled from '@emotion/styled';
import BookIcon from '../icons/BookIcon';
import AddIcon from '../icons/AddIcon';
import HelpIcon from '../icons/HelpIcon';

export default {
  title: 'Navigation Buttons and Navigation Bar'
};

export function NavigationBar() {
  const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  `;

  return (
    <MemoryRouter>
      <Div>
        <NavLinkStyled
          onClick={action('NavButton to landing was clicked.')}
          mouseover={action('hover')}
          to="/"
        >
          <TreeIcon />
        </NavLinkStyled>
        <NavLinkStyled onClick={action('NavButton to home was clicked.')} to="/home">
          <BirdIcon />
        </NavLinkStyled>
        <NavLinkStyled onClick={action('NavButton to journal was clicked.')} to="/journal">
          <BookIcon />
        </NavLinkStyled>
        <NavLinkStyled onClick={action('NavButton to new was clicked.')} to="/new">
          <AddIcon />
        </NavLinkStyled>
        <NavLinkStyled onClick={action('NavButton to about was clicked.')} to="/about">
          <HelpIcon />
        </NavLinkStyled>
      </Div>

      <NavBar />
    </MemoryRouter>
  );
}
