import React from 'react';
import styled from '@emotion/styled';
import FeatherIcon from '../icons/FeatherIcon';
import needle from '../../public/images/needle.png';

const Confirmation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 5px;
  margin-bottom: 15px;
  margin-right: auto;
  margin-left: auto;
  height: 320px;
  width: 85%;
  background-color: ${props => props.theme.colors.quinary};
  overflow: scroll;
  opacity: 0.75;
  border-radius: 8px;
`;

const Needle = styled.img`
  display: flex;
  width: 120px;
  height: 40px;
  padding-top: 10px;
`;

const ConfirmationIntroduction = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 15px;
  overflow: scroll;
`;

const ConfirmationAdvice = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 15px;
  overflow: scroll;
`;

function EntryConfirmationCard() {
  return (
    <Confirmation>
      <Confirmation>
        <Needle src={needle} />
        <ConfirmationIntroduction>Your entry has been submitted.</ConfirmationIntroduction>
        <ConfirmationIntroduction>
          I have something inspiring to think about for you:
        </ConfirmationIntroduction>
        <ConfirmationAdvice>
          Ich bin ein Platzhalter und noch ein Platzhalter und noch ein Platzhalter und noch ein
          Platzhalter...
        </ConfirmationAdvice>
        <FeatherIcon />
      </Confirmation>
    </Confirmation>
  );
}
export default EntryConfirmationCard;
