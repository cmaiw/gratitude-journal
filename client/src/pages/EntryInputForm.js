import styled from '@emotion/styled';
import React from 'react';
import JournalInput from '../components/EntryInput';
import UniversalButton from '../components/UniversalButton';
import FavCheckbox from '../components/FavCheckbox';
import FeatherIcon from '../icons/FeatherIcon';
import origamibird from '../../public/images/birdlookingleft.png';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';
import WrapperTitleBird from '../components/WrapperTitleBird';
import PageTitle from '../components/PageTitle';

const Origamibird = styled.img`
  height: 65px;
  width: 85px;
  margin-top: 20px;
`;

const FormContainer = styled.main`
  height: auto;
  width: 85%;
  display: flex;
  flex-direction: column;
  padding: 4px;
  color: ${props => props.theme.colors.font};
  font-size: 14px;
  overflow: scroll;
  text-align: start;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
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
`;

function EntryInputForm(props) {
  return (
    <PageWrapperCenterSpEvenly {...props}>
      <WrapperTitleBird>
        <PageTitle>New entry:</PageTitle>
        <Origamibird src={origamibird} />
      </WrapperTitleBird>
      <FormContainer>
        <Date name="entry date" type="date" placeholder="date:"></Date>
        <Label>1. What made you smile / laugh?</Label>
        <JournalInput name="1. Whate made you smile / laugh?"></JournalInput>
        <Label>2. What did you learn?</Label>
        <JournalInput name="2. What did you learn?"></JournalInput>
        <Label>3. Who made you smile / laugh?</Label>
        <JournalInput name="Who made you smile / laugh?"></JournalInput>
        <Label>4. What are you thankful for today?</Label>
        <JournalInput name="4. What are you thankful for today?"></JournalInput>
        <Label>5. Who would you like to thank?</Label>
        <JournalInput name="5. Who would you like to thank?"></JournalInput>
        <Label>6 .What are you thankful for today?</Label>
        <JournalInput name="6 .What are you thankful for today?"></JournalInput>
        <Label>7. What are you looking for tomorrow?</Label>
        <JournalInput name="7. What are you looking for tomorrow?"></JournalInput>
        <ButtonCheckboxContainer>
          <UniversalButton>submit</UniversalButton>
          <P>Mark as favourite: </P>
          <FavCheckbox name="Is favourite?" />
          <FeatherIcon />
        </ButtonCheckboxContainer>
      </FormContainer>
    </PageWrapperCenterSpEvenly>
  );
}
export default EntryInputForm;
import styled from '@emotion/styled';
import React from 'react';
import JournalInput from '../components/EntryInput';
import UniversalButton from '../components/UniversalButton';
import FavCheckbox from '../components/FavCheckbox';
import FeatherIcon from '../icons/FeatherIcon';
import origamibird from '../../public/images/birdlookingleft.png';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';
import WrapperTitleBird from '../components/WrapperTitleBird';
import PageTitle from '../components/PageTitle';

const Origamibird = styled.img`
  height: 65px;
  width: 85px;
  margin-top: 20px;
`;

const FormContainer = styled.form`
  height: auto;
  width: 85%;
  display: flex;
  flex-direction: column;
  padding: 4px;
  color: ${props => props.theme.colors.font};
  font-size: 14px;
  overflow: scroll;
  text-align: start;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
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
`;

function EntryInputFormNewEntryByDate(props) {
  const [date, setDate] = React.useState('');
  const [answerQuestionOne, setAnswerQuestionOne] = React.useState(null);
  const [answerQuestionTwo, setAnswerQuestionTwo] = React.useState(null);
  const [answerQuestionThree, setAnswerQuestionThree] = React.useState(null);
  const [answerQuestionFour, setAnswerQuestionFour] = React.useState(null);
  const [answerQuestionFive, setAnswerQuestionFive] = React.useState(null);
  const [answerQuestionSix, setAnswerQuestionSix] = React.useState(null);
  const [answerQuestionSeven, setAnswerQuestionSeven] = React.useState(null);
  const [favourite, setFavourite] = React.useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(
      date,
      answerQuestionOne,
      answerQuestionTwo,
      answerQuestionThree,
      answerQuestionFour,
      answerQuestionFive,
      answerQuestionSix,
      setAnswerQuestionSeven,
      favourite
    );
    await fetch('http://localhost:8888/entry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        date,
        answerQuestionOne,
        answerQuestionTwo,
        answerQuestionThree,
        answerQuestionFour,
        answerQuestionFive,
        answerQuestionSix,
        answerQuestionSeven,
        favourite
      })
    });
    setDate('');
    setAnswerQuestionOne(null);
    setAnswerQuestionTwo(null);
    setAnswerQuestionThree(null);
    setAnswerQuestionFour(null);
    setAnswerQuestionFive(null);
    setAnswerQuestionSix(null);
    setAnswerQuestionSeven(null);
    setFavourite(false);
  }

  return (
    <PageWrapperCenterSpEvenly {...props}>
      <WrapperTitleBird>
        <PageTitle>New entry:</PageTitle>
        <Origamibird src={origamibird} />
      </WrapperTitleBird>
      <FormContainer onSubmit={handleSubmit}>
        <Date
          name="entry date"
          type="date"
          placeholder="date:"
          value={date}
          onChange={event => setDate(event.target.value)}
        ></Date>
        <Label>1. What made you smile / laugh?</Label>
        <JournalInput
          name="AnswerQuestionOne"
          value={answerQuestionOne}
          onChange={event => setAnswerQuestionOne(event.target.value)}
        ></JournalInput>
        <Label>2. What did you learn?</Label>
        <JournalInput
          name="AnswerQuestionTwo"
          value={answerQuestionTwo}
          onChange={event => setAnswerQuestionTwo(event.target.value)}
        ></JournalInput>
        <Label>3. Who made you smile / laugh?</Label>
        <JournalInput
          name="AnswerQuestionThree?"
          value={answerQuestionThree}
          onChange={event => setAnswerQuestionThree(event.target.value)}
        ></JournalInput>
        <Label>4. What are you thankful for today?</Label>
        <JournalInput
          name="AnswerQuestionFour?"
          value={answerQuestionFour}
          onChange={event => setAnswerQuestionFour(event.target.value)}
        ></JournalInput>
        <Label>5. Who would you like to thank?</Label>
        <JournalInput
          name="AnswerQuestionFive"
          value={answerQuestionFive}
          onChange={event => setAnswerQuestionFive(event.target.value)}
        ></JournalInput>
        <Label>6 .What are you thankful for today?</Label>
        <JournalInput
          name="AnswerQuestionSix"
          value={answerQuestionSix}
          onChange={event => setAnswerQuestionSix(event.target.value)}
        ></JournalInput>
        <Label>7. What are you looking for tomorrow?</Label>
        <JournalInput
          name="AnswerQuestionSeven"
          value={answerQuestionSeven}
          onChange={event => setAnswerQuestionSeven(event.target.value)}
        ></JournalInput>
        <ButtonCheckboxContainer>
          <P>Mark as favourite: </P>
          <FavCheckbox name="Is favourite?" onChange={event => setFavourite(event.target.value)} />
          <FeatherIcon />
          <UniversalButton onClick={event => handleSubmit(event.target.value)}>
            submit
          </UniversalButton>
        </ButtonCheckboxContainer>
      </FormContainer>
    </PageWrapperCenterSpEvenly>
  );
}
export default EntryInputFormNewEntryByDate;
