import styled from '@emotion/styled';
import React from 'react';
import JournalInput from '../components/EntryInput';
import UniversalButton from '../components/UniversalButton';
import FavCheckbox from '../components/FavCheckbox';
import FeatherIcon from '../icons/FeatherIcon';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';
import WrapperTitleBird from '../components/WrapperTitleBird';
import PageTitle from '../components/PageTitle';
import { saveEntriesToDB } from '../api/entryRequests';

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

const Date = styled.input`
  all: unset;
  height: 22px;
  width: 100%;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.secondary};
  opacity: 0.35;
  outline: none;
  cursor: text;
  border: none;
  border-radius: 4px;
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

function EntryInputFormNewEntryByDate() {
  const [entry, setEntry] = React.useState({
    date: '',
    answerQuestionOne: '',
    answerQuestionTwo: '',
    answerQuestionThree: '',
    answerQuestionFour: '',
    answerQuestionFive: '',
    answerQuestionSix: '',
    answerQuestionSeven: '',
    favourite: ''
  });

  function onChange(event) {
    const value = event.target.value;
    setEntry({
      ...entry,
      [event.target.name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    saveEntriesToDB(entry);
    setEntry({
      date: '',
      answerQuestionOne: '',
      answerQuestionTwo: '',
      answerQuestionThree: '',
      answerQuestionFour: '',
      answerQuestionFive: '',
      answerQuestionSix: '',
      answerQuestionSeven: '',
      favourite: ''
    });
  }

  return (
    <PageWrapperCenterSpEvenly>
      <WrapperTitleBird>
        <PageTitle>New entry:</PageTitle>
        <Origamibird src="/images/birdlookingleft.png" />
      </WrapperTitleBird>
      <FormContainer onSubmit={handleSubmit}>
        <Date
          name="date"
          type="date"
          placeholder="date:"
          value={entry.date}
          onChange={onChange}
        ></Date>
        <Label>1. What made you smile / laugh?</Label>
        <JournalInput
          name="answerQuestionOne"
          value={entry.answerQuestionOne}
          onChange={onChange}
        ></JournalInput>
        <Label>2. What did you learn?</Label>
        <JournalInput
          name="answerQuestionTwo"
          value={entry.answerQuestionTwo}
          onChange={onChange}
        ></JournalInput>
        <Label>3. Who made you smile / laugh?</Label>
        <JournalInput
          name="answerQuestionThree"
          value={entry.answerQuestionThree}
          onChange={onChange}
        ></JournalInput>
        <Label>4. What are you thankful for today?</Label>
        <JournalInput
          name="answerQuestionFour?"
          value={entry.AnswerQuestionFour}
          onChange={onChange}
        ></JournalInput>
        <Label>5. Who would you like to thank?</Label>
        <JournalInput
          name="answerQuestionFive"
          value={entry.answerQuestionFive}
          onChange={onChange}
        ></JournalInput>
        <Label>6 .What are you thankful for today?</Label>
        <JournalInput
          name="answerQuestionSix"
          value={entry.answerQuestionSix}
          onChange={onChange}
        ></JournalInput>
        <Label>7. What are you looking for tomorrow?</Label>
        <JournalInput
          name="answerQuestionSeven"
          value={entry.answerQuestionSeven}
          onChange={onChange}
        ></JournalInput>
        <ButtonCheckboxContainer>
          <P>Mark as favourite: </P>
          <FavCheckbox name="Isfavourite?" onChange={onChange} value={entry.Isfavourite} />
          <FeatherIcon />
          <UniversalButton>submit</UniversalButton>
        </ButtonCheckboxContainer>
      </FormContainer>
    </PageWrapperCenterSpEvenly>
  );
}

export default EntryInputFormNewEntryByDate;
