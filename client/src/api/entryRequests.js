export async function saveEntriesToDB(entries) {
  await fetch('/api/entries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },

    body: JSON.stringify(entries)
  });
}
