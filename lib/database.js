const MongoClient = require('mongodb').MongoClient;

let db = null;

async function initDb(url, dbName) {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  await client.connect();
  db = client.db(dbName);
}

async function getCollection(collectionName) {
  if (!db) {
    throw new Error('No DB initialized');
  }
  return db.collection(collectionName);
}

exports.initDb = initDb;
exports.getCollection = getCollection;
