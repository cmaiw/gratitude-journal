export async function saveEntriesToDB(entry) {
  return await fetch(`/api/entries/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },

    body: JSON.stringify(entry)
  });
}

export async function getAllEntries() {
  const response = await fetch(`/api/entries/`);
  const pastEntries = await response.json();
  return pastEntries;
}

export async function getOneEntry(entryId) {
  if (entryId) {
    const response = await fetch(`/api/entries/${entryId}`);
    const data = await response.json();
    console.log(data);
    return data;
  }
}

export async function deleteOneEntry(entryId) {
  return await fetch(`/api/entries/${entryId}`, {
    method: 'DELETE'
  });
}

export async function updateOneEntry(entryId, value) {
  console.log(entryId, value);
  await fetch(`/api/entries/edit/${entryId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      date: value.date,
      answerQuestionOne: value.answerQuestionOne,
      answerQuestionTwo: value.answerQuestionTwo,
      answerQuestionThree: value.answerQuestionThree,
      answerQuestionFour: value.answerQuestionFour,
      answerQuestionFive: value.answerQuestionFive,
      answerQuestionSix: value.answerQuestionSix,
      favourite: value.favourite
    })
  });
  console.log(entryId, value);
  return value;
}
