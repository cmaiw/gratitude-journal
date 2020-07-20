import React from 'react';
import styled from '@emotion/styled';
import Confirmation from './Confirmation';
import { TextConfirmDelete } from './ConfirmationText';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 2;
`;

function ConfirmationCardSubmit() {
  return (
    <>
      <Confirmation />
      <Container>
        <TextConfirmDelete />
      </Container>
    </>
  );
}
export default ConfirmationCardSubmit;
