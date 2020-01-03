import React from 'react';
import styled from '@emotion/styled';
import UniversalButton from '../components/UniversalButton';
import EntryConfirmationCard from '../components/EntryConfirmationCard';
import PageWrapperCenterSpEvenly from '../components/PageWrapperCenterSpEvenly';
import WrapperTitleBird from '../components/WrapperTitleBird';
import PageTitle from '../components/PageTitle';
import origamibird from '../../public/images/birdlookingleft.png';

const Origamibird = styled.img`
  height: 65px;
  width: 85px;
`;

function EntryConfirmationPage(props) {
  return (
    <PageWrapperCenterSpEvenly {...props}>
      <WrapperTitleBird>
        <PageTitle>Thank you!</PageTitle>
        <Origamibird src={origamibird} />
      </WrapperTitleBird>
      <EntryConfirmationCard></EntryConfirmationCard>
      <UniversalButton>Back</UniversalButton>
    </PageWrapperCenterSpEvenly>
  );
}

export default EntryConfirmationPage;
