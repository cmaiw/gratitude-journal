import React from 'react';
import styled from '@emotion/styled';
import JournalLabel from '../components/JournalLabel';

const CoverPageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: auto;
`;

const JournalCoverBackground = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center;
  background-color: ${props => props.theme.colors.primary};
  align-self: center;
`;

function JournalCover() {
  return (
    <CoverPageWrapper>
      <JournalCoverBackground>
        <JournalLabel></JournalLabel>
      </JournalCoverBackground>
    </CoverPageWrapper>
  );
}

export default JournalCover;
