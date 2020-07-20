import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const LabelAndBirdWrapper = styled.div`
  width: 100%;
  height: 500px;
`;

const BookLabel = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  margin-top: 125px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  justify-content: center;
  align-items: flex-start;
  height: 200px;
  width: 280px;
  padding: none;
  background-image: url('images/label.png');
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
  font-family: 'Dancing Script', cursive;
  font-size: 32px;
`;
const LabelSubtitle = styled.div`
  color: ${props => props.theme.colors.font};
  margin-right: auto;
  margin-left: auto;
  font-family: 'Dosis', sans-serif;
  font-size: 18px;
  text-wrap: wrap;
  display: block;
`;

const hob = keyframes`
        0%   { transform: translateY(0); }
        30%  { transform: translateY(-5px); }
        50%  { transform: translateY(5px); }
        100% { transform: translateY(0); }
    }
`;

const OrigamiBirdImg = styled.img`
  height: 95px;
  width: 105px;
  position: absolute;
  margin-top: 95px;
  margin-left: 56px;
  animation: ${hob};
  animation-duration: 0.9s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
`;

function JournalLabel() {
  return (
    <LabelAndBirdWrapper>
      <OrigamiBirdImg src="/images/birdlookingleft.png" />
      <BookLabel>
        <LabelTitle>Gratefully</LabelTitle>
        <LabelSubtitle>your gratitude</LabelSubtitle>
        <LabelSubtitle>journal</LabelSubtitle>
      </BookLabel>
    </LabelAndBirdWrapper>
  );
}

export default JournalLabel;
