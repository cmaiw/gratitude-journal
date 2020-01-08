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
  height: 450px;
  width: 85%;
  background-color: ${props => props.theme.colors.quinary};
  overflow: scroll;
  opacity: 0.75;
  border-radius: 8px;
  text-align: center;
`;

const Needle = styled.img`
  display: flex;
  width: 120px;
  height: 40px;
  padding-top: 5px;
`;

const ConfirmationText = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 10px;
  overflow: scroll;
`;

function EntryConfirmationCard() {
  return (
    <Confirmation>
      <Confirmation>
        <Needle src="images/needle.png" />
        <ConfirmationText>Your entry has been submitted.</ConfirmationText>
        <ConfirmationText>I have something inspiring to think about for you:</ConfirmationText>
        <ConfirmationText>
          Ich bin ein Platzhalter und noch ein Platzhalter und noch ein Platzhalter und noch ein
          Platzhalter...
        </ConfirmationText>
        <FeatherIcon />
      </Confirmation>
    </Confirmation>
  );
}
export default EntryConfirmationCard;
