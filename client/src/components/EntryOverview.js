import React from 'react';

export default function EntryOverview() {
  const [entries, setEntries] = React.useState(null);

  async function getAllEntries() {
    const response = await fetch('/api/entries');
    const pastEntries = await response.json();
    console.log(pastEntries);
    setEntries(pastEntries);
  }

  React.useEffect(() => {
    getAllEntries();
  }, []);

  return (
    <div>
      {entries &&
        entries.map(entry => (
          <div key={entry.date}>
            <h3>entry date:</h3>
            <div>{entry.date}</div>
            <h3>What made you smile or laugh that day?</h3>
            <p>{entry.answerQuestionOne}</p>
            <h3>What did you learn?</h3>
            <p>{entry.answerQuestionTwo}</p>
            <h3>Who made you smile or laugh?</h3>
            <p>{entry.answerQuestionThree}</p>
            <h3>What were you thankful for that day?</h3>
            <p>{entry.answerQuestionFour}</p>
            <h3>Who did you like to thank that day?</h3>
            <p>{entry.answerQuestionFive}</p>
            <h3>What were you looking for the next day?</h3>
            <p>{entry.answerQuestionSix}</p>
            <h3>One of your favourite entries?</h3>
            <p>{entry.favourite ? 'yes' : 'no'}</p>
          </div>
        ))}
    </div>
  );
}
