import React from 'react';
import { useParams } from 'react-router-dom';

export default function removeEntry() {
  const [entry, setEntry] = React.useState([]);
  const [remove, setRemove] = React.useState();
  const [id, setId] = React.useState();
  const { entryId } = useParams();

  async function getEntry(id) {
    const data = await fetchEntry(id);
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
    getEntry(id);
    setRemove('');
  }, [remove]);

  React.useEffect(() => {
    getEntry();
  }, [id, remove]);

  return removeEntry;
}
