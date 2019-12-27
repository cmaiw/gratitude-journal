import React from 'react';
import EntryInput from '../components/EntryInput';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Entry Input'
};

export function JournalEntryInput(props) {
  return (
    <div onChange={action('key was pressed')} {...props}>
      <EntryInput></EntryInput>
    </div>
  );
}
