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

  &:hover {
    color: ${props => props.theme.colors.quartenary};
  }
  &:active {
  }
  color: ${props => props.theme.colors.quartenary};
`;

function NavButton(props) {
  return <ThisNavButton {...props}></ThisNavButton>;
}

export default NavButton;
