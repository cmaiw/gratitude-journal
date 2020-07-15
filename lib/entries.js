const { getCollection } = require('./database');
const { ObjectID } = require('mongodb');

const collectionName = 'entries';

function getEntriesCollection() {
  return getCollection(collectionName);
}

// Get all elements and get ingle element functions

async function getEntries() {
  const collection = await getEntriesCollection();
  return await collection.find({}).toArray();
}

// Get one entry by id

async function getEntry(entryId) {
  const id = new ObjectID(entryId);
  const collection = await getCollection(collectionName);
  const result = await collection.findOne({ _id: id });
  console.log(id);
  return result;
}

// Post one element function

async function setEntry(entry) {
  const collection = await getCollection(collectionName);
  await collection.insertOne({ ...entry });
}

//Delete one element function

async function deleteEntry(entryId) {
  const id = new ObjectID(entryId);
  const collection = await getCollection(collectionName);
  await collection.deleteOne({ _id: id });
}

//Update one Entry

async function updateEntry(entryId, value) {
  const collection = await getCollection(collectionName);
  const query = new ObjectID(entryId);
  await collection.updateOne(
    { _id: query },
    {
      $set: {
        ...value
      }
    }
  );
  console.log(entryId, value);
}

// exports

exports.getEntries = getEntries;
exports.getEntry = getEntry;
exports.setEntry = setEntry;
exports.deleteEntry = deleteEntry;
exports.updateEntry = updateEntry;
