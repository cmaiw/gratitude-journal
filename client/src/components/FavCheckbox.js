import React from 'react';
import styled from '@emotion/styled';
// import CheckmarkPath from '../icons/CheckmarkIcon';

const CheckboxContainer = styled.label`
  display: flex;
  width: 20px;
  height: 20px;
  background-color: ${props => props.theme.colors.quinary};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 1px;
  padding: 1.5px;
  cursor: pointer;
`;

const StyledCheckbox = styled.input`
  opacity: 0.55;
  display: flex;
  width: 14px;
  height: 14px;
  border: none;
  justify-content: center;
  align-items: center;
`;

function FavCheckbox(props) {
  const [checked, setChecked] = React.useState(undefined);

  return (
    <CheckboxContainer {...props}>
      <StyledCheckbox
        type="checkbox"
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
      />
    </CheckboxContainer>
  );
}

export default FavCheckbox;
