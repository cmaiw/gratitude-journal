import React from 'react';
import styled from '@emotion/styled';

const JournalPageTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-family: 'Dancing Script', cursive;
  font-size: 32px;
  margin: 0px;
  padding: 0px;
  align-self: center;
`;

function PageTitle(props) {
  return <JournalPageTitle {...props}></JournalPageTitle>;
}

export default PageTitle;
