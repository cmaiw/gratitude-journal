import styled from '@emotion/styled';
import React from 'react';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';
import Login from '../components/Login';
import UniversalButton from '../components/UniversalButton';
import { useHistory } from 'react-router-dom';
import { keyframes } from '@emotion/core';
import Header from '../components/Header';

const hob = keyframes`
        0%   { transform: translateY(0); }
        30%  { transform: translateY(-5px); }
        50%  { transform: translateY(5); }
        100% { transform: translateY(0); }
    }
`;

const OrigamibirdAboutPage = styled.img`
  height: 85px;
  width: 105px;
  align-self: flex-end;
  margin-left: 10px;
  margin-bottom: 35px;
  animation: ${hob};
  animation-duration: 0.9s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
`;

const SpeechbubbleText = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Dancing Script', cursive;
  font-size: 24px;
  text-align: center;
  margin-top: 80px;
  margin-left: 20px;
  margin-right: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-self: center;
  padding: 10px;
`;

function Home(props) {
  const history = useHistory();

  function handleClick() {
    history.push(`/journal/page-1`);
  }

  return (
    <PageWrapperCenterSpEvenly {...props}>
      <Header>Welcome</Header>
      <SpeechbubbleText>
        I feel like this is a beautiful day. Let us write about it!
      </SpeechbubbleText>
      <Form>
        <Login type="text" value="" placeholder="Welcome guest!"></Login>
        <Login type="text" value="" placeholder="******* Hit Login!"></Login>
        <UniversalButton name="login-btn" type="submit" onClick={handleClick}>
          Login
        </UniversalButton>
      </Form>
      <OrigamibirdAboutPage src="/images/birdlookingleft.png" />
    </PageWrapperCenterSpEvenly>
  );
}

export default Home;
