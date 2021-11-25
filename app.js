const express = require('express');
const connection = require('./db-config');

const app = express();

const port = process.env.PORT || 3000;
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
  } else {
    console.log(`connected as id ${connection.threadId}`);
  }
});

app.use(express.json());

// Rest of your code like routes

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
