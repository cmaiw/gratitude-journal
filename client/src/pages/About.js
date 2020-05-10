import styled from '@emotion/styled';
import React from 'react';
import UniversalButton from '../components/UniversalButton';
import WrapperTitleBird from '../components/WrapperTitleBird';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';
import PageTitle from '../components/PageTitle';
import { useHistory } from 'react-router-dom';
import { keyframes } from '@emotion/core';

const ArticleWrapper = styled.main`
  width: 350px;
  height: 70%;
  display: block;
  margin: 20px;
  background-color: ${props => props.theme.colors.quinary};
  padding: 8px;
  border-radius: 8px;
  opacity: 0.85;
  overflow: scroll;
  flex-wrap: wrap;
`;

const AboutMainArticle = styled.div`
  width: 100%;
  display: block;
  color: ${props => props.theme.colors.primary};
  padding: 8px;
  font-size: 14px;
`;

const hob = keyframes`
        0%   { transform: translateY(0); }
        30%  { transform: translateY(-5px); }
        50%  { transform: translateY(5px); }
        100% { transform: translateY(0); }
    }
`;

const Origamibird = styled.img`
  height: 65px;
  width: 85px;
  margin-top: 20px;
  animation: ${hob};
  animation-duration: 0.9s;
  animation-timing-function: ease;
  animation-iteration-count: 5;
`;

const ButtonCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 55px;
`;
function About() {
  const history = useHistory();
  function handleClickBack() {
    history.push(`/home`);
  }

  const A = styled.a`
    color: ${props => props.theme.colors.primary};
    &:hover {
      color: orange;
    }
  `;

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
          <AboutMainArticle>Credits to the free picture sources:</AboutMainArticle>
          <AboutMainArticle>
            <div>
              Origami bird:{' '}
              <A href="https://www.pngfuel.com/free-png/aubqv" title="Origami-bird">
                from pngfuel
              </A>
            </div>

            <div>
              tape green:{' '}
              <A
                href="https://www.pngguru.com/free-transparent-background-png-clipart-lccmi"
                title="tape green"
              >
                from pngguru
              </A>
            </div>
            <div>
              tape teal:{' '}
              <A href="https://www.pngfuel.com/free-png/bcmlr" title="tape teal">
                from pngfuel
              </A>
            </div>
            <div>
              tape be happy:{' '}
              <A
                href="https://www.pngguru.com/free-transparent-background-png-clipart-lcagf"
                title="tape be happy"
              >
                from pngguru
              </A>
            </div>
            <div>
              label:{' '}
              <A
                href="https://www.pngguru.com/free-transparent-background-png-clipart-kyuuu"
                title="label"
              >
                from pngguru
              </A>
            </div>
            <div>
              watercolor tree:{' '}
              <A
                href="https://www.kindpng.com/imgv/iiwJbJJ_little-watercolor-trees-transparent-tree-watercolor-png-png/"
                title="watercolor tree"
              >
                from kindpng
              </A>
            </div>
            <div>
              paperclip with clover:{' '}
              <A
                href="https://www.pngguru.com/free-transparent-background-png-clipart-lbpbr"
                title="paperclip"
              >
                from pngguru
              </A>
            </div>
            <div>
              pin needle:{' '}
              <A
                href="https://www.pngguru.com/free-transparent-background-png-clipart-bgdse"
                title="pin needle"
              >
                from pngguru
              </A>
            </div>
            <div>
              speechbubble orange:{' '}
              <A
                href="https://www.pngguru.com/free-transparent-background-png-clipart-knbmo"
                title="speechbubble orange"
              >
                from pngguru
              </A>
            </div>
            <div>
              orange splash:{' '}
              <A
                href="https://www.nicepng.com/ourpic/u2e6r5e6q8y3t4u2_-img-orange-paint-splatter-png/"
                title="orange splash"
              >
                nicepng
              </A>
            </div>
          </AboutMainArticle>
        </ArticleWrapper>
        <ButtonCheckboxWrapper>
          <UniversalButton type="button" onClick={handleClickBack}>
            Back
          </UniversalButton>
        </ButtonCheckboxWrapper>
      </PageWrapperCenterSpEvenly>
    </>
  );
}

export default About;
