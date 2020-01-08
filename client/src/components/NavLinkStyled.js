import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const NavLinkStyled = styled(NavLink)`
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 6px; 

  &:hover {
    background-color: ${props => props.theme.colors.quartenary} opacity: 0.15;
  }
  &:active {
  }
  background-color: ${props => props.theme.colors.quartenary} opacity: 0.15;
`;

export default NavLinkStyled;
