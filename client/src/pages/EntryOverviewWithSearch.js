import React from 'react';
import styled from '@emotion/styled';
import UniversalButton from '../components/UniversalButton';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';
import PageTitle from '../components/PageTitle';
import WrapperTitleBird from '../components/WrapperTitleBird';
import EntryOverview from '../components/EntryOverview';

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
  height: 100%;
  width: 85%;
  text-align: flex-start;
  overflow: scroll;
`;

const SubtitleSearch = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 14px;
  margin: 0px;
`;

const SearchBarByDate = styled.input`
  all: unset;
  height: 22px;
  width: 85%;
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

const EntryList = styled.div`
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.secondary};
  opacity: 0.35;
  min-height: 22px;
  width: 85%;
  margin: 10px;
  font-size: 14px;
  text-align: start;
  overflow: scroll;
  padding: 5px;
  border-radius: 8px;
`;

function EntryOverviewWithSearch() {
  return (
    <PageWrapperCenterSpEvenly>
      <WrapperTitleBird>
        <PageTitle>Journal:</PageTitle>
        <Origamibird src="/images/birdlookingleft.png" />
      </WrapperTitleBird>
      <TextAndSearchWrapper>
        <SubtitleSearch>Search entries by date:</SubtitleSearch>
      </TextAndSearchWrapper>
      <TextAndSearchWrapper>
        <SearchBarByDate type="date" name="entry date" placeholder="date"></SearchBarByDate>
        <UniversalButton>Submit</UniversalButton>
      </TextAndSearchWrapper>
      <TextAndSearchWrapper>
        <PageTitle>Entries:</PageTitle>
      </TextAndSearchWrapper>
      <EntryList>
        <EntryOverview></EntryOverview>
      </EntryList>
      <UniversalButton>Back</UniversalButton>
    </PageWrapperCenterSpEvenly>
  );
}
export default EntryOverviewWithSearch;
