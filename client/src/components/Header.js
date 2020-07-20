import styled from '@emotion/styled';

const Header = styled.header`
  display: flex;
  flex-direction: row;
  height: 48px;
  margin-bottom: 5px;
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.tertiary};
  font-family: 'Dancing Script', cursive;
  font-size: 24px;
  padding: 8px;
  border-radius: 0px 0px 60px 0px;
  border-bottom: 6px solid ${props => props.theme.colors.quartenary};
  z-index: +5;
`;

export default Header;
