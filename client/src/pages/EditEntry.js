import React from 'react';
import styled from '@emotion/styled';
import UniversalButton from '../components/UniversalButton';
import { useParams, useHistory } from 'react-router-dom';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';
import WrapperTitleBird from '../components/WrapperTitleBird';
import PageTitle from '../components/PageTitle';
import { getOneEntry, updateOneEntry } from '../api/entryRequests';

const Origamibird = styled.img`
  height: 65px;
  width: 85px;
`;

const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid white;
  border-radius: 8px;
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.quinary};
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
`;

const Card = styled.form`
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

const QuestionLine = styled.p`
  width: 100%;
  border-radius: 8px;
  color: ${props => props.theme.colors.Primary};
  background-color: ${props => props.theme.colors.quinary};
  font-family: 'Roboto', sans-serif;
  font-weight: 250;
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

export default function EditEntry() {
  const { entryId } = useParams();
  const [entry, setEntry] = React.useState({
    date: '',
    answerQuestionOne: '',
    answerQuestionTwo: '',
    answerQuestionThree: '',
    answerQuestionFour: '',
    answerQuestionFive: '',
    answerQuestionSix: '',
    favourite: false
  });
  // eslint-disable-next-line
  const history = useHistory();

  React.useEffect(() => {
    async function getEntry() {
      const response = await getOneEntry(entryId, entry);
      setEntry(response);
    }

    getEntry();
    // eslint-disable-next-line
  }, []);

  function handleChange(event) {
    event.preventDefault();
    const value = event.target.value;
    setEntry({
      ...entry,
      [event.target.name]: value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await updateOneEntry(entryId, entry);
    history.push('/edit/confirm');
    console.log(entryId, entry);
  }

  return (
    <PageWrapperCenterSpEvenly>
      <WrapperTitleBird>
        <PageTitle>Not happy? Edit entry:</PageTitle>
        <Origamibird src="/images/birdlookingleft.png" />
      </WrapperTitleBird>
      <Card onSubmit={handleSubmit}>
        {entry && (
          <div key={entry._id}>
            <QuestionLine>date:</QuestionLine>
            <Textarea name="date" onChange={handleChange} value={entry.date} />
            <QuestionLine>What made you smile or laugh that day?</QuestionLine>
            <Textarea
              name="answerQuestionOne"
              onChange={handleChange}
              value={entry.answerQuestionOne}
            />
            <QuestionLine>What did you learn?</QuestionLine>
            <Textarea
              name="answerQuestionTwo"
              onChange={handleChange}
              value={entry.answerQuestionTwo}
            />
            <QuestionLine>Who made you smile or laugh?</QuestionLine>
            <Textarea
              name="answerQuestionThree"
              onChange={handleChange}
              value={entry.answerQuestionThree}
            />
            <QuestionLine>What were you thankful for that day?</QuestionLine>
            <Textarea
              name="answerQuestionFour"
              onChange={handleChange}
              value={entry.answerQuestionFour}
            />
            <QuestionLine>Who did you like to thank that day?</QuestionLine>
            <Textarea
              name="answerQuestionFive"
              onChange={handleChange}
              value={entry.answerQuestionFive}
            />
            <QuestionLine>What were you looking for the next day?</QuestionLine>
            <Textarea
              name="answerQuestionSix"
              onChange={handleChange}
              value={entry.answerQuestionSix}
            />
            <QuestionLine>One of your favourite entries?</QuestionLine>
            <Textarea name="favourite" onChange={handleChange} value={entry.favourite} />
            <ButtonWrapper>
              <UniversalButton type="submit">submit</UniversalButton>
            </ButtonWrapper>
          </div>
        )}
      </Card>
    </PageWrapperCenterSpEvenly>
  );
}
