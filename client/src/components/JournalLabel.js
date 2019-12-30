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
  margin-top: 130px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  justify-content: center;
  align-items: flex-start;
  height: 150px;
  width: 230px;
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
  font-size: 22px;
`;
const LabelSubtitle = styled.div`
  color: ${props => props.theme.colors.font};
  margin-right: auto;
  margin-left: auto;
  font-family: 'Cookie', cursive;
  font-size: 14px;
  text-wrap: wrap;
  display: block;
`;

const OrigamiBirdImg = styled.img`
  height: 80px;
  width: 90px;
  position: absolute;
  margin-top: 88px;
  margin-left: 38px;
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
