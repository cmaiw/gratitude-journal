import React from 'react';
import JournalInput from '../components/JournalInput';
import styled from '@emotion/styled';

export default {
  title: 'Input Fields'
};

export function EntryInputFormJournal() {
  const Label = styled.label`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    align-items: center;
    margin-bottom: 10px;
    background-color: ${props => props.theme.colors.quinary};
    border-radius: 8px;
  `;

  const Icon = styled.img`
    height: 40px;
    width: auto;
    padding: 5px;
    margin-right: 10px;
    padding: auto;
  `;

  return (
    <div>
      <p>
        Type your text here:{' '}
        <Label>
          <Icon src="/images/write.svg" />
          <JournalInput type="text" placeholder="Your text here:"></JournalInput>
        </Label>
      </p>
      <p>
        Type date here:{' '}
        <Label>
          <Icon src="/images/kalender.svg" />
          <JournalInput type="date" placeholder="YYYY-MM-DD"></JournalInput>
        </Label>
      </p>
    </div>
  );
}
