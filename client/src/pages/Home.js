import styled from '@emotion/styled';
import React from 'react';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';
import Login from '../components/Login';
import UniversalButton from '../components/UniversalButton';
import { useHistory } from 'react-router-dom';

const ContentWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  height: 617px;
  width: 320px;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  background-image: url('images/tree.png');
  background-origin: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  transform: scaleX(-1);
`;

const OrigamibirdAboutPage = styled.div`
  align-self: flex-end;
  height: 75px;
  width: 95px;
  position: absolute;
  margin-top: 350px;
  transform: scaleX(-1);
  margin-left: none;
  background-image: url('images/bird.png');
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

const Form = styled.form`
  display: block;
  z-index: 1;
  transform: scaleX(-1);
  margin-top: 250px;
  align-self: end;
  padding: 15px;
`;

function Home(props) {
  const history = useHistory();

  function handleClick() {
    history.push(`/journal`);
  }

  return (
    <PageWrapperCenterSpEvenly {...props}>
      <ContentWrapper>
        <Speechbubble>
          <SpeechbubbleText>
            I feel like this is a beautiful day. Let us write about it!
          </SpeechbubbleText>
        </Speechbubble>
        <Form>
          <Login type="text" value="" placeholder="Welcome guest!"></Login>
          <Login type="text" value="" placeholder="******** hit Login!"></Login>
          <UniversalButton name="login-btn" type="submit" onClick={handleClick}>
            Login
          </UniversalButton>
        </Form>
        <OrigamibirdAboutPage src="/images/bird.png" />
      </ContentWrapper>
    </PageWrapperCenterSpEvenly>
  );
}

export default Home;
