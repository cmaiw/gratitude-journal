import { useParams } from 'react-router-dom';

export async function saveEntriesToDB(entry) {
  await fetch('/api/entries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },

    body: JSON.stringify(entry)
  });
}

//  const { entryId } = useParams();
// export async function fetchData() {
//   const response = await fetch(`/api/entries/${entryId}`);
//     const data = await response.json();
//       setData(data);
//       return(fetchData)
//     }

// async function saveEditedEntriesToDB(value) {
//     setEdit();
//     await fetch(`/api/entries/${editId}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         name: value
//       })
//     });
//   }
