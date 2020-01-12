import styled from '@emotion/styled';

const JournalInput = styled.input`
  all: unset;
  height: 34px;
  width: 100%;
  display: block;
  padding: 2px;
  background-color: ${props => props.theme.colors.quinary};
  border-radius: 6px;
  font-size: 14px;
  border: none;
  outline: none;
  opacity: 0.75;
  align-items: center;
`;

export default JournalInput;
