import React from 'react';
import JournalInput from '../components/JournalInput';

export default {
  title: 'Entry Input Form'
};

export function EntryInputFormJournal() {
  return (
    <div>
      <p>
        Type your text here: <JournalInput type="text" placeholder="Your text here:"></JournalInput>
      </p>
      <p>
        Type date here<JournalInput type="date" placeholder="YYYY-MM-DD"></JournalInput>
      </p>
    </div>
  );
}
