export async function saveEntriesToDB(entry) {
  await fetch(`/api/entries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },

    body: JSON.stringify(entry)
  });
}
