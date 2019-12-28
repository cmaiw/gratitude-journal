import styled from '@emotion/styled';
import React from 'react';
import BirdIcon from '../icons/BirdIcon';

const SpecialButton = styled.button`
  display: flex;
  height: 80px;
  width: 80px;
  justify-content: center;
  align-items: center;
  outline: none;
`;

function SpecialBirdButton() {
  return (
    <SpecialButton>
      <BirdIcon />
    </SpecialButton>
  );
}

export default SpecialBirdButton;
