import React from 'react';
import styled from '@emotion/styled';

const JournalPageTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-family: 'Cookie', cursive;
  font-size: 36px;
  margin: 0px;
  padding: 0px;
`;

function PageTitle(props) {
  return <JournalPageTitle {...props}></JournalPageTitle>;
}

export default PageTitle;
