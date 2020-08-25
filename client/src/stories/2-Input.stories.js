import React from 'react';
import JournalInput from '../components/JournalInput';
import { Label } from '../pages/NewEntry';
import styled from '@emotion/styled';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Input Fields'
};

export function EntryInputFormJournal() {
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
          <JournalInput
            type="text"
            placeholder="Your text here:"
            onChange={action(console.log())}
          ></JournalInput>
        </Label>
      </p>
      <p>
        Type date here:{' '}
        <Label>
          <Icon src="/images/kalender.svg" />
          <JournalInput
            type="date"
            placeholder="YYYY-MM-DD"
            onChange={action(console.log())}
          ></JournalInput>
        </Label>
      </p>
    </div>
  );
}
