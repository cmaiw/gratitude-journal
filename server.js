require('dotenv').config();
const express = require('express');
const { initDb } = require('./lib/database');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 8081;
const {
  getEntries,
  getEntry,
  setEntry,
  updateEntry,
  deleteEntry
  // searchEntries
} = require('./lib/entries');

//middleware
app.use(express.json({ extended: false }));

// get routes

// app.get(`/api/entries/`, async (req, res) => {
//   try {
//     const entries = await getEntries();
//     res.send(entries);
//   } catch (error) {
//     console.error(error);
//     res.end();
//   }
// });

app.get('/api/entries/', async (req, res) => {
  try {
    const entries = await getEntries();
    res.send(entries);
  } catch (error) {
    console.error(error);
    res.end();
  }
});

app.get('/api/entries/:entryId', async (req, res) => {
  try {
    const result = await getEntry(req.params.entryId);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.end();
  }
});

//post routes

app.post('/api/entries/', (req, res) => {
  try {
    req.body;
    setEntry(req.body);
    res.end();
  } catch (error) {
    console.error(error);
    res.end();
  }
});

// patch routes

app.patch('/api/entries/edit/:entryId', async (req, res) => {
  try {
    const entryId = req.params.entryId;
    const value = req.body;
    await updateEntry(entryId, value);
    console.log(req.body);
    res.end();
  } catch (error) {
    console.error(error);
    res.end();
  }
});

// delete routes

app.delete('/api/entries/:entryId', async (req, res) => {
  try {
    await deleteEntry(req.params.entryId);
    res.send('Entry deleted');
  } catch (error) {
    console.error(error);
    res.send('Sorry, deleting your Entry was not possible.');
  }
});

// Serve any static files
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

initDb(process.env.DB_URL, process.env.DB_NAME).then(async () => {
  console.log(`Database ${process.env.DB_NAME} is connected`);

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT || '8081'}`);
  });
});
