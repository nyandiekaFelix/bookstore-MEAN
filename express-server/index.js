const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');

const config = require('./config/main');
const apiRoutes = require('./routes/index');

const PORT = config.port;

const app = express();

app.use(logger('dev'));

// Handling POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', apiRoutes);

mongoose.connect(config.database);

app.listen(PORT, () => {
	console.log(`listening on localhost:${PORT}`);
});