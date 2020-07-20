import React from 'react';
import styled from '@emotion/styled';
import JournalLabel from '../components/JournalLabel';
import TreeIcon from '../icons/TreeIcon';
import { NavLink } from 'react-router-dom';

const PageWrapperCenterSpEvenly = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 667px;
  width: 375px;
  overflow: scroll;
`;

const JournalCoverBackground = styled.div`
  margin-top: 20px;
  margin-bottom: 60px;
  height: 577px;
  width: 335px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center;
  background-color: ${props => props.theme.colors.primary};
  align-self: center;
  overflow: scroll;
  box-shadow: 10px 10px 15px 1px rgba(99, 164, 183, 0.8);
  border-radius: 4px;
`;

const WashiTapeImgGreenVertical = styled.img`
  height: 98px;
  width: 50px;
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
  margin-top: 450px;
  margin-left: -20px;
  overflow: hidden;
`;

const WashiTapeImgGreenHappy = styled.img`
  height: 40px;
  width: 210px;
  object-fit: cover;
  position: absolute;
  margin-top: 430px;
  margin-left: 0px;
  overflow: hidden;
`;

const PaperclipClover = styled.img`
  height: 90px;
  width: 100px;
  position: absolute;
  margin-top: 417px;
  margin-left: 135px;
`;

const SpecialHomeButton = styled(NavLink)`
  height: 62px;
  width: 62px;
  background: transparent;
  border: none;
  outline: none;
  padding-right: 60px;
`;

const SplashOrange = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 25px;
  align-items: center;
  height: 154px;
  width: 154px;
  position: absolute;
  margin-top: 430px;
  margin-left: 182px;
  opacity: 0.9;
  background-image: url('/images/orangesplash1.png');
  background-origin: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
`;

function JournalCover() {
  return (
    <PageWrapperCenterSpEvenly>
      <JournalCoverBackground>
        <WashiTapeImgGreenVertical src="/images/washitapegreentexturevert.png" />
        <JournalLabel />
        <WashiTapeImgBlueHorizontal src="images/washitapebluevert.png" />
        <WashiTapeImgGreenHappy src="images/maskingtapebehappy.png" />
        <PaperclipClover src="images/paperclipclover.png" />
        <SplashOrange>
          <SpecialHomeButton to="/home">
            <TreeIcon />
          </SpecialHomeButton>
        </SplashOrange>
      </JournalCoverBackground>
    </PageWrapperCenterSpEvenly>
  );
}

export default JournalCover;
