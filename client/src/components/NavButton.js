import styled from '@emotion/styled';

const NavButton = styled.button`
  display: flex;
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;

  :hover {
    outline: ${props => props.theme.colors.quatenary}, opacity:1;
  }
`;

export default NavButton;
