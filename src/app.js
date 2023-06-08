const express = require('express');
const app = express();

app.get('/test', (_req, res) => {
  res.status(200).send('Hello world');
});

app.get('/test/', (_req, res) => {
  res.status(200).send('Welcome to the second Page');
});
module.exports = app;
