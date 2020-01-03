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

function EntryInputForm() {
  return (
    <PageWrapperCenterSpEvenly>
      <WrapperTitleBird>
        <PageTitle>New entry:</PageTitle>
        <Origamibird src={origamibird} />
      </WrapperTitleBird>
      <FormContainer>
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
        <ButtonCheckboxContainer>
          <UniversalButton>submit</UniversalButton>
          <P>Mark as favourite: </P>
          <FavCheckbox />
          <FeatherIcon />
        </ButtonCheckboxContainer>
      </FormContainer>
    </PageWrapperCenterSpEvenly>
  );
}
export default EntryInputForm;
