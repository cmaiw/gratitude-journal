import React from 'react';
import { useParams } from 'react-router-dom';

export default function removeEntry() {
  const [removeEntry, setEntry] = React.useState({
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
  const [remove, setRemove] = React.useState();
  // const [id, setId] = React.useState();
  const { entryId } = useParams();

  async function getEntry() {
    const data = await fetchData();
    setEntry(data);
  }
  async function handleRemove() {
    await fetch(`api/entries/delete/${entryId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  React.useEffect(() => {
    handleRemove();
    getEntry();
    setRemove();
  }, [remove]);

  React.useEffect(() => {
    getEntry();
  }, [remove]);

  return removeEntry;
}
