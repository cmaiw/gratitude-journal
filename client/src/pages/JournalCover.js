import React from 'react';
import styled from '@emotion/styled';
import JournalLabel from '../components/JournalLabel';
import washitapegreenvert from '../../public/images/washitapegreentexturevert.png';
import washitapebluehor from '../../public/images/washitapebluevert.png';
import washitapegreenhappy from '../../public/images/maskingtapebehappy.png';
import paperclipclover from '../../public/images/paperclipclover.png';

const CoverPageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: auto;
  background-color: ${props => props.theme.colors.background};
`;

const JournalCoverBackground = styled.div`
  height: 896px;
  width: 414px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center;
  background-color: ${props => props.theme.colors.primary};
  align-self: center;
  overflow: hidden;
`;

const WashiTapeImgGreenVertical = styled.img`
  height: 78px;
  width: 45px;
  object-fit: cover;
  position: absolute;
  margin-top: none;
  margin-left: 45px;
  overflow: hidden;
`;

const WashiTapeImgBlueHorizontal = styled.img`
  height: 45px;
  width: 270px;
  object-fit: cover;
  position: absolute;
  margin-top: 470px;
  margin-left: -20px;
  overflow: hidden;
`;

const WashiTapeImgGreenHappy = styled.img`
  height: 40px;
  width: 210px;
  object-fit: cover;
  position: absolute;
  margin-top: 460px;
  margin-left: 0px;
  overflow: hidden;
`;

const PaperclipClover = styled.img`
  height: 90px;
  width: 100px;
  position: absolute;
  margin-top: 437px;
  margin-left: 135px;
`;

function JournalCover() {
  return (
    <CoverPageWrapper>
      <JournalCoverBackground>
        <WashiTapeImgGreenVertical src={washitapegreenvert} />
        <JournalLabel />
        <WashiTapeImgBlueHorizontal src={washitapebluehor} />
        <WashiTapeImgGreenHappy src={washitapegreenhappy} />
        <PaperclipClover src={paperclipclover} />
      </JournalCoverBackground>
    </CoverPageWrapper>
  );
}

export default JournalCover;
