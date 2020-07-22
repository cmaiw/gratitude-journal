import styled from '@emotion/styled';

const UniversalButton = styled.button`
  display: flex;
  height: 20px;
  width: 60px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  border: none;
  outline: none;
  color: ${props => props.theme.colors.background};
  border-radius:8px;
  border: 1px solid;
  border-color: ${props => props.theme.colors.quartenary}
  padding: none;
  margin: none;
  text-decoration: none;

  &:active {
    background-color: ${props => props.theme.colors.tertiary};
  }

  &:hover {
    background-color: ${props => props.theme.colors.tertiary};
  }
`;

export default UniversalButton;
