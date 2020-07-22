import React from 'react';
import styled from '@emotion/styled';
import Confirmation from './Confirmation';
import { TextSubmit } from './ConfirmationText';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 350px;
  max-width: 300px;
  align-items: center;
  position: absolute;
  flex-wrap: wrap;
  text-align: center;
`;

function ConfirmationCardSubmit() {
  return (
    <>
      <Confirmation />
      <Container>
        <TextSubmit />
      </Container>
    </>
  );
}
export default ConfirmationCardSubmit;
