const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const config = require('../config');
const convertData = require('./helpers/convert-data');

const app = express();

app.use(express.json());
app.use(cors());

const { api_src: url } = config;

app.get('/', async (req, res) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const converted = convertData(data);

    res.json(converted);
  } catch (error) {
    const { message } = error;
    console.log(`[ERROR] ${message}`);

    res.status(500).json([]);
  }
});

module.exports = app;
