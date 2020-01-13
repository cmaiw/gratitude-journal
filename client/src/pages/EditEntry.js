import React from 'react';
import styled from '@emotion/styled';
import UniversalButton from '../components/UniversalButton';
import { useParams, useHistory } from 'react-router-dom';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';
import WrapperTitleBird from '../components/WrapperTitleBird';
import PageTitle from '../components/PageTitle';

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
`;

const Card = styled.form`
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

const QuestionLine = styled.p`
  width: 100%;
  border-radius: 8px;
  color: ${props => props.theme.colors.Primary};
  background-color: ${props => props.theme.colors.quinary};
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
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

function EditEntry() {
  const [edit, setEdit] = React.useState([]);
  const [update, setUpdate] = React.useState();
  const { editId } = useParams();
  const history = useHistory();

  async function saveEditedEntriesToDB(value) {
    setEdit();
    await fetch(`/api/entries/${editId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: value
      })
    });
  }

  function onChange(event) {
    const value = event.target.value;
    setEdit({
      ...edit,
      [event.target.name]: value
    });
  }

  function handleSubmit() {
    saveEditedEntriesToDB(update);
    history.push('/:entryId');
  }

  return (
    <PageWrapperCenterSpEvenly>
      <WrapperTitleBird>
        <PageTitle>Something wrong with your happiness?</PageTitle>
        <Origamibird src="/images/birdlookingleft.png" />
      </WrapperTitleBird>
      <Card onSubmit={handleSubmit}>
        {update && (
          <div key={update.id}>
            <QuestionLine>date:</QuestionLine>
            <Textarea name="date" onChange={onChange} value={update.date}>
              {update.date}
            </Textarea>
            <QuestionLine>What made you smile or laugh that day?</QuestionLine>
            <Textarea name="answerQuestionOne" onChange={onChange} value={update.answerQuestionOne}>
              {edit.answerQuestionOne}
            </Textarea>
            <QuestionLine>What did you learn?</QuestionLine>
            <Textarea name="answerQuestionTwo" onChange={onChange} value={update.answerQuestionTwo}>
              {edit.answerQuestionTwo}
            </Textarea>
            <QuestionLine>Who made you smile or laugh?</QuestionLine>
            <Textarea
              name="answerQuestionThree"
              onChange={onChange}
              value={update.answerQuestionThree}
            >
              {edit.answerQuestionThree}
            </Textarea>
            <QuestionLine>What were you thankful for that day?</QuestionLine>
            <Textarea
              name="answerQuestionFour"
              onChange={onChange}
              value={update.answerQuestionFour}
            >
              {edit.answerQuestionFour}
            </Textarea>
            <QuestionLine>Who did you like to thank that day?</QuestionLine>
            <Textarea
              name="answerQuestionFive"
              onChange={onChange}
              value={update.answerQuestionFive}
            >
              {edit.answerQuestionFive}
            </Textarea>
            <h3>What were you looking for the next day?</h3>
            <Textarea name="answerQuestionSix" onChange={onChange} value={update.answerQuestionSix}>
              {edit.answerQuestionSix}
            </Textarea>
            <h3>One of your favourite entries?</h3>
            <Textarea name="favourite" onChange={onChange} value={update.favourite}>
              {edit.favourite}
            </Textarea>
            <ButtonWrapper>
              <UniversalButton type="submit">submit</UniversalButton>
              <UniversalButton>delete</UniversalButton>
            </ButtonWrapper>
          </div>
        )}
      </Card>
    </PageWrapperCenterSpEvenly>
  );
}
export default EditEntry;