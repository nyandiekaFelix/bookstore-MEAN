const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const apiRoutes = require('./routes/index.js');


require('dotenv').load();

const app = express();

app.use(logger('dev'));

// Handling POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/api', apiRoutes);

module.exports = app;
