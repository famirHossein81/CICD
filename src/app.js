const express = require('express');
const app = express();

app.get('/test', (_req, res) => {
  res.status(200).send('Hello world');
});

app.get('/test/second', (_req, res) => {
  res.status(200).send('Welcome to the second Page');
});

app.get('/test/third', (_req, res) => {
  res.status(200).send('Welcome to the third Page');
});

app.get('/test/fourth', (_req, res) => {
  res.status(200).send('Welcome to the fourth Page');
});
module.exports = app;
