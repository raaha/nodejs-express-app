const express = require('express');
const app = express();

const dotenv = require('dotenv').config();
 
app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello, world!')
    .end();
});
 
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
