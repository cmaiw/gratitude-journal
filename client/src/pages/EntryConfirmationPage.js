import React from 'react';
import styled from '@emotion/styled';
import origamibird from '../../public/images/birdlookingleft.png';
import UniversalButton from '../components/UniversalButton';
import EntryConfirmationCard from '../components/EntryConfirmationCard';
import PageWrapperCenterSpEvenly from '../components/PageWarapperCenterSpEvemly';

const ConfirmationTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-family: 'Cookie', cursive;
  margin-top: 90px;
  align-self: center;
`;

const OrigamibirdEntryConfirmation = styled.img`
  height: 65px;
  width: 85px;
  position: absolute;
  margin-top: -190px;
  margin-left: 0px;
`;

function EntryConfirmationPage() {
  return (
    <PageWrapperCenterSpEvenly>
      <OrigamibirdEntryConfirmation src={origamibird} />
      <ConfirmationTitle>Thank you!</ConfirmationTitle>
      <EntryConfirmationCard></EntryConfirmationCard>
      <UniversalButton>Back</UniversalButton>
    </PageWrapperCenterSpEvenly>
  );
}

export default EntryConfirmationPage;
