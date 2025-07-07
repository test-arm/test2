const express = require('express');
const _ = require('lodash');
const axios = require('axios');
const moment = require('moment');

const app = express();

app.get('/', (req, res) => {
  const data = _.merge({}, req.query);
  const timestamp = moment().format();
  res.json({ message: 'Hello World', timestamp, data });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
