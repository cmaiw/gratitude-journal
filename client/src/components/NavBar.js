import styled from '@emotion/styled';
import NavButton from './NavButton';
import BirdIcon from '../icons/BirdIcon';

const NavBar = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

return (
  <NavBar>
    <NavButton>
      <BirdIcon />
    </NavButton>
    <NavButton>
      <BookIcon />
    </NavButton>
    <NavButton>
      <AddIcon />
    </NavButton>
    <NavButton>
      <HelpIcon />
    </NavButton>
  </NavBar>
);
