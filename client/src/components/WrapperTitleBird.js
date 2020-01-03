import React from 'react';
import styled from '@emotion/styled';

const WrapperHeadingWithBird = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: 85%;
  margin-top: 15px;
`;

function WrapperTitleBird(props) {
  return <WrapperHeadingWithBird {...props}></WrapperHeadingWithBird>;
}
export default WrapperTitleBird;
