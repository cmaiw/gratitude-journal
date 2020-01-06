import styled from '@emotion/styled';
import React from 'react';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 627px;
  width: 320px;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  background-image: url('images/tree.png');
  background-origin: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  transform: scaleX(-1);
`;

const OrigamibirdAboutPage = styled.img`
  align-self: flex-end;
  height: 75px;
  width: 95px;
  position: absolute;
  margin-top: 328px;
  transform: scaleX(-1);
  margin-left: none;
`;

const Speechbubble = styled.div`
  height: 200px;
  width: 350px;
  align-self: flex-end;
  background-image: url('images/speechbubble.png');
  background-origin: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  overflow: hidden;
  margin-top: 60px;
  margin-right: none;
  opacity: 0.85;
  flex-grow: 1;
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
        <Speechbubble>
          <SpeechbubbleText>
            I feel like this is a beautiful day. Let us write about it!
          </SpeechbubbleText>
        </Speechbubble>
        <OrigamibirdAboutPage src="/images/bird.png" />
      </ContentWrapper>
    </PageWrapperCenterSpEvenly>
  );
}

export default Home;
