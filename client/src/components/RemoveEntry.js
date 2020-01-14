import React from 'react';
import { useParams } from 'react-router-dom';

export default function removeEntry() {
  const [removeEntry, setRemoveEntry] = React.useState({
    date: '',
    answerQuestionOne: '',
    answerQuestionTwo: '',
    answerQuestionThree: '',
    answerQuestionFour: '',
    answerQuestionFive: '',
    answerQuestionSix: '',
    favourite: false,
    id: ''
  });
  const { entryId } = useParams();

  async function handleRemove() {
    await fetch(`api/entries/delete/${entryId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  React.useEffect(() => {
    handleRemove(removeEntry);
    removeEntry(removeEntry);
  }, [entry]);

  return removeEntry;
}
