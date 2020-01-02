import React from 'react';
import styled from '@emotion/styled';
import origamibird from '../../public/images/birdlookingleft.png';
import UniversalButton from '../components/UniversalButton';

const OrigamibirdEntryOverview = styled.img`
  height: 75px;
  width: 95px;
  position: absolute;
  margin-top: -120px;
  margin-left: 70px;
`;

const OverviewPageWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
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

const OverviewAndSearchTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-family: 'Cookie', cursive;
`;

const SubtitleSearch = styled.p`
  color: ${props => props.theme.colors.text};
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
`;

function EntryOverviewPage() {
  return (
    <OverviewPageWrapper>
      <OrigamibirdEntryOverview src={origamibird} />
      <TextAndSearchWrapper>
        <OverviewAndSearchTitle>Journal:</OverviewAndSearchTitle>
      </TextAndSearchWrapper>
      <TextAndSearchWrapper>
        <SubtitleSearch>Search entries by date:</SubtitleSearch>
      </TextAndSearchWrapper>
      <TextAndSearchWrapper>
        <SearchBarByDate></SearchBarByDate>
        <UniversalButton>Submit</UniversalButton>
      </TextAndSearchWrapper>
      <TextAndSearchWrapper>
        <OverviewAndSearchTitle>Last Entries:</OverviewAndSearchTitle>
      </TextAndSearchWrapper>
      <EntryCard>Ich bin noch ein Platzhalter</EntryCard>
      <UniversalButton>Back</UniversalButton>
    </OverviewPageWrapper>
  );
}
export default EntryOverviewPage;
