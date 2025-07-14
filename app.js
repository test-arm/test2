const express = require('express');
const _ = require('lodash');
const axios = require('axios');
const moment = require('moment');

const app = express();
const PORT = 3000;

app.use(express.json());

// Simple route that uses vulnerable dependencies
app.get('/', (req, res) => {
  const timestamp = moment().format();
  const merged = _.merge({}, req.query);
  
  res.json({
    message: 'Dependabot Test App',
    timestamp: timestamp,
    query: merged
  });
});

app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
