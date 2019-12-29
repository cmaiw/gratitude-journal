import styled from '@emotion/styled';
import React from 'react';

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
`;
const BookLabel = styled.img`
width: 60%
height: auto;
`;

function JournalLabel({ imgSrc = '../ressources/label.png', alt = 'Journal label with title' }) {
  return (
    <ImageWrapper>
      <BookLabel src={imgSrc} alt={alt} />
    </ImageWrapper>
  );
}

export default JournalLabel;
