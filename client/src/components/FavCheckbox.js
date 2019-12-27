import React from 'react';
import styled from '@emotion/styled';

const CheckboxContainer = styled.div`
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
  opacity: 0.25;
  display: flex;
  width: 14px;
  height: 14px;
  border: none;
  justify-content: center;
  align-items: center;
`;

const FavCheckbox = () => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = event => setChecked(event.target.checked);

  return (
    <CheckboxContainer>
      <StyledCheckbox type="checkbox" checked={checked} onChange={handleChange} />
    </CheckboxContainer>
  );
};

export default FavCheckbox;
