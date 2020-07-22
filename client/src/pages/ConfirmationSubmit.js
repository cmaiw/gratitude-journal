import React from 'react';
import styled from '@emotion/styled';
import UniversalButton from '../components/UniversalButton';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';
import WrapperTitleBird from '../components/WrapperTitleBird';
import PageTitle from '../components/PageTitle';
import { useHistory } from 'react-router-dom';
import ConfirmationCardSubmit from '../components/ConfirmationCardSubmit';
import Header from '../components/Header';

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
    history.push('/new');
  }

  return (
    <PageWrapperCenterSpEvenly>
      <Header>Welcome</Header>
      <WrapperTitleBird>
        <PageTitle>Thank you!</PageTitle>
        <Origamibird src="/images/birdlookingleft.png" />
      </WrapperTitleBird>
      <ConfirmationCardSubmit></ConfirmationCardSubmit>
      <ButtonContainer>
        <UniversalButton type="button" onClick={handleClick}>
          Back
        </UniversalButton>
      </ButtonContainer>
    </PageWrapperCenterSpEvenly>
  );
}

export default Confirmation;
