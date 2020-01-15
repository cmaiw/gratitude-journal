import React from 'react';
import styled from '@emotion/styled';
import UniversalButton from '../components/UniversalButton';
import ConfirmationCardEdit from '../components/ConfirmationCardEdit';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';
import WrapperTitleBird from '../components/WrapperTitleBird';
import PageTitle from '../components/PageTitle';
import { useHistory } from 'react-router-dom';

const Origamibird = styled.img`
  height: 65px;
  width: 85px;
`;

const ButtonContainer = styled.div`
  margin-bottom: 34px;
`;

function Confirmation() {
  const history = useHistory();
  function handleClick() {
    history.push('/journal');
  }

  return (
    <PageWrapperCenterSpEvenly>
      <WrapperTitleBird>
        <PageTitle>Thank you!</PageTitle>
        <Origamibird src="/images/birdlookingleft.png" />
      </WrapperTitleBird>
      <ConfirmationCardEdit></ConfirmationCardEdit>
      <ButtonContainer>
        <UniversalButton type="button" onClick={handleClick}>
          Back
        </UniversalButton>
      </ButtonContainer>
    </PageWrapperCenterSpEvenly>
  );
}

export default Confirmation;
