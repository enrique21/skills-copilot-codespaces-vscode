// Create web server
// Create a web server that listens on port 3000
// Create a route for GET requests to /comments
// Respond with a JSON object with the following key-value pairs:
// key: message value: Comments are not available
// Respond with a 200 status code
// Create a route for POST requests to /comments
// Respond with a 201 status code
// Respond with a JSON object with the following key-value pairs:
// key: message value: Comments posted
// Respond with a 405 status code for all other requests
// Respond with a JSON object with the following key-value pairs:
// key: message value: Method Not Allowed

const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
  res.status(200).json({ message: 'Comments are not available' });
});

app.post('/comments', (req, res) => {
  res.status(201).json({ message: 'Comments posted' });
});

app.all('/comments', (req, res) => {
  res.status(405).json({ message: 'Method Not Allowed' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});