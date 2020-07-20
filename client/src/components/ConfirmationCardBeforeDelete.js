import React from 'react';
import styled from '@emotion/styled';
import Confirmation from './Confirmation';
import { TextDelete } from './ConfirmationText';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 2;
`;

function ConfirmationCardBeforeDelete() {
  return (
    <>
      <Confirmation />
      <Container>
        <TextDelete />
      </Container>
    </>
  );
}
export default ConfirmationCardBeforeDelete;
