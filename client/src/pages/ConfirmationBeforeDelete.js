import React from 'react';
import styled from '@emotion/styled';
import UniversalButton from '../components/UniversalButton';
import ConfirmationCardBeforeDelete from '../components/ConfirmationCardBeforeDelete';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';
import WrapperTitleBird from '../components/WrapperTitleBird';
import PageTitle from '../components/PageTitle';
import { useHistory, useParams } from 'react-router-dom';
import { deleteOneEntry } from '../api/entryRequests';

const Origamibird = styled.img`
  height: 65px;
  width: 85px;
`;

const ButtonContainer = styled.div`
  margin-bottom: 34px;
`;

function ConfirmationBeforeDelete() {
  const { entryId } = useParams();
  const history = useHistory();

  async function handleClickDelete() {
    console.log(await deleteOneEntry(entryId));
    history.push('/deleteconfirm/');
  }

  function handleClickBack() {
    history.push(`/entries/${entryId}`);
  }

  return (
    <PageWrapperCenterSpEvenly>
      <WrapperTitleBird>
        <PageTitle>Thank you!</PageTitle>
        <Origamibird src="/images/birdlookingleft.png" />
      </WrapperTitleBird>
      <ConfirmationCardBeforeDelete></ConfirmationCardBeforeDelete>
      <ButtonContainer>
        <UniversalButton type="button" onClick={handleClickDelete}>
          Delete
        </UniversalButton>
        <UniversalButton type="button" onClick={handleClickBack}>
          Back
        </UniversalButton>
      </ButtonContainer>
    </PageWrapperCenterSpEvenly>
  );
}

export default ConfirmationBeforeDelete;
