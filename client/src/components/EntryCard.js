import React from 'react';
import styled from '@emotion/styled';
import UniversalButton from './UniversalButton';
import PageWrapperCenterSpEvenly from './PageWrapperCenterSpEvenly';
import { useParams, useHistory } from 'react-router-dom';
import WrapperTitleBird from '../components/WrapperTitleBird';
import PageTitle from '../components/PageTitle';
import { getOneEntry } from '../api/entryRequests';
import Header from './Header';
import propTypes from 'prop-types';

const Origamibird = styled.img`
  height: 65px;
  width: 85px;
`;

const QuestionLabel = styled.label`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.quinary};
  justify-content: flex-start;
  align-items: center;
  margin: 4px;
  flex-wrap: wrap;
`;

const Icon = styled.img`
  height: 40px;
  padding: 5px;
  margin-right: 10px;
`;

const EntryLine = styled.div`
  display: block;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 75%;
  color: ${props => props.theme.colors.font};
  background-color: ${props => props.theme.colors.quinary};
  flex-wrap: wrap;
  text-align: flex-start;
  word-wrap: break-word;
`;

const Card = styled.main`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 57vh;
  border-radius: 30px 15px 30px 15px;
  padding: 10px;
  color: ${props => props.theme.colors.font};
  background-color: ${props => props.theme.colors.quinary};
  border-right: 6px solid ${props => props.theme.colors.primary};
  border-bottom: 6px solid ${props => props.theme.colors.primary};
  opacity: 0.85;
  overflow: scroll;
  margin-bottom: 30px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 4px;
  padding: 2px;
  justify-content: flex-start;
  align-items: space-around;
  margin-top: 30px;
`;

export default function EntryCard() {
  const { entryId } = useParams();
  const [entry, setEntry] = React.useState({});
  const history = useHistory();

  React.useEffect(() => {
    async function getEntryId() {
      const result = await getOneEntry(entryId);
      setEntry(result);
    }

    getEntryId();
    // eslint-disable-next-line
  }, []);

  function handleClickEdit() {
    history.push(`/entries/edit/${entryId}`);
  }

  function handleClickDelete() {
    history.push(`/entries/preparedelete/${entryId}`);
  }

  return (
    <PageWrapperCenterSpEvenly>
      <Header>Welcome</Header>
      <WrapperTitleBird>
        <PageTitle>What made you happy that day?</PageTitle>
        <Origamibird src="/images/birdlookingleft.png" />
      </WrapperTitleBird>
      {entry && (
        <Card key={entry._id}>
          <QuestionLabel>
            <Icon src="/images/kalender.svg" />
            <EntryLine name="date">{entry.date}</EntryLine>
          </QuestionLabel>
          <QuestionLabel>
            <Icon src="/images/write.svg" />
            <EntryLine name="title">{entry.title}</EntryLine>
          </QuestionLabel>
          <QuestionLabel>
            <Icon src="/images/family.svg" />
            <EntryLine name="social">{entry.social}</EntryLine>
          </QuestionLabel>
          <QuestionLabel>
            <Icon src="/images/nature1.svg" />
            <EntryLine name="suroundings">{entry.suroundings}</EntryLine>
          </QuestionLabel>
          <QuestionLabel>
            <Icon src="/images/food.svg" />
            <EntryLine name="nutrition">{entry.nutrition}</EntryLine>
          </QuestionLabel>
          <QuestionLabel>
            <Icon src="/images/creativity.svg" />
            <EntryLine name="creativity">{entry.creativity}</EntryLine>
          </QuestionLabel>
          <QuestionLabel>
            <Icon src="/images/lotus.svg" />
            <EntryLine name="selfloveAndCare">{entry.selfloveAndCare}</EntryLine>
          </QuestionLabel>
          <QuestionLabel>
            <Icon src="/images/goal.svg" />
            <EntryLine name="goals">{entry.goals}</EntryLine>
          </QuestionLabel>
          <QuestionLabel>
            <Icon src="/images/fav.svg" />
            <EntryLine name="favourite">{entry.favourite ? 'yes' : 'no'}</EntryLine>
          </QuestionLabel>
          <ButtonWrapper>
            <UniversalButton type="button" onClick={handleClickEdit}>
              Edit
            </UniversalButton>
            <UniversalButton type="button" onClick={handleClickDelete}>
              delete
            </UniversalButton>
          </ButtonWrapper>
        </Card>
      )}
    </PageWrapperCenterSpEvenly>
  );
}

EntryCard.propTypes = {
  id: propTypes.string,
  date: propTypes.string,
  title: propTypes.string,
  social: propTypes.string,
  suroundings: propTypes.string,
  nutrition: propTypes.string,
  creativity: propTypes.string,
  selfloveAndCare: propTypes.string,
  goals: propTypes.string,
  favourite: propTypes.bool
};
