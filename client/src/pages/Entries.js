import React from 'react';
import styled from '@emotion/styled';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';
import PageTitle from '../components/PageTitle';
import WrapperTitleBird from '../components/WrapperTitleBird';
import EntryOverview from '../components/EntryOverview';
import { keyframes } from '@emotion/core';
import { getAllEntries } from '../api/entryRequests';
import Header from '../components/Header';

const hob = keyframes`
        0%   { transform: translateY(0); }
        30%  { transform: translateY(-5px); }
        50%  { transform: translateY(5px); }
        100% { transform: translateY(0); }
    }
`;

const Origamibird = styled.img`
  height: 45px;
  width: 65px;
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
  overflow: scroll;
  padding: 20px;
  border-radius: 8px;
  width: 99%;
  flex-wrap: wrap;
`;

function Entries(...props) {
  const [entries, setEntries] = React.useState([]);

  async function getEntryList() {
    let response = await getAllEntries();
    setEntries(response);
  }

  React.useEffect(() => {
    getEntryList();
    // eslint-disable-next-line
  }, []);

  return (
    <PageWrapperCenterSpEvenly>
      <Header>Welcome:</Header>
      <WrapperTitleBird>
        <PageTitle>Journal:</PageTitle>
        <Origamibird src="/images/birdlookingleft.png" />
      </WrapperTitleBird>
      <EntryList {...props}>
        {entries &&
          entries.map(entries => (
            <EntryOverview
              key={entries._id}
              id={entries._id}
              date={entries.date}
              social={entries.social}
              suroundings={entries.suroundings}
              nutrition={entries.nutrition}
              creativity={entries.creativity}
              selfloveAndCare={entries.selfloveAndCare}
              goals={entries.goals}
              favourite={entries.favourite}
            />
          ))}
      </EntryList>
    </PageWrapperCenterSpEvenly>
  );
}
export default Entries;
