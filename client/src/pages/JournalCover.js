import React from 'react';
import styled from '@emotion/styled';
import JournalLabel from '../components/JournalLabel';

const JournalCoverWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
`;

function JournalCover() {
  return (
    <JournalCoverWrapper>
      <JournalLabel></JournalLabel>
    </JournalCoverWrapper>
  );
}

export default JournalCover;
