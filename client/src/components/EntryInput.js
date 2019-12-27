import React from 'react';
import styled from '@emotion/styled';

const JournalInput = styled.input`
  all: unset;
  height: 22px;
  width: 280px;
  display: flex;
  height: 18px;
  padding: 2px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 6px;
  align-self: center;
  font-size: 14px;
  border: none;
  outline: none;
  opacity: 0.75;
`;
function EntryInput(props) {
  return (
    <div {...props}>
      <JournalInput type="text" />
    </div>
  );
}

export default EntryInput;
