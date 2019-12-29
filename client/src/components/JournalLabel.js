import styled from '@emotion/styled';
import React from 'react';
import label from '/Users/ChristineWebDev/neuefische/gratitude-journal/client/public/images/label.png';

const BookLabel = styled.div`
background-color: transparent;
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 260px
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
  flex-shrink: auto;
  flex-wrap: wrap;
`;
const LabelSubtitle = styled.div`
  color: ${props => props.theme.colors.font};
  margin-right: auto;
  margin-left: auto;
  font-family: 'Cookie', cursive;
  font-size: 20px;
  text-wrap: wrap;
  display: block;
  flex-shrink: auto;
`;

function JournalLabel() {
  return (
    <BookLabel>
      <LabelTitle>Gratefully</LabelTitle>
      <LabelSubtitle>your gratitude</LabelSubtitle>
      <LabelSubtitle>journal</LabelSubtitle>
    </BookLabel>
  );
}

export default JournalLabel;
