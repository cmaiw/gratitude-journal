import styled from '@emotion/styled';
import React from 'react';
import JournalInput from '../components/JournalInput';
import UniversalButton from '../components/UniversalButton';
import FavCheckbox from '../components/FavCheckbox';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';
import WrapperTitleBird from '../components/WrapperTitleBird';
import PageTitle from '../components/PageTitle';
import { saveEntriesToDB } from '../api/entryRequests';
import { useHistory } from 'react-router-dom';
import { keyframes } from '@emotion/core';
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
  margin-top: 10px;
  animation: ${hob};
  animation-duration: 0.9s;
  animation-timing-function: ease;
  animation-iteration-count: 5;
`;

const FormContainer = styled.form`
  min-width: 320px;
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: ${props => props.theme.colors.font};
  font-size: 14px;
  overflow: scroll;
  text-align: start;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 15px;
  background-color: ${props => props.theme.colors.background};
  opacity: 0.9;
  border-radius: 12px;
  margin-bottom: 60px;
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

const CheckboxContainer = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  background-color: ${props => props.theme.colors.quartenary};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid ${props => props.theme.colors.primary};
`;

const Icon = styled.img`
  height: 40px;
  width: auto;
  padding: 5px;
  margin-right: 10px;
  padding: auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
  background-color: ${props => props.theme.colors.quinary};
  border-radius: 8px;
`;

function NewEntry(...props) {
  const history = useHistory();

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January = 0!
  let yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;

  const [entry, setEntry] = React.useState({
    date: today,
    title: '',
    social: '',
    suroundings: '',
    nutrition: '',
    creativity: '',
    selfLoveandCare: '',
    goals: '',
    favourite: false
  });

  function handleChange(event) {
    const value = event.target.value;
    setEntry({
      ...entry,
      [event.target.name]: value
    });
  }
  function handleCheckboxChange(event) {
    const checked = event.target.checked;
    setEntry({
      ...entry,
      [event.target.name]: checked
    });
  }

  function handleSubmit() {
    saveEntriesToDB(entry);
    history.push('/submit/confirm');
  }

  return (
    <PageWrapperCenterSpEvenly {...props}>
      <Header>Welcome</Header>
      <WrapperTitleBird>
        <PageTitle id="page-title">New entry:</PageTitle>
        <Origamibird src="/images/birdlookingleft.png" />
      </WrapperTitleBird>
      <FormContainer id="submit-form-new" onSubmit={handleSubmit} key="_id">
        <Label>
          <Icon src="/images/kalender.svg" />
          <JournalInput
            required
            id="date-input"
            name="date"
            type="text"
            placeholder={today}
            value={entry.date}
            onChange={handleChange}
            onfocus="(this.type='date')"
          ></JournalInput>
        </Label>
        <Label>
          <Icon src="/images/write.svg" />
          <JournalInput
            required
            id="title-input"
            name="title"
            type="text"
            placeholder="Your title / tags of the day"
            value={entry.title}
            onChange={handleChange}
          ></JournalInput>
        </Label>
        <Label>
          <Icon src="/images/family.svg" />
          <JournalInput
            id="social-input"
            name="social"
            type="text"
            placeholder="Awesome people"
            value={entry.social}
            onChange={handleChange}
          ></JournalInput>
        </Label>
        <Label>
          <Icon src="/images/nature1.svg" />
          <JournalInput
            id="suroundings-input"
            name="suroundings"
            placeholder="Weather, nature and suroundings"
            value={entry.suroundings}
            onChange={handleChange}
            type="text"
          ></JournalInput>
        </Label>
        <Label>
          <Icon src="/images/food.svg" />
          <JournalInput
            id="nutrition-input"
            name="nutrition"
            placeholder="Nutrition and the joy of food / cooking"
            value={entry.nutrition}
            onChange={handleChange}
            type="text"
          ></JournalInput>
        </Label>
        <Label>
          <Icon src="/images/creativity.svg" />
          <JournalInput
            id="creativity-input"
            name="creativity"
            placeholder="Learning, tasks, creativity, work"
            value={entry.creativity}
            onChange={handleChange}
            type="text"
          ></JournalInput>
        </Label>
        <Label>
          <Icon src="/images/lotus.svg" />
          <JournalInput
            id="selfloveAndCare-input"
            name="selfloveAndCare"
            placeholder="selflove and selfcare"
            value={entry.selfloveAndCare}
            onChange={handleChange}
            type="text"
          ></JournalInput>
        </Label>
        <Label>
          <Icon src="/images/goal.svg" />
          <JournalInput
            id="goals-input"
            name="goals"
            placeholder="your goals"
            value={entry.goals}
            onChange={handleChange}
            type="text"
          ></JournalInput>
        </Label>
        <ButtonCheckboxContainer>
          <P>Mark as favourite: </P>
          <CheckboxContainer>
            <FavCheckbox
              id="favCheckbox"
              type="checkbox"
              name="favourite"
              onChange={handleCheckboxChange}
              value={entry.favourite}
              {...props}
            />
          </CheckboxContainer>
          <UniversalButton id="sub-btn-new" type="submit">
            submit
          </UniversalButton>
        </ButtonCheckboxContainer>
      </FormContainer>
    </PageWrapperCenterSpEvenly>
  );
}
export default NewEntry;
