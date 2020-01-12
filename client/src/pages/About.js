import styled from '@emotion/styled';
import React from 'react';
import UniversalButton from '../components/UniversalButton';
import WrapperTitleBird from '../components/WrapperTitleBird';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';
import PageTitle from '../components/PageTitle';

const ArticleWrapper = styled.div`
width: 85%;
height: 100%;
display: flex:
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 10px;
font-size: 12px;
background-color: ${props => props.theme.colors.secondary};
padding: 10px;
border-radius: 8px;
opacity: 0.75;
overflow: hidden;
`;

const AboutMainArticle = styled.main`
  display: block;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  overflow: scroll;
  color: ${props => props.theme.colors.font};
  margin: 12px;
  font-size: 14px;
  overflow: scroll;
`;

const Origamibird = styled.img`
  height: 65px;
  width: 85px;
  margin-top: 20px;
`;

const ButtonCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 195px;
`;
function About() {
  return (
    <>
      <PageWrapperCenterSpEvenly>
        <WrapperTitleBird>
          <PageTitle>About:</PageTitle>
          <Origamibird src="/images/birdlookingleft.png" />
        </WrapperTitleBird>
        <ArticleWrapper>
          <AboutMainArticle>Welcome!</AboutMainArticle>
          <AboutMainArticle>
            This journal is about becoming happier by focusing on the positive aspects in your life.
          </AboutMainArticle>
          <AboutMainArticle>
            It happens to all of us. We think about the day and focus on the cold, rainy weather, a
            loud unfriendly person on our way to work or our train on delay.
          </AboutMainArticle>
          <AboutMainArticle>
            But what about the little wonders- the small things during our day that make us smile.
            Someone, keeps the door open for us, smiles at us, we can laugh with our colleagues at
            lunch break, we find a beautiful colored leaf in the cold autumn weather and it makes us
            smile.
          </AboutMainArticle>
          <AboutMainArticle>
            This journal will help you to remember people and things you love, your smiles and
            laughter during the day and it will help you to be thankful for the hidden benefits in
            your life. By using the journal on a daily basis you will become more grateful,
            healthier and happier.
          </AboutMainArticle>
        </ArticleWrapper>
        <ButtonCheckboxWrapper>
          <UniversalButton>Back</UniversalButton>
        </ButtonCheckboxWrapper>
      </PageWrapperCenterSpEvenly>
    </>
  );
}

export default About;
