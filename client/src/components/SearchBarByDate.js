import styled from '@emotion/styled';

const SearchBarByDate = styled.input`
  all: unset;
  height: 22px;
  width: 85%;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.secondary};
  opacity: 0.75;
  outline: none;
  cursor: text;
  border: none;
  border-radius: 4px;
  margin-top: none;
  margin-bottom: none;
  margin-right: 5px;
`;

export default SearchBarByDate;
