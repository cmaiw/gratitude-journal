import React from 'react';
import styled from '@emotion/styled';
import FeatherIcon from '../icons/FeatherIcon';

const Confirmation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-right: auto;
  margin-left: auto;
  height: 400px;
  width: 90%;
  background-color: ${props => props.theme.colors.quinary};
  overflow: scroll;
  opacity: 0.85;
  border-radius: 8px;
  text-align: center;
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
`;

const Needle = styled.img`
  display: flex;
  width: 120px;
  height: 40px;
  padding-top: 5px;
`;

const ConfirmationText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 10px;
  overflow: scroll;
  color: ${props => props.theme.colors.primary};
  font-size: 14px;
`;

function ConfirmationCardSubmit() {
  return (
    <Confirmation>
      <Needle src="/images/needle.png" />
      <Confirmation>
        <ConfirmationText>Hi friend,</ConfirmationText>
        <ConfirmationText>Good, we changed your entry.</ConfirmationText>
        <ConfirmationText>
          Change is great. Once Rumi said: “Yesterday I was clever, so I wanted to change the world.
          Today I am wise, so I am changing myself.”
        </ConfirmationText>
        <FeatherIcon />
      </Confirmation>
    </Confirmation>
  );
}
export default ConfirmationCardSubmit;