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

const SearchForm = styled.form`
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: space-evenly;
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
  width: 85%;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.secondary};
  opacity: 0.75;
  outline: none;
  cursor: text;
  border: none;
  border-radius: 4px;
  margin-top: none;
  margin-bottom: none;
  margin-right: 5px;
`;

const EntryList = styled.div`
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.quinary};
  opacity: 0.85;
  max-height: 380px;
  width: 90%;
  margin: 10px;
  font-size: 14px;
  text-align: start;
  overflow: scroll;
  padding: 20px;
  border-radius: 8px;
`;

function Entries(...props) {
  const [entries, setEntries] = React.useState([]);
  const [filter, setFilter] = React.useState('');
  const [query, setQuery] = React.useState('');

  async function getAllEntries() {
    const response = await fetch(`/api/entries/?q=${query}`);
    const pastEntries = await response.json();
    console.log(pastEntries);
    setEntries(pastEntries);
  }

  React.useEffect(() => {
    getAllEntries();
  }, [query]);

  async function getFilteredEntries() {
    const selectedEntries = await getAllEntries();
    console.log(selectedEntries);
    setEntries(selectedEntries);
  }

  const updateSearch = e => {
    setFilter(e.target.value);
    console.log(filter);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(filter);
    setFilter('');
  };

  return (
    <PageWrapperCenterSpEvenly>
      <WrapperTitleBird>
        <PageTitle>Journal:</PageTitle>
        <Origamibird src="/images/birdlookingleft.png" />
      </WrapperTitleBird>
      <SearchForm onSubmit={handleSubmit}>
        <SubtitleSearch>Search entries:</SubtitleSearch>
        <SearchBarByDate
          type="text"
          name="search"
          placeholder="Search"
          value={filter}
          onChange={updateSearch}
        ></SearchBarByDate>
        <UniversalButton type="submit">Submit</UniversalButton>
      </SearchForm>
      <PageTitle>Entries:</PageTitle>
      <EntryList {...props}>
        {entries &&
          entries.map(entries => (
            <EntryOverview
              key={entries.id}
              id={entries.id}
              date={entries.date}
              answerQuestionOne={entries.answerQuestionOne}
              answerQuestionThree={entries.answerQuestionThree}
              answerQuestionFour={entries.answerQuestionFour}
              answerQuestionFive={entries.answerQuestionFive}
              answerQuestionSix={entries.answerQuestionSix}
              favourite={entries.favourite}
            />
          ))}
      </EntryList>
    </PageWrapperCenterSpEvenly>
  );
}
export default Entries;
