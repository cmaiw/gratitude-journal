import styled from '@emotion/styled';
import React from 'react';

const TheButton = styled.button`
  display: flex;
  height: 20px;
  width: 60px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  border: none;
  outline: none;
  font-size: 16px;
  color: ${props => props.theme.colors.background};
  border-radius: 4px;

  &:active: {
    ${props => props.theme.colors.tertiary};
  }

  &:hover: {
    ${props => props.theme.colors.tertiary};
  }
`;

export function UniversalButton({ text, onClick }) {
  return <TheButton onClick={onClick}>{text}</TheButton>;
}

export default UniversalButton;
