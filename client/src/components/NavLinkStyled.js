import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const NavLinkStyled = styled(NavLink)`
padding-top: 4px;
  height: 44px;
  width: auto;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 6px; 

  &:hover {
    background-color: ${props => props.theme.colors.quartenary} opacity: 0.15;
  }
  &:active {
  }
  background-color: ${props => props.theme.colors.quartenary} opacity: 0.15;
`;

export default NavLinkStyled;
