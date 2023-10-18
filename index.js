const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 8000;
const mongoURI = 'mongodb://localhost:27017';
const dbName = 'mydatabase'; // Change this to your database name

// Connect to the MongoDB database
MongoClient.connect(mongoURI, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }

  console.log('Connected to the database');
  const db = client.db(dbName);

  // Define a simple route
  app.get('/', (req, res) => {
    res.send('Hello, Express!');
  });

  // Start the server after the database connection is established
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
