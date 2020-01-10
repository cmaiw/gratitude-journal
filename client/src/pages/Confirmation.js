import React from 'react';
import styled from '@emotion/styled';
import UniversalButton from '../components/UniversalButton';
import ConfirmationCard from '../components/ConfirmationCard';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';
import WrapperTitleBird from '../components/WrapperTitleBird';
import PageTitle from '../components/PageTitle';

const Origamibird = styled.img`
  height: 65px;
  width: 85px;
`;

const ButtonContainer = styled.div`
  margin-bottom: 34px;
`;

function Confirmation() {
  function onClick() {
    window.location.href = '/new';
  }
  return (
    <PageWrapperCenterSpEvenly>
      <WrapperTitleBird>
        <PageTitle>Thank you!</PageTitle>
        <Origamibird src="/images/birdlookingleft.png" />
      </WrapperTitleBird>
      <ConfirmationCard></ConfirmationCard>
      <ButtonContainer>
        <UniversalButton onClick={onClick}>Back</UniversalButton>
      </ButtonContainer>
    </PageWrapperCenterSpEvenly>
  );
}

export default Confirmation;
