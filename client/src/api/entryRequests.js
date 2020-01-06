export async function saveEntriesToDB(entry) {
  await fetch('http://localhost:8080/entries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },

    body: JSON.stringify(entry)
  });
}
