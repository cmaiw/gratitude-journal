import React from 'react';
import styled from '@emotion/styled';
import UniversalButton from './UniversalButton';
import PageWrapperCenterSpEvenly from './PageWrapperCenterSpEvenly';
import { useParams, useHistory } from 'react-router-dom';
import WrapperTitleBird from '../components/WrapperTitleBird';
import PageTitle from '../components/PageTitle';

const Origamibird = styled.img`
  height: 65px;
  width: 85px;
`;

const QuestionLine = styled.p`
  width: 100%;
  border: 1px solid white;
  border-radius: 8px;
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.quinary};
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
`;

const EntryLine = styled.p`
  width: 100%;
  border: 1px solid white;
  border-radius: 8px;
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.quinary};
  font-family: 'Roboto', sans-serif;
`;

const Card = styled.main`
  width: 85%;
  height: 500px;
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
  justify-content: flex-start;
  align-items: space-around;
  margin-top: 8px;
`;

export default function EntryCard() {
  const { entryId } = useParams();
  const [details, setDetails] = React.useState(null);
  const history = useHistory();

  React.useEffect(() => {
    async function getEntryId() {
      const response = await fetch(`/api/entries/${entryId}`);
      const data = await response.json();
      setDetails(data);
    }

    getEntryId();
  }, [entryId]);

  function handleClick() {
    history.push('/:editId');
  }

  return (
    <PageWrapperCenterSpEvenly>
      <WrapperTitleBird>
        <PageTitle>What made you happy that day?</PageTitle>
        <Origamibird src="/images/birdlookingleft.png" />
      </WrapperTitleBird>
      {details && (
        <Card key={details.id}>
          <QuestionLine>date:</QuestionLine>
          <EntryLine name="date">{details.date}</EntryLine>
          <QuestionLine>1. What made you smile or laugh that day?</QuestionLine>
          <EntryLine name="answerQuestionOne">{details.answerQuestionOne}</EntryLine>
          <QuestionLine>2. What did you learn?</QuestionLine>
          <EntryLine name="answerQuestionTwo">{details.answerQuestionTwo}</EntryLine>
          <QuestionLine>3. Who made you smile or laugh?</QuestionLine>
          <EntryLine name="answerQuestionThree">{details.answerQuestionThree}</EntryLine>
          <QuestionLine>4. What were you thankful for that day?</QuestionLine>
          <EntryLine name="answerQuestionFour">{details.answerQuestionFour}</EntryLine>
          <QuestionLine>5. Who did you like to thank that day?</QuestionLine>
          <EntryLine name="answerQuestionFive">{details.answerQuestionFive}</EntryLine>
          <QuestionLine>6. What were you looking for the next day?</QuestionLine>
          <EntryLine name="answerQuestionSix">{details.answerQuestionSix}</EntryLine>
          <QuestionLine>One of your favourite entries?</QuestionLine>
          <EntryLine name="favourite">{details.favourite}</EntryLine>
          <ButtonWrapper>
            <UniversalButton type="button" onClick={handleClick}>
              Edit
            </UniversalButton>
          </ButtonWrapper>
        </Card>
      )}
    </PageWrapperCenterSpEvenly>
  );
}

