import styled from '@emotion/styled';
import React from 'react';
import origamibird from '../../public/images/bird.png';
import speechbubble from '../../public/images/speechbubble.png';
import tree from '../../public/images/tree.png';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 667px;
  width: 375px;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  background-image: url(${tree});
  background-origin: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  transform: scaleX(-1);
`;

const OrigamibirdAboutPage = styled.img`
  height: 75px;
  width: 95px;
  position: absolute;
  margin-top: 395px;
  transform: scaleX(-1);
  margin-left: 118px;
`;

const Speechbubble = styled.div`
  height: 200px;
  width: 350px;
  background-image: url(${speechbubble});
  background-origin: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  overflow: hidden;
  margin-top: 80px;
  margin-left: -100px;
  opacity: 0.85;
`;

const SpeechbubbleText = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 180px;
  height: 300px;
  transform: scaleX(-1);
  position: absolute;
  margin-top: 50px;
  margin-left: 63px;
`;

function Home(props) {
  return (
    <PageWrapperCenterSpEvenly {...props}>
      <ContentWrapper>
        <Speechbubble src={speechbubble}>
          <SpeechbubbleText>
            I feel like this is a beautiful day. Let us write about it!
          </SpeechbubbleText>
        </Speechbubble>
        <OrigamibirdAboutPage src={origamibird} />
      </ContentWrapper>
    </PageWrapperCenterSpEvenly>
  );
}

export default Home;
