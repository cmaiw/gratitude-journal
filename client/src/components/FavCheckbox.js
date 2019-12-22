import React from 'react';
import styled from '@emotion/styled';

const Checkbox = styled.input`
  display: flex;
  background-color: #63a4b7;
  height: 20px;
  width: 20px;
  border: none;
`;

function FavCheckbox() {
  const [on, setOn] = React.useState(false);
  return <Checkbox type="checkbox" checked={on} onChange={e => setOn(e.target.checked)} />;
}

export default FavCheckbox;
