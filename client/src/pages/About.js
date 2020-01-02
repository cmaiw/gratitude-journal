import styled from '@emotion/styled';
import React from 'react';
import UniversalButton from '../components/UniversalButton';
import origamibird from '../../public/images/birdlookingleft.png';

const OrigamibirdAboutPage = styled.img`
  height: 75px;
  width: 95px;
  position: absolute;
  margin-top: -30px;
  margin-left: 190px;
`;

const AboutTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-family: 'Cookie', cursive;
  margin-top: 60px;
  margin-right: auto;
  margin-left: auto;
  display: block;
  width: 85%;
`;

const AboutPageWrapper = styled.div`
width: 100%;
height: 100%;
display: flex:
flex-direction: column;
justify-content: center;
align-items: center;
margin: auto;
font-size: 12px;
`;

const ArticleWrapper = styled.div`
width: 90%;
height: 100%;
display: flex:
flex-direction: column;
justify-content: center;
align-items: center;
margin: auto;
font-size: 12px;
background-color: ${props => props.theme.colors.secondary};
padding: 10px;
border-radius: 8px;
opacity: 0.75;
`;

const AboutMainArticle = styled.main`
  display: block;
  width: 85%;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  overflow: scroll;
  color: ${props => props.theme.colors.font};
  margin: auto;
  margin-top: 10px;
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;
function About() {
  return (
    <>
      <AboutPageWrapper>
        <OrigamibirdAboutPage src={origamibird} />
        <AboutTitle>About:</AboutTitle>
        <ArticleWrapper>
          <AboutMainArticle>
            Welcome! This journal is about becoming happier by focusing on the positive aspects in
            your life.
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
        <NavWrapper>
          <UniversalButton>Back</UniversalButton>
        </NavWrapper>
      </AboutPageWrapper>
    </>
  );
}

export default About;
