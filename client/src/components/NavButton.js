import styled from '@emotion/styled';

const NavButton = styled.button`
  display: flex;
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  outline: none;
`;

export default NavButton;
