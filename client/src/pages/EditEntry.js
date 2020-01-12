import React from 'react';
import styled from '@emotion/styled';
import UniversalButton from '../components/UniversalButton';
import { useParams, useHistory } from 'react-router-dom';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';

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
    setUpdate({
      ...update,
      [event.target.name]: value
    });
  }

  function handleSubmit() {
    saveEditedEntriesToDB(update);
    history.push('/entries');
  }

  return (
    <PageWrapperCenterSpEvenly>
      <Card onSubmit={handleSubmit}>
        {edit && (
          <div key={edit.id}>
            <h2>Welcome! Edit your entry!</h2>
            <h3>date:</h3>
            <Textarea type="date" name="date" onChange={onChange} value={update.date}>
              {edit.date}
            </Textarea>
            <h3>What made you smile or laugh that day?</h3>
            <Textarea name="answerQuestionOne" onChange={onChange} value={update.answerQuestionOne}>
              {edit.answerQuestionOne}
            </Textarea>
            <h3>What did you learn?</h3>
            <Textarea name="answerQuestionTwo" onChange={onChange} value={update.answerQuestionTwo}>
              {edit.answerQuestionTwo}
            </Textarea>
            <h3>Who made you smile or laugh?</h3>
            <Textarea
              name="answerQuestionThree"
              onChange={onChange}
              value={update.answerQuestionThree}
            >
              {edit.answerQuestionThree}
            </Textarea>
            <h3>What were you thankful for that day?</h3>
            <Textarea
              name="answerQuestionFour"
              onChange={onChange}
              value={update.answerQuestionFour}
            >
              {edit.answerQuestionFour}
            </Textarea>
            <h3>Who did you like to thank that day?</h3>
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
