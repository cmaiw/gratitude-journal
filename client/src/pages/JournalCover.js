import React from 'react';
import styled from '@emotion/styled';
import JournalLabel from '../components/JournalLabel';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';
import Header from '../components/Header';

const JournalCoverBackground = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  background-color: ${props => props.theme.colors.primary};
  overflow: hidden;
`;

const ItemContainer = styled.div`
  display: flex;
  height: 60%;
  width: 100vw;
  margin: auto;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

const WashiTapeImgBlueHorizontal = styled.img`
  position: absolute;
  margin-top: 350px;
  height: 45px;
  width: 270px;
  object-fit: cover;
  margin-bottom: 0px;
  @media only screen and (max-height: 450px) {
    display: none;
  }
`;

const WashiTapeImgGreenHappy = styled.img`
  position: absolute;
  height: 40px;
  width: 210px;
  object-fit: cover;
  overflow: hidden;
  z-index: 1;
  margin-top: 330px;
  @media only screen and (max-height: 450px) {
    display: none;
  }
`;

const PaperclipClover = styled.img`
  position: absolute;
  height: 90px;
  width: 100px;
  z-index: 2;
  margin-top: -80px;
  margin-right: -70px;
  margin-top: 310px;
  @media only screen and (max-height: 450px) {
    display: none;
  }
`;

function JournalCover() {
  return (
    <PageWrapperCenterSpEvenly>
      <Header>Welcome</Header>
      <JournalCoverBackground>
        <ItemContainer>
          <JournalLabel />
          <WashiTapeImgBlueHorizontal src="images/washitapeblue.png" />
          <WashiTapeImgGreenHappy src="images/maskingtapebehappy.png" />
          <PaperclipClover src="images/paperclipclover.png" />
        </ItemContainer>
      </JournalCoverBackground>
    </PageWrapperCenterSpEvenly>
  );
}

export default JournalCover;
