import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { useHistory } from 'react-router-dom';

const LabelAndBirdWrapper = styled.div`
  width: 310px;
  height: 230px;
  align-self: center;
  margin-bottom: 20px;
  margin-top: 10px;
  @media only screen and (max-height: 450px) {
    height: 210px;
    width: 290px;
  }
`;

const BookLabel = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 220px;
  width: 300px;
  padding: none;
  background-image: url('images/label.png');
  background-origin: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
  @media only screen and (max-height: 450px) {
    height: 180px;
    width: 260px;
  }
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
  position: absolute;
  margin-top: -25px;
  margin-right: 20px;
  height: 85px;
  width: 105px;
  animation: ${hob};
  animation-duration: 0.9s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  @media only screen and (max-height: 450px) {
    height: 65px;
    width: 85px;
  }
`;

function JournalLabel() {
  const history = useHistory();
  function handleClick() {
    history.push(`/home`);
  }

  return (
    <LabelAndBirdWrapper>
      <OrigamiBirdImg src="/images/birdlookingleft.png" onClick={handleClick} />
      <BookLabel>
        <LabelTitle>Gratefully</LabelTitle>
        <LabelSubtitle>your gratitude</LabelSubtitle>
        <LabelSubtitle>journal</LabelSubtitle>
      </BookLabel>
    </LabelAndBirdWrapper>
  );
}

export default JournalLabel;
