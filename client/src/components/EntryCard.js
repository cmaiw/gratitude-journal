import React from 'react';
import styled from '@emotion/styled';
import UniversalButton from './UniversalButton';
import PageWrapperCenterSpEvenly from './PageWrapperCenterSpEvenly';
import { useParams, useHistory } from 'react-router-dom';
import WrapperTitleBird from '../components/WrapperTitleBird';
import PageTitle from '../components/PageTitle';
import { getOneEntry } from '../api/entryRequests';

const Origamibird = styled.img`
  height: 65px;
  width: 85px;
`;

const QuestionLine = styled.p`
  width: 100%;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.quinary};
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
`;

const EntryLine = styled.p`
  width: 100%;
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.quinary};
  font-family: 'Roboto', sans-serif;
`;

const Card = styled.main`
  width: 85%;
  height: 400px;
  border-radius: 8px;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.quinary};
  opacity: 0.75;
  margin: 15px;
  overflow: scroll;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 4px;
  padding: 2px;
  justify-content: flex-start;
  align-items: space-around;
  margin-top: 8px;
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
      <WrapperTitleBird>
        <PageTitle>What made you happy that day?</PageTitle>
        <Origamibird src="/images/birdlookingleft.png" />
      </WrapperTitleBird>
      {entry && (
        <Card key={entry._id}>
          <QuestionLine>date:</QuestionLine>
          <EntryLine name="date">{entry.date}</EntryLine>
          <QuestionLine>1. What made you smile or laugh that day?</QuestionLine>
          <EntryLine name="answerQuestionOne">{entry.answerQuestionOne}</EntryLine>
          <QuestionLine>2. What did you learn?</QuestionLine>
          <EntryLine name="answerQuestionTwo">{entry.answerQuestionTwo}</EntryLine>
          <QuestionLine>3. Who made you smile or laugh?</QuestionLine>
          <EntryLine name="answerQuestionThree">{entry.answerQuestionThree}</EntryLine>
          <QuestionLine>4. What were you thankful for that day?</QuestionLine>
          <EntryLine name="answerQuestionFour">{entry.answerQuestionFour}</EntryLine>
          <QuestionLine>5. Who did you like to thank that day?</QuestionLine>
          <EntryLine name="answerQuestionFive">{entry.answerQuestionFive}</EntryLine>
          <QuestionLine>6. What were you looking for the next day?</QuestionLine>
          <EntryLine name="answerQuestionSix">{entry.answerQuestionSix}</EntryLine>
          <QuestionLine>One of your favourite entries?</QuestionLine>
          <EntryLine name="favourite">{entry.favourite}</EntryLine>
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
