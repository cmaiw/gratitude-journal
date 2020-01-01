import styled from '@emotion/styled';
import React from 'react';
import JournalInput from '../components/EntryInput';
import UniversalButton from '../components/UniversalButton';
import FavCheckbox from '../components/FavCheckbox';
import FeatherIcon from '../icons/FeatherIcon';
import backgroundsplashes from '../../public/images/backgroundsplashes1.png';
import origamibird from '../../public/images/birdlookingleft.png';

const OrigamibirdEntryForm = styled.img`
  height: 75px;
  width: 95px;
  position: absolute;
  margin-top: 0px;
  margin-left: 200px;
`;

const BackgroundWithSplashesEntryInputForm = styled.div`
  align-self: flex-start;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-image: url(${backgroundsplashes});
  background-size: cover;
`;

const EntryInputFormWrapper = styled.div`
width: 100%;
height: 87%;
display: flex:
flex-direction: column;
justify-content: center;
align-items: center;
margin: auto;
`;

const FormContainer = styled.main`
  height: auto;
  width: 94%;
  display: block;
  margin: 12px;
  padding: 4px;
  color: ${props => props.theme.colors.font};
  font-size: 14px;
  overflow: scroll;
  text-align: start;
  justify-content: space-evenly;
  margin: auto;
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

const NewEntryHeading = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-family: 'Cookie', cursive;
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

const NaviContainer = styled.div`
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

function EntryInputForm() {
  return (
    <BackgroundWithSplashesEntryInputForm>
      <EntryInputFormWrapper>
        <OrigamibirdEntryForm src={origamibird} />
        <FormContainer>
          <NewEntryHeading>New Entry:</NewEntryHeading>
          <Date type="date" placeholder="date:"></Date>
          <Label>What made you smile / laugh?</Label>
          <JournalInput></JournalInput>
          <Label>What did you learn?</Label>

          <JournalInput></JournalInput>

          <Label>Who made you smile / laugh?</Label>
          <JournalInput></JournalInput>
          <Label>What are you thankful for today?</Label>
          <JournalInput></JournalInput>
          <Label>Who would you like to thank?</Label>
          <JournalInput></JournalInput>
          <Label>What are you thankful for today?</Label>
          <JournalInput></JournalInput>
          <Label>What are you looking for tomorrow?</Label>
          <JournalInput></JournalInput>
          <NaviContainer>
            <UniversalButton>submit</UniversalButton>
            <P>Mark as favourite: </P>
            <FavCheckbox />
            <FeatherIcon />
          </NaviContainer>
        </FormContainer>
      </EntryInputFormWrapper>
    </BackgroundWithSplashesEntryInputForm>
  );
}
export default EntryInputForm;
