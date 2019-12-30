import React from 'react';
import styled from '@emotion/styled';
import label from '../../public/images/label.png';
import bird from '../../public/images/birdlookingleft.png';

const LabelAndBirdWrapper = styled.div`
  width: 100%;
  height: 500px;
`;

const BookLabel = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  margin-top: 115px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  justify-content: center;
  align-items: flex-start;
  height: 190px;
  width: 280px;
  padding: none;
  background-image: url(${label});
  background-origin: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  overflow: hidden;
`;

const LabelTitle = styled.div`
  color: ${props => props.theme.colors.font};
  display: block;
  margin-right: auto;
  margin-left: auto;
  font-family: 'Cookie', cursive;
  font-size: 32px;
`;
const LabelSubtitle = styled.div`
  color: ${props => props.theme.colors.font};
  margin-right: auto;
  margin-left: auto;
  font-family: 'Cookie', cursive;
  font-size: 18px;
  text-wrap: wrap;
  display: block;
`;

const OrigamiBirdImg = styled.img`
  height: 90px;
  width: 100px;
  position: absolute;
  margin-top: 85px;
  margin-left: 56px;
`;

function JournalLabel() {
  return (
    <LabelAndBirdWrapper>
      <OrigamiBirdImg src={bird} />
      <BookLabel>
        <LabelTitle>Gratefully</LabelTitle>
        <LabelSubtitle>your gratitude</LabelSubtitle>
        <LabelSubtitle>journal</LabelSubtitle>
      </BookLabel>
    </LabelAndBirdWrapper>
  );
}

export default JournalLabel;
