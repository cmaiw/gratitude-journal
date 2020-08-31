import React from 'react';
import styled from '@emotion/styled';
import UniversalButton from '../components/UniversalButton';
import ConfirmationCardAfterDelete from '../components/ConfirmationCardAfterDelete';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';
import WrapperTitleBird from '../components/WrapperTitleBird';
import PageTitle from '../components/PageTitle';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';

const Origamibird = styled.img`
  height: 65px;
  width: 85px;
`;

const ButtonContainer = styled.div`
  margin-bottom: 34px;
`;

function Confirmation({ currentPage }) {
  const history = useHistory();
  function handleClick() {
    history.push(`/journal/${currentPage}`);
  }

  return (
    <PageWrapperCenterSpEvenly>
      <WrapperTitleBird>
        <PageTitle>Your Entry was deletetd</PageTitle>
        <Origamibird src="/images/birdlookingleft.png" />
      </WrapperTitleBird>
      <ConfirmationCardAfterDelete></ConfirmationCardAfterDelete>
      <ButtonContainer>
        <UniversalButton type="button" onClick={handleClick}>
          Back
        </UniversalButton>
      </ButtonContainer>
    </PageWrapperCenterSpEvenly>
  );
}

export default Confirmation;

Confirmation.propTypes = {
  currentPage: propTypes.number
};
