import React from 'react';
import styled from '@emotion/styled';

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  display: flex;
  height: 20px;
  width: 20px;
  background-color: ${props => props.theme.colors.quinary};
`;

function FavCheckbox() {
  return <Checkbox />;
}

export default FavCheckbox;
