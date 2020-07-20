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

// const Label = styled.label`
//   width: auto;
//   display: flex;
//   flex-direction: row;
//   background-color: transparent;
//   color: ${props => props.theme.colors.font};
//   font-size: 14px;
//   margin: 3px;
// `;

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
  margin-top: 20px;
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

const Icon = styled.img`
  fill: white;
  height: 40px;
  width: auto;
  padding: 5px;
  margin-right: 10px;
  padding: auto;
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
  background-color: ${props => props.theme.colors.quartenary};
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.primary};
`;

function NewEntry(...props) {
  const history = useHistory();

  const [entry, setEntry] = React.useState({
    date: '',
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
      <Header>Welcome:</Header>
      <WrapperTitleBird>
        <PageTitle>New entry:</PageTitle>
        <Origamibird src="/images/birdlookingleft.png" />
      </WrapperTitleBird>
      <FormContainer onSubmit={handleSubmit} key="_id">
        <Label>
          <Icon src="/images/kalender.svg" />
          <JournalInput
            name="date"
            type="date"
            placeholder="date:"
            value={entry.date}
            onChange={handleChange}
          ></JournalInput>
        </Label>
        <Label>
          <Icon src="/images/family.svg" />
          <JournalInput
            name="social"
            type="text"
            value={entry.social}
            onChange={handleChange}
          ></JournalInput>
        </Label>
        <Label>
          <Icon src="/images/nature1.svg" />
          <JournalInput
            name="suroundings"
            value={entry.suroundings}
            onChange={handleChange}
            type="text"
          ></JournalInput>
        </Label>
        <Label>
          <Icon src="/images/food.svg" />
          <JournalInput
            name="nutrition"
            value={entry.nutrition}
            onChange={handleChange}
            type="text"
          ></JournalInput>
        </Label>
        <Label>
          <Icon src="/images/creativity.svg" />
          <JournalInput
            name="creativity"
            value={entry.creativity}
            onChange={handleChange}
            type="text"
          ></JournalInput>
        </Label>
        <Label>
          <Icon src="/images/lotus.svg" />
          <JournalInput
            name="selfloveAndCare"
            value={entry.selfloveAndCare}
            onChange={handleChange}
            type="text"
          ></JournalInput>
        </Label>
        <Label>
          <Icon src="/images/goal.svg" />
          <JournalInput
            name="goals"
            value={entry.goals}
            onChange={handleChange}
            type="text"
          ></JournalInput>
        </Label>
        <ButtonCheckboxContainer>
          <P>Mark as favourite: </P>
          <CheckboxContainer>
            <FavCheckbox
              type="checkbox"
              name="favourite"
              onChange={handleCheckboxChange}
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
