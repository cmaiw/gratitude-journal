import React from 'react';
import styled from '@emotion/styled';

const StyledCheckbox = styled.div`
  /* all: unset; */
  display: flex;
  width: 20px;
  height: 20px;
  background-color: ${props => props.theme.colors.quinary};
  border-radius: 4px;
  border: none;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.quinary};
  font-size: 18px;
  font-weight: bold;
  overflow: hidden;

  &:hover {
    background-color: #b7dd96;
    color: #b7dd96;
    cursor: pointer;
  }

  &:active {
    color: #f8f8ef;
    background-color: #63a4b7;
  }
`;

function FavCheckbox(props) {
  const [active, setActive] = React.useState(false);

  return (
    <>
      <StyledCheckbox
        checked={active}
        onChange={e => setActive(e.currentTarget ? !!active : active)}
        {...props}
      >
        ✔︎
      </StyledCheckbox>
    </>
  );
}

export default FavCheckbox;
