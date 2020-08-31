import React from 'react';
import styled from '@emotion/styled';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';
import PageTitle from '../components/PageTitle';
import WrapperTitleBird from '../components/WrapperTitleBird';
import EntryOverview from '../components/EntryOverview';
import { keyframes } from '@emotion/core';
import { getAllEntries } from '../api/entryRequests';
import Header from '../components/Header';
import Pagination from '../components/Pagination';

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
  animation: ${hob};
  animation-duration: 0.9s;
  animation-timing-function: ease;
  animation-iteration-count: 5;
`;

const EntryList = styled.div`
  color: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: row;
  font-size: 16px;
  text-align: start;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  flex-wrap: wrap;
  align-self: flex-start;
  overflow: scroll;
  margin-bottom: 54px;
`;

function Entries(...props) {
  const [entries, setEntries] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  // eslint-disable-next-line no-unused-vars
  const [entriesPerPage, setEntriesPerPage] = React.useState(6);

  async function getEntryList() {
    let response = await getAllEntries();
    setEntries(response);
  }

  React.useEffect(() => {
    getEntryList();
    // eslint-disable-next-line
  }, []);

  //pagination
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;

  const sortByDate = (a, b) => {
    let aDate = a.date;
    let bDate = b.date;

    return aDate > bDate ? -1 : aDate < bDate ? 1 : 0;
  };

  let currentEntries = entries;

  // const currentEntries = entries.slice(indexOfFirstEntry, indexOfLastEntry);

  //change page func

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <PageWrapperCenterSpEvenly>
      <Header>Welcome</Header>
      <WrapperTitleBird>
        <PageTitle>Journal:</PageTitle>
        <Origamibird src="/images/birdlookingleft.png" />
      </WrapperTitleBird>
      <EntryList {...props}>
        {currentEntries &&
          currentEntries
            .sort(sortByDate)
            .slice(indexOfFirstEntry, indexOfLastEntry)
            .map(currentEntry => (
              <EntryOverview
                key={currentEntry._id}
                id={currentEntry._id}
                date={currentEntry.date}
                title={currentEntry.title}
                social={currentEntry.social}
                suroundings={currentEntry.suroundings}
                nutrition={currentEntry.nutrition}
                creativity={currentEntry.creativity}
                selfloveAndCare={currentEntry.selfloveAndCare}
                goals={currentEntry.goals}
                favourite={currentEntry.favourite}
              />
            ))}
        <Pagination
          entriesPerPage={entriesPerPage}
          totalEntries={entries.length}
          paginate={paginate}
        />
      </EntryList>
    </PageWrapperCenterSpEvenly>
  );
}
export default Entries;
