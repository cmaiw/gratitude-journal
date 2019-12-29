import React from 'react';
import styled from '@emotion/styled';
import JournalLabel from '../components/JournalLabel';

const JournalCoverWrapper = styled.main`
  height: 568px;
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

function JournalCover() {
  return (
    <JournalCoverWrapper>
      <JournalLabel />
    </JournalCoverWrapper>
  );
}

export default JournalCover;
