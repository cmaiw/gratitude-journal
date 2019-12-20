import styled from '@emotion/styled';
import React from 'react';

const TheButton = styled.button`
  display: flex;
  height: 20px;
  width: 60px;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.active ? props.theme.colors.primary : props.theme.colors.tertiary};
  border: none;
  outline: none;
  font-size: 16px;
  color: ${props => props.theme.colors.background};
  border-radius: 4px;
`;
export function UniversalButton({ text, onClick }) {
  return <TheButton onClick={onClick}>edit</TheButton>;
}

export default UniversalButton;
