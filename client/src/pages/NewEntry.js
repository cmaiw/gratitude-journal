import styled from '@emotion/styled';
import React from 'react';
import JournalInput from '../components/JournalInput';
import UniversalButton from '../components/UniversalButton';
import FavCheckbox from '../components/FavCheckbox';
import FeatherIcon from '../icons/FeatherIcon';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';
import WrapperTitleBird from '../components/WrapperTitleBird';
import PageTitle from '../components/PageTitle';
import { saveEntriesToDB } from '../api/entryRequests';
import { useHistory } from 'react-router-dom';

const Origamibird = styled.img`
  height: 65px;
  width: 85px;
  margin-top: 20px;
`;

const FormContainer = styled.form`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 4px;
  color: ${props => props.theme.colors.font};
  font-size: 14px;
  overflow: scroll;
  text-align: start;
  justify-content: flex-start;
  align-items: flex-start;
  margin: auto;
  margin-top: 15px;
`;

const Label = styled.label`
  width: auto;
  display: flex;
  flex-direction: row;
  background-color: transparent;
  color: ${props => props.theme.colors.font};
  font-size: 14px;
  margin: 3px;
`;

const P = styled.p`
  color: ${props => props.theme.colors.font};
`;

const ButtonCheckboxContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  text-align: baseline;
  outline: none;
  border: none;
  box-shadow: none;
  padding: 5px;
  margin-top: 42px;
  margin-bottom: 42px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  background-color: ${props => props.theme.colors.quinary};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
`;

function NewEntry(...props) {
  let history = useHistory();
  const [entry, setEntry] = React.useState({
    date: '',
    answerQuestionOne: '',
    answerQuestionTwo: '',
    answerQuestionThree: '',
    answerQuestionFour: '',
    answerQuestionFive: '',
    answerQuestionSix: '',
    answerQuestionSeven: '',
    favourite: false
  });

  function onChange(event) {
    const value = event.target.value;
    setEntry({
      ...entry,
      [event.target.name]: value
    });
  }

  function onCheckboxChange(event) {
    const checked = event.target.checked;
    setEntry({
      ...entry,
      [event.target.name]: checked
    });
  }

  function handleSubmit() {
    saveEntriesToDB(entry);
    history.push('/confirmation');
  }

  return (
    <PageWrapperCenterSpEvenly {...props}>
      <WrapperTitleBird>
        <PageTitle>New entry:</PageTitle>
        <Origamibird src="/images/birdlookingleft.png" />
      </WrapperTitleBird>
      <FormContainer onSubmit={handleSubmit}>
        <JournalInput
          name="date"
          type="date"
          placeholder="date:"
          value={entry.date}
          onChange={onChange}
        ></JournalInput>
        <Label>1. What made you smile / laugh?</Label>
        <JournalInput
          name="answerQuestionOne"
          type="text"
          value={entry.answerQuestionOne}
          onChange={onChange}
        ></JournalInput>
        <Label>2. What did you learn?</Label>
        <JournalInput
          name="answerQuestionTwo"
          value={entry.answerQuestionTwo}
          onChange={onChange}
          type="text"
        ></JournalInput>
        <Label>3. Who made you smile / laugh?</Label>
        <JournalInput
          name="answerQuestionThree"
          value={entry.answerQuestionThree}
          onChange={onChange}
          type="text"
        ></JournalInput>
        <Label>4. What are you thankful for today?</Label>
        <JournalInput
          name="answerQuestionFour"
          value={entry.AnswerQuestionFour}
          onChange={onChange}
          type="text"
        ></JournalInput>
        <Label>5. Who would you like to thank?</Label>
        <JournalInput
          name="answerQuestionFive"
          value={entry.answerQuestionFive}
          onChange={onChange}
          type="text"
        ></JournalInput>
        <Label>6 .What are you looking for tomorrow?</Label>
        <JournalInput
          name="answerQuestionSix"
          value={entry.answerQuestionSix}
          onChange={onChange}
          type="text"
        ></JournalInput>
        <ButtonCheckboxContainer>
          <P>Mark as favourite: </P>
          <CheckboxContainer>
            <FavCheckbox
              type="checkbox"
              name="favourite"
              onChange={onCheckboxChange}
              value={entry.favourite}
            />
          </CheckboxContainer>
          <FeatherIcon />
          <UniversalButton type="submit">submit</UniversalButton>
        </ButtonCheckboxContainer>
      </FormContainer>
    </PageWrapperCenterSpEvenly>
  );
}

export default NewEntry;
