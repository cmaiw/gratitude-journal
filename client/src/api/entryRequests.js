export async function saveEntriesToDB(entries) {
  await fetch('http://localhost:8080/entries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },

    body: JSON.stringify(entries)
  });
}

export function getAllEntries(entries) {
  return fetch(`http://localhost:8080/entries`, {
    method: 'GET'
  })
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json(entries));
}
