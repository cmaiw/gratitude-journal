import styled from '@emotion/styled';
import React from 'react';
import JournalInput from '../components/EntryInput';
import UniversalButton from '../components/UniversalButton';
import FavCheckbox from '../components/FavCheckbox';
import FeatherIcon from '../icons/FeatherIcon';

const PageWrapper = styled.div`
display: flex:
flex-direction: column;
justify-content: center;
align-items: center;
`;

const FormContainer = styled.main`
  height: auto;
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 8px;
  padding: 4px;
  color: ${props => props.theme.colors.font};
  font-size: 14px;
  overflow: scroll;
  align-self: center;
`;

const Label = styled.label`
  width: 280px;
  display: flex;
  flex-direction: row;
  background-color: transparent;
  color: ${props => props.theme.colors.font};
  font-size: 14px;
  margin: 3px;
  text-align: flex-start;
`;

const NewEntryHeading = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-family: 'Cookie', cursive;
`;

const Date = styled.input`
  all: unset;
  height: 20px;
  width: 280px;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.secondary};
  opacity: 0.75;
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
  width: 280px;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  font-size: 14px;
  text-align: baseline;
  outline: none;
  border: none;
  box-shadow: none;
  padding: 5px;
`;

function EntryInputForm() {
  return (
    <PageWrapper>
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
          <P>Mark as favourite:</P>
          <FavCheckbox />
          <FeatherIcon />
        </NaviContainer>
      </FormContainer>
    </PageWrapper>
  );
}
export default EntryInputForm;
