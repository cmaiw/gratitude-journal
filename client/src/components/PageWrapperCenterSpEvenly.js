import React from 'react';
import styled from '@emotion/styled';

const JournalPageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

function PageWrapperCenterSpEvenly(props) {
  return <JournalPageContainer {...props}></JournalPageContainer>;
}

export default PageWrapperCenterSpEvenly;
