import styled from '@emotion/styled';
import React from 'react';

const ThisUniversalButton = styled.button`
  display: flex;
  height: 20px;
  width: 60px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  border: none;
  outline: none;
  color: ${props => props.theme.colors.background};
  border-radius: 4px;

  &:active {
    background-color: ${props => props.theme.colors.tertiary};
  }

  &:hover {
    background-color: ${props => props.theme.colors.tertiary};
  }
`;

function UniversalButton(props) {
  return <ThisUniversalButton {...props}></ThisUniversalButton>;
}

export default UniversalButton;
