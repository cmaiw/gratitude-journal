import styled from '@emotion/styled';

const JournalInput = styled.input`
  all: unset;
  height: 34px;
  width: 99%;
  display: block;
  padding: 4px;
  background-color: ${props => props.theme.colors.quinary};
  border-radius: 0px 8px 8px 0px;
  font-size: 14px;
  border: none;
  outline: none;
  align-items: center;
`;

export default JournalInput;
