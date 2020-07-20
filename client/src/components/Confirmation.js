import React from 'react';
import styled from '@emotion/styled';
import FeatherIcon from '../icons/FeatherIcon';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-right: auto;
  margin-left: auto;
  height: 400px;
  width: 90%;
  background-color: ${props => props.theme.colors.quinary};
  overflow: scroll;
  border-radius: 30px 15px 30px 15px;
  border-right: 6px solid ${props => props.theme.colors.quartenary};
  border-bottom: 6px solid ${props => props.theme.colors.quartenary};
  text-align: center;
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
  z-index: -5;
  padding: 12px;
  text-align: center;
`;
const Needle = styled.img`
  display: flex;
  width: 120px;
  height: 40px;
  align-self: bottom;
`;

function Confirmation() {
  return (
    <Card>
      <Needle src="/images/needle.png" />
      <FeatherIcon />
    </Card>
  );
}
export default Confirmation;
