import React from 'react';
import styled from '@emotion/styled';
import UniversalButton from './UniversalButton';

const Textarea = styled.div`
  width: 100%;
  height: auto;
  border-radius: 8px;
  padding: 3px;
  background: ${props => props.theme.colors.secondary};
  border: none;
  font-family: ;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 4px;
  justify-content: flex-start;
  align-items: space-around;
  margin-top: 8px;
`;

export default function EntryOverview(...props) {
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
    <div {...props}>
      {entries &&
        entries.map(entry => (
          <div key={entry.id}>
            <h3>Entry date:</h3>
            <Textarea>{entry.date}</Textarea>
            <h3>What made you smile or laugh that day?</h3>
            <Textarea type="text">{entry.answerQuestionOne}</Textarea>
            <h3>What did you learn?</h3>
            <Textarea>{entry.answerQuestionTwo}</Textarea>
            <h3>Who made you smile or laugh?</h3>
            <Textarea>{entry.answerQuestionThree}</Textarea>
            <h3>What were you thankful for that day?</h3>
            <Textarea>{entry.answerQuestionFour}</Textarea>
            <h3>Who did you like to thank that day?</h3>
            <Textarea>{entry.answerQuestionFive}</Textarea>
            <h3>What were you looking for the next day?</h3>
            <Textarea>{entry.answerQuestionSix}</Textarea>
            <h3>One of your favourite entries?</h3>
            <Textarea>{entry.favourite ? 'yes' : 'no'}</Textarea>
            <UniversalButton type="button">Edit</UniversalButton>
            <ButtonWrapper>
              <UniversalButton>delete</UniversalButton>
            </ButtonWrapper>
          </div>
        ))}
    </div>
  );
}
