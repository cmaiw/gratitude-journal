import React from 'react';
import styled from '@emotion/styled';
import origamibird from '../../public/images/birdlookingleft.png';
import UniversalButton from '../components/UniversalButton';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';
import PageTitle from '../components/PageTitle';
import WrapperTitleBird from '../components/WrapperTitleBird';

const Origamibird = styled.img`
  height: 65px;
  width: 85px;
`;

const TextAndSearchWrapper = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: space-evenly;
  height: 33%;
  width: 85%;
  text-align: flex-start;
`;

const SubtitleSearch = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 14px;
  margin: 0px;
`;

const SearchBarByDate = styled.input`
  all: unset;
  height: 22px;
  width: 80%;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.secondary};
  opacity: 0.35;
  outline: none;
  cursor: text;
  border: none;
  border-radius: 4px;
  margin-top: none;
  margin-bottom: none;
  margin-right: 5px;
`;

const EntryCard = styled.card`
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.secondary};
  opacity: 0.35;
  min-height: 22px;
  margin: 10px;
  font-size: 14px;
`;

function EntryOverviewPage() {
  return (
    <PageWrapperCenterSpEvenly>
      <WrapperTitleBird>
        <PageTitle>Journal:</PageTitle>
        <Origamibird src={origamibird} />
      </WrapperTitleBird>
      <TextAndSearchWrapper>
        <SubtitleSearch>Search entries by date:</SubtitleSearch>
      </TextAndSearchWrapper>
      <TextAndSearchWrapper>
        <SearchBarByDate></SearchBarByDate>
        <UniversalButton>Submit</UniversalButton>
      </TextAndSearchWrapper>
      <TextAndSearchWrapper>
        <PageTitle>Last Entries:</PageTitle>
      </TextAndSearchWrapper>
      <EntryCard>Ich bin noch ein Platzhalter</EntryCard>
      <UniversalButton>Back</UniversalButton>
    </PageWrapperCenterSpEvenly>
  );
}
export default EntryOverviewPage;
