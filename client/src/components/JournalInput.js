import styled from '@emotion/styled';

const JournalInput = styled.input`
  all: unset;
  height: 22px;
  width: 100%;
  display: block;
  padding: 2px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 6px;
  font-size: 14px;
  border: none;
  outline: none;
  opacity: 0.35;
`;

export default JournalInput;
