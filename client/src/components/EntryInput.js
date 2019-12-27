import React from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: ${props => props.theme.colors.font};
  font-size: 14px;
`;

const Container = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  color: ${props => props.theme.colors.font};
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.font};
`;

const Description = styled.h5``;

const JournalInput = styled.input`
  all: unset;
  display: flex;
  height: 18px;
  padding: 2px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 6px;
  align-self: center;
  font-size: 14px;
  border: none;
  outline: none;
`;
function EntryInput(props) {
  return (
    <Container {...props}>
      <Label>
        <Description></Description>
        <JournalInput type="text" />
      </Label>
    </Container>
  );
}

export default EntryInput;
