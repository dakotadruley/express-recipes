const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1/recipes', require('./routes/recipiesRoute'));
app.use('/api/v1/events', require('./routes/events'));

module.exports = app;
