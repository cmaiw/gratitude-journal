import styled from '@emotion/styled';
import React from 'react';

const ThisNavButton = styled.button`
  display: flex;
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 6px; 

  &:hover {
    background-color: ${props => props.theme.colors.quartenary} opacity: 0.15;
  }
  &:active {
  }
  background-color: ${props => props.theme.colors.quartenary} opacity: 0.15;
`;

function NavButton(props, onClick) {
  return <ThisNavButton onClick={onClick} {...props}></ThisNavButton>;
}

export default NavButton;
