import React from 'react';
import styled from '@emotion/styled';
import UniversalButton from '../components/UniversalButton';
import EntryConfirmationCard from '../components/EntryConfirmationCard';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';
import WrapperTitleBird from '../components/WrapperTitleBird';
import PageTitle from '../components/PageTitle';

const Origamibird = styled.img`
  height: 65px;
  width: 85px;
`;

const ButtonContainer = styled.div`
  margin-bottom: 44px;
`;

function EntryConfirmationPage(props) {
  return (
    <PageWrapperCenterSpEvenly {...props}>
      <WrapperTitleBird>
        <PageTitle>Thank you!</PageTitle>
        <Origamibird src="/images/birdlookingleft.png" />
      </WrapperTitleBird>
      <EntryConfirmationCard></EntryConfirmationCard>
      <ButtonContainer>
        <UniversalButton>Back</UniversalButton>
      </ButtonContainer>
    </PageWrapperCenterSpEvenly>
  );
}

export default EntryConfirmationPage;
