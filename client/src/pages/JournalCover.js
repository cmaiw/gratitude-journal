import React from 'react';
import styled from '@emotion/styled';
import JournalLabel from '../components/JournalLabel';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';
import Header from '../components/Header';

const JournalCoverBackground = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  background-color: ${props => props.theme.colors.primary};
`;

const ItemContainer = styled.div`
  display: flex;
  height: 60vh;
  width: 100vw;
  margin: auto;
  align-items: center;
  flex-direction: column;
`;

const WashiTapeImgBlueHorizontal = styled.img`
  position: absolute:
  margin-top: 50px;
  height: 45px;
  width: 270px;
  object-fit: cover;
  margin-bottom: 0px;
`;

const WashiTapeImgGreenHappy = styled.img`
  height: 40px;
  width: 210px;
  object-fit: cover;
  overflow: hidden;
  z-index: 2;
  margin-top: -20px;
`;

const PaperclipClover = styled.img`
  height: 90px;
  width: 100px;
  z-index: 3;
  margin-top: -60px;
`;

function JournalCover() {
  return (
    <PageWrapperCenterSpEvenly>
      <Header>Welcome</Header>
      <JournalCoverBackground>
        <ItemContainer>
          {/* <WashiTapeImgGreenVertical src="/images/washitapegreentexturevert.png" /> */}
          <JournalLabel />
          <WashiTapeImgBlueHorizontal src="images/washitapebluevert.png" />
          <WashiTapeImgGreenHappy src="images/maskingtapebehappy.png" />
          <PaperclipClover src="images/paperclipclover.png" />
        </ItemContainer>
      </JournalCoverBackground>
    </PageWrapperCenterSpEvenly>
  );
}

export default JournalCover;
